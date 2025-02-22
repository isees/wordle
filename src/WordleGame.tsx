import { useState, useEffect } from "react";
import { Grid } from "./components/grid/Grid";
import { Keyboard } from "./components/keyboard/Keyboard";
import { Alert } from "./components/alerts/Alert";
import { isWordInWordList, solution } from "./lib/words";
import { WinModal } from "./components/modals/WinModal";

export default function WordleGame() {
  const [guesses, setGuesses] = useState<string[]>([]);
  const [currentGuess, setCurrentGuess] = useState("");
  const [isGameWon, setIsGameWon] = useState(false);
  const [isWordNotFound, setIsWordNotFound] = useState(false);
  const [isWinModalOpen, setIsWinModalOpen] = useState(false);

  const onChar = (value: string) => {
    if (currentGuess.length < 5) {
      setCurrentGuess(`${currentGuess}${value}`);
    }
  };

  const onDelete = () => {
    setCurrentGuess(currentGuess.slice(0, -1));
  };

  const onEnter = () => {
    if (!isWordInWordList(currentGuess)) {
      setIsWordNotFound(true);
      setTimeout(() => setIsWordNotFound(false), 2000);
      return;
    }

    if (currentGuess === solution) {
      setIsGameWon(true);
      setIsWinModalOpen(true);
    }

    setGuesses([...guesses, currentGuess]);
    setCurrentGuess("");
  };

  useEffect(() => {
    if (isGameWon) {
      setIsWinModalOpen(true);
    }
  }, [isGameWon]);

  return (
    <div className="py-8 max-w-7xl mx-auto sm:px-6 lg:px-8">
      <Alert message="Word not found" isOpen={isWordNotFound} />
      <div className="flex w-80 mx-auto items-center mb-8">
        <h1 className="text-xl grow font-bold">Wordle</h1>
      </div>
      <Grid guesses={guesses} currentGuess={currentGuess} />
      <Keyboard
        onChar={onChar}
        onDelete={onDelete}
        onEnter={onEnter}
        guesses={guesses}
      />
      <WinModal
        isOpen={isWinModalOpen}
        handleClose={() => setIsWinModalOpen(false)}
        guesses={guesses}
      />
    </div>
  );
}