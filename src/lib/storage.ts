import { GameState } from '@/types';
import localforage from 'localforage';
import { compress, decompress } from 'lz-string';
import { z } from 'zod';

// configure storage driver priority
localforage.config({
  driver: [
    localforage.INDEXEDDB,
    localforage.WEBSQL,
    localforage.LOCALSTORAGE
  ],
  name: 'one-piece-game',
  version: 1,
  storeName: 'game_data_v2',
  size: 10 * 1024 * 1024 // 10MB
});

const validateGameState = (state: any): state is GameState => {
  return !!state &&
    Array.isArray(state.guessedIds) &&
    typeof state.attempts === 'number' &&
    ['playing', 'won'].includes(state.gameState) &&
    typeof state.dailySeed === 'string';
};

// save game state with compression
export const saveGameState = async (state: GameState) => {
  try {
    console.log('Saving state:', state);
    const compressed = compress(JSON.stringify(state));
    console.log('Compressed length:', compressed?.length);

    await localforage.setItem('gameState', compressed);
    console.log('Save successful');

    if (navigator.storage && navigator.storage.persist) {
      await navigator.storage.persist();
    }

    // Call this after save/load
  } catch (error) {
    console.error('Save error:', error);
    // clean old data and try again
    await localforage.removeItem('gameState');
  }
};

// load game state
export const loadGameState = async (): Promise<GameState | null> => {
  try {
    const compressed = await localforage.getItem<string>('gameState');
    console.log('Loaded compressed:', compressed?.slice(0, 50)); // Log first 50 chars

    if (!compressed) {
      console.warn('No saved state found');
      return null;
    }

    const rawData = decompress(compressed);
    console.log('Decompressed data:', rawData?.slice(0, 200)); // Log partial data

    const parsed = JSON.parse(rawData || '');

    if (!validateGameState(parsed)) {
      console.error('Invalid game state:', parsed);
      await localforage.removeItem('gameState');
      return null;
    }

    // updated validation rules
    const result = z.object({
      guessedIds: z.array(z.number()),
      version: z.number(),
      attempts: z.number(),
      gameState: z.enum(['playing', 'won']),
      lastPlayed: z.string(),
      dailySeed: z.string()
    }).safeParse(parsed);

    return result.success ? result.data : null;
  } catch (error) {
    console.error('Load error:', error);
    return null;
  }
};

export interface GameRecord {
  userId: string;
  timestamp: string;
  guessedIds: number[];  // only store character ids
  result: 'win' | 'lose' | 'abandoned';
  attempts: number;
}

export const saveGameRecord = async (record: GameRecord) => {
  try {
    const history = await localforage.getItem<GameRecord[]>('gameHistory') || [];
    history.push(record);
    await localforage.setItem('gameHistory', history);
  } catch (error) {
    console.error('save game record failed:', error);
  }
};

export const loadGameHistory = async (userId: string): Promise<GameRecord[]> => {
  try {
    const history = await localforage.getItem<GameRecord[]>('gameHistory') || [];
    return history.map(record => ({
      ...record,
      guessedIds: record.guessedIds
    }));
  } catch (error) {
    return [];
  }
};

// add storage event listener
window.addEventListener('storage', (event) => {
  if (event.key === 'gameState') {
    console.log('Storage changed:', event.newValue);
  }
});

// add backup function
export const backupGameState = async () => {
  const state = await loadGameState();
  localStorage.setItem('gameStateBackup', JSON.stringify(state));
};

// add restore function
export const restoreGameState = async () => {
  const backup = localStorage.getItem('gameStateBackup');
  if (backup) {
    await localforage.setItem('gameState', compress(backup));
  }
};