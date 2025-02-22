import { createContext, useState } from "react";
import { ReactNode } from "react";
import { getDailyCharacterId } from '../lib/daily-character';
import { Character } from "@/types";

// 游戏状态上下文
const GameContext = createContext<{
  attempts: number;
  gameState: 'playing' | 'won' | 'lost';
  addGuess: (character: Character) => void;
}>(null!);

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [attempts, setAttempts] = useState(0);
  const [gameState, setGameState] = useState<'playing' | 'won' | 'lost'>('playing');

  const addGuess = (character: Character) => {
    setAttempts(prev => prev + 1);
    if (character.playerId === getDailyCharacterId()) {
      setGameState('won');
    } else if (attempts >= 5) {
      setGameState('lost');
    }
  };

  return (
    <GameContext.Provider value={{ attempts, gameState, addGuess }}>
      {children}
    </GameContext.Provider>
  );
};