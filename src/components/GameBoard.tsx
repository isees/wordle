import { getCharacterById } from '@/data/onepiece/characters';
import { Character } from '@/types';
import { useEffect, useState, useRef } from 'react';
import { useDailyCharacter } from '../lib/daily-character';
import { GameRecord, loadGameHistory, loadGameState, saveGameRecord, saveGameState } from '../lib/storage';
import { getOrCreateUserId } from '../lib/user';
import Autocomplete from './Autocomplete';
import { VictoryBanner } from './VictoryBanner';
import GuessGrid from './GuessGrid';
import { UserHistory } from './UserHistory';

// 游戏主界面
const GameBoard = () => {
  const [userId] = useState(getOrCreateUserId());
  const [gameHistory, setGameHistory] = useState<GameRecord[]>([]);
  const [guesses, setGuesses] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isWon, setIsWon] = useState(false);
  const victoryBannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    localStorage.setItem('guesses', JSON.stringify(guesses));
  }, [guesses]);

  useEffect(() => {
    const lastPlayed = localStorage.getItem('lastPlayed');
    const today = new Date().toISOString().split('T')[0];

    if (lastPlayed !== today) {
      setGuesses([]);
      localStorage.setItem('lastPlayed', today);
      localStorage.removeItem('guesses');
    }
  }, []);

  useEffect(() => {
    const loadHistory = async () => {
      const history = await loadGameHistory(userId);
      setGameHistory(history);
    };
    loadHistory();
  }, [userId]);

  const targetCharacter = useDailyCharacter();
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);

  useEffect(() => {
    const checkVictoryState = (guesses: Character[]) => {
      const hasWon = guesses.some(guess =>
        guess.playerId === targetCharacter.playerId
      );
      setIsWon(hasWon);

      if (hasWon) {
        setTimeout(() => {
          victoryBannerRef.current?.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
    };

    const loadPersistedState = async () => {
      setIsLoading(true);
      const saved = await loadGameState();
      if (saved) {
        const validGuesses = saved.guessedIds
          .map(id => getCharacterById(id))
          .filter((c): c is Character => !!c);

        setGuesses(validGuesses);
        checkVictoryState(validGuesses);
      }
      setIsLoading(false);
    };

    loadPersistedState();
  }, [targetCharacter.playerId]);

  const handleGuess = (character: Character) => {
    const newGuesses = [...guesses, character];
    setGuesses(newGuesses);

    // Check if any guess matches target
    const hasWon = newGuesses.some(guess =>
      guess.playerId === targetCharacter.playerId
    );

    saveGameState({
      guessedIds: newGuesses.map(c => c.playerId),
      attempts: newGuesses.length,
      gameState: hasWon ? 'won' : 'playing',
      lastPlayed: new Date().toISOString(),
      version: 1,
    });

    if (hasWon) {
      setIsWon(true);
      saveGameRecord({
        userId,
        timestamp: new Date().toISOString(),
        guessedIds: newGuesses.map(c => c.playerId),
        result: 'win',
        attempts: newGuesses.length
      });
    }
  };

  useEffect(() => {
    setSelectedCharacter(targetCharacter); // 测试用
  }, [targetCharacter]);

  // Add useEffect for initial scroll check
  useEffect(() => {
    const checkWinState = async () => {
      const saved = await loadGameState();
      if (saved?.gameState === 'won') {
        setIsWon(true);
        // Wait for DOM rendering then scroll
        setTimeout(() => {
          victoryBannerRef.current?.scrollIntoView({
            behavior: 'auto',
            block: 'start'
          });
        }, 50);
      }
    };
    checkWinState();
  }, []);

  return (
    <div className="game-container">
      <UserHistory userId={userId} />

      <div className="main-content">
        {!isWon && (
          <div className="autocomplete-section mb-8">
            <Autocomplete
              onSelect={handleGuess}
              selectedCharacters={guesses}
            />
          </div>
        )}

        {isLoading ? (
          <div className="loading-section">Loading...</div>
        ) : (
          <div className="guessgrid-section">
            <GuessGrid
              guesses={guesses}
              target={targetCharacter}
            />
          </div>
        )}
      </div>

      {isWon && (
        <div ref={victoryBannerRef}>
          <VictoryBanner
            targetCharacter={targetCharacter}
            attempts={guesses.length}
          />
        </div>
      )}
    </div>
  );
};

export default GameBoard;