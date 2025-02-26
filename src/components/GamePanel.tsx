import { Character } from "@/types";

interface GamePanelProps {
  guesses: Character[];
}

const GamePanel = ({ guesses }: GamePanelProps) => {
  // Determine whether to show the player tip
  const showTip = guesses.length === 0;

  return (
    <div className="game-description">
      <p className="text-center font-bold text-[#0086bbcc] text-2xl uppercase">
        Guess today's character!
      </p>
      {showTip && (
        <p id="player-tip" className="text-center text-lg text-gray-400 font-bold mt-2">
          Type any character to begin.
        </p>
      )}
    </div>
  );
};

export default GamePanel;
