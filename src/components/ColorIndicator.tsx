import { Character } from "@/types";

interface ColorIndicatorProps {
  guesses: Character[];
}

const ColorIndicator = ({ guesses }: ColorIndicatorProps) => {

  const showTip = guesses.length > 0;

  return showTip && (
    <div className="border-container mt-8 w-full max-w-[480px]">
      <div className="flex flex-col gap-2 bg-white rounded-xl p-2">
        <span id="player-tip" className="text-center text-lg text-gray-800 font-bold m-2">
          Color Indicators
        </span>
        <div className="flex flex-row gap-2 p-2">
          <div className="color-indicator">
            <div className="status-correct"></div>
            <p>Correct</p>
          </div>
          <div className="color-indicator">
            <div className="status-present"></div>
            <p>Partial</p>
          </div>
          <div className="color-indicator">
            <div className="status-absent"></div>
            <p>Absent</p>
          </div>
          <div className="color-indicator">
            <div className="status-absent guess-down"></div>
            <p>Lower</p>
          </div>
          <div className="color-indicator">
            <div className="status-absent guess-up"></div>
            <p>Higher</p>
          </div>
        </div>
      </div>
    </div >
  );
};

export default ColorIndicator;
