import { getCharacterById } from '@/data/onepiece/characters';
import { Character } from '@/types';
import localforage from 'localforage';
import { useEffect, useRef, useState } from 'react';
import { getDailySeed, useDailyCharacter } from '../lib/daily-character';
import { loadGameState, saveGameRecord, saveGameState } from '../lib/storage';
import { getOrCreateUserId } from '../lib/user';
import Autocomplete from './Autocomplete';
import ColorIndicator from './ColorIndicator';
import GamePanel from './GamePanel';
import GuessGrid from './GuessGrid';
import { VictoryBanner } from './VictoryBanner';

// Main Game Board
const GameBoard = () => {
  const [userId] = useState(getOrCreateUserId());
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


  const targetCharacter = useDailyCharacter();

  useEffect(() => {

    const loadPersistedState = async () => {
      setIsLoading(true);
      const saved = await loadGameState();
      const currentSeed = getDailySeed();

      if (saved?.version === 2 && saved.dailySeed === currentSeed) {
        const validGuesses = saved.guessedIds
          .map(getCharacterById)
          .filter(Boolean) as Character[];

        setGuesses(validGuesses);
        setIsWon(saved.gameState === 'won');

        // Force UI update after state load
        setTimeout(() => {
          if (saved.gameState === 'won') {
            victoryBannerRef.current?.scrollIntoView({ behavior: 'auto' });
          }
        }, 50);
      } else {
        await localforage.removeItem('gameState');
        setGuesses([]);
        setIsWon(false);
      }
      setIsLoading(false);
    };
    loadPersistedState();
  }, []);

  const handleGuess = (character: Character) => {
    const newGuesses = [...guesses, character];
    setGuesses(newGuesses);

    const hasWon = newGuesses.some(guess =>
      guess.playerId === targetCharacter.playerId
    );

    saveGameState({
      guessedIds: newGuesses.map(c => c.playerId),
      attempts: newGuesses.length,
      gameState: hasWon ? 'won' : 'playing',
      lastPlayed: new Date().toISOString(),
      dailySeed: getDailySeed(),
      version: 2
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
    <div className="container mx-auto px-4 pb-16 flex flex-col items-center">
      {/* <UserHistory userId={userId} /> */}
      <div className="flex op-logo" />

      {isLoading ? (
        <div className="loading-section flex items-center justify-center">
          <div className="loading-dots">
            <span>.</span><span>.</span><span>.</span>
          </div>
        </div>
      ) : (
          <div className="main-content">
            <div className="game-panel flex flex-col justify-center items-center w-full gap-4 mt-4">
              <div className="border-container">
                {isWon ? (
                  <div ref={victoryBannerRef} className="victory-content">
                    <VictoryBanner
                      targetCharacter={targetCharacter}
                      attempts={guesses.length}
                    />
                  </div>
                ) : (
                  <GamePanel guesses={guesses} />
                )}
              </div>
            </div>

            {!isWon && (
              <div className="autocomplete-section">
                <Autocomplete
                  onSelect={handleGuess}
                  selectedCharacters={guesses}
                />
              </div>
            )}

          <div className="guessgrid-section">
              <GuessGrid
                guesses={guesses}
                target={targetCharacter}
              />
          </div>

            {!isWon && guesses.length > 0 && (
              <ColorIndicator guesses={guesses} />
            )}
        </div>
      )}

      {/* Privacy Policy Footer */}
      <footer className="mt-16 mb-4 text-center text-sm text-gray-600 font-bold">
        <a
          href="/privacy-policy.html"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-700 hover:underline"
        >
          Privacy Policy
        </a>
      </footer>
    </div>
  );
};

export default GameBoard;