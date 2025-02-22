const GAME_STATE_KEY = 'wordle-op-game-state';
const CURRENT_VERSION = 1;

const migrations = {
  1: (state: any) => ({
    ...state,
    guesses: state.guesses.map((g: any) => ({
      ...g,
      devilFruitName: g.devilFruitName || '无',
      haki: g.haki || [],
      bounty: g.bounty || 0,
      height: g.height || 0,
      origin: g.origin || '未知',
      debut: g.debut || 0
    })),
    alias: state.alias || [],
    epithet: state.epithet || [],
    guessedIds: state.guesses?.map((g: any) => g.playerId) || []
  })
};

const MAX_STORAGE_SIZE = 1024 * 1024 * 5; // 5MB

import { Character } from '@/types';
import localforage from 'localforage';
import { compress, decompress } from 'lz-string';
import { z } from 'zod';
import { CharacterSchema } from './schemas';
const GameStateSchema = z.object({
  guesses: z.array(CharacterSchema),
  version: z.number().int().positive(),
  attempts: z.number().int().min(0).max(6),
  gameState: z.enum(['playing', 'won', 'lost']),
  lastPlayed: z.string().datetime()
});

// 配置存储驱动优先级
localforage.config({
  driver: [
    localforage.INDEXEDDB,
    localforage.WEBSQL,
    localforage.LOCALSTORAGE
  ],
  name: 'one-piece-game',
  version: 1,
  storeName: 'game_data',
  size: 5 * 1024 * 1024 // 5MB
});

// 带压缩的存储方法
export const saveGameState = async (state: GameState) => {
  try {
    const completeState = {
      guessedIds: state.guessedIds,
      attempts: state.attempts,
      gameState: state.gameState,
      lastPlayed: new Date().toISOString(),
      version: 1,
    };

    const compressed = compress(JSON.stringify(completeState));
    await localforage.setItem('gameState', compressed);

    // 请求持久化存储（支持iOS）
    if (navigator.storage && navigator.storage.persist) {
      await navigator.storage.persist();
    }
  } catch (error) {
    console.error('Storage error:', error);
    // 清理旧数据后重试
    await localforage.removeItem('gameState');
  }
};

// 带解压的加载方法
export const loadGameState = async (): Promise<GameState | null> => {
  try {
    const compressed = await localforage.getItem<string>('gameState');
    if (!compressed) return null;

    const rawData = decompress(compressed);
    if (!rawData) return null;

    const parsed = JSON.parse(rawData);

    // 处理旧数据格式迁移
    const migratedData = {
      guessedIds: parsed.guesses ? parsed.guesses.map((g: any) => g.playerId) : parsed.guessedIds,
      version: parsed.version || 1,
      attempts: parsed.attempts || parsed.guesses?.length || 0,
      gameState: parsed.gameState || 'playing',
      lastPlayed: parsed.lastPlayed || new Date().toISOString()
    };

    // 更新后的校验规则
    const result = z.object({
      guessedIds: z.array(z.number()),
      version: z.number(),
      attempts: z.number(),
      gameState: z.enum(['playing', 'won', 'lost']),
      lastPlayed: z.string()
    }).safeParse(migratedData);

    return result.success ? result.data : null;
  } catch (error) {
    console.error('Load error:', error);
    return null;
  }
};

export interface GameRecord {
  userId: string;
  timestamp: string;
  guessedIds: number[];  // 只存储角色ID
  result: 'win' | 'lose' | 'abandoned';
  attempts: number;
}

export const saveGameRecord = async (record: GameRecord) => {
  try {
    const history = await localforage.getItem<GameRecord[]>('gameHistory') || [];
    history.push(record);
    await localforage.setItem('gameHistory', history);
  } catch (error) {
    console.error('保存游戏记录失败:', error);
  }
};

export const loadGameHistory = async (userId: string): Promise<GameRecord[]> => {
  try {
    const history = await localforage.getItem<GameRecord[]>('gameHistory') || [];
    return history.map(record => ({
      ...record,
      // 兼容旧数据格式
      guessedIds: 'guesses' in record ?
        (record as any).guesses.map((g: Character) => g.playerId) :
        record.guessedIds
    }));
  } catch (error) {
    return [];
  }
};

export interface GameState {
  guessedIds: number[];  // ✅ 只存储ID
  version: number;
  attempts: number;
  gameState: 'playing' | 'won' | 'lost';
  lastPlayed: string;
}