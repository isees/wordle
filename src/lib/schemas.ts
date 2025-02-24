import { z } from 'zod';

// Define character schema
export const CharacterSchema = z.object({
  playerId: z.number(),
  playerName: z.string(),
  alias: z.array(z.string()).default([]),
  epithet: z.array(z.string()).default([]),
  gender: z.string().default('Unknown'),
  affiliation: z.string().default('Unknown'),
  devilFruitType: z.string().default('None'),
  haki: z.array(z.string()).default([]),
  bounty: z.number().default(0),
  height: z.number().default(0),
  origin: z.string().default('Unknown'),
  debut: z.number().default(0),
  // 其他字段默认值...
});

// Define game state schema
export const GameStateSchema = z.object({
  guessedIds: z.array(z.number()),
  version: z.number().int().positive(),
  attempts: z.number().int().min(0).max(6),
  gameState: z.enum(['playing', 'won', 'lost']),
  lastPlayed: z.string().datetime()
});