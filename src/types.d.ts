import { z } from 'zod';
import { GameStateSchema } from './lib/schemas';

declare interface Character extends z.infer<typeof CharacterSchema> {
  playerId: number;
  playerName: string;
  alias: string[];
  epithet: string[];
  gender: string;
  affiliation: string;
  devilFruitName: string;
  haki: string[];
  bounty: number;
  height: number;
  origin: string;
  debut: number;
  debutEpisode: number;
  status: string;
  bloodType: string;
  devilFruitType: string;
  devilFruitJapaneseName: string;
  // 其他必要字段...
}

declare const arcs: Array<{
  from: number;
  to: number;
  value: string;
}>;

declare interface GameState {
  guessedIds: number[];
  version: number;
  attempts: number;
  gameState: 'playing' | 'won' | 'lost';
  lastPlayed: string;
}

declare interface CompareResult {
  gender: boolean;
  affiliation: boolean;
  devilFruit: boolean;
  haki: 'correct' | 'present' | 'absent';
  bounty: {
    value: number;
    relation: 'higher' | 'lower' | 'equal';
  };
  height: {
    value: number;
    relation: 'higher' | 'lower' | 'equal';
  };
  origin: boolean;
  arc: {
    value: string;
    relation: 'higher' | 'lower' | 'equal';
  };
}

declare module "./lib/words" {
  export const solution: string;
  export const isWordInWordList: (word: string) => boolean;
}

// declare module '*.tsx' {
//   const content: any;
//   export default content;
// }