import { Card } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Character, CompareResult } from "@/types";
import { compareAttributes } from '../lib/game-logic';

interface GuessGridProps {
  guesses: Character[];
  target: Character;
}

const formatCompactBounty = (bounty: number) => {
  if (bounty >= 1e9) return `${Math.floor(bounty / 1e9)}B`;
  if (bounty >= 1e6) return `${Math.floor(bounty / 1e6)}M`;
  return bounty.toLocaleString();
};

const isWordGreaterThan = (value: string, compareTo: number): boolean => {
  return value.split(' ').some(v => v.length > compareTo);
};

export const GuessGrid = ({ guesses, target }: GuessGridProps) => {
  const reversedGuesses = [...guesses].reverse();

  if (reversedGuesses.length === 0) return null;

  const headers = [
    'Character', 'Gender', 'Affiliation', 'Devil Fruit',
    'Haki', 'Bounty', 'Height', 'Debut Arc'
  ];

  const getComparison = (guess: Character): CompareResult => {
    return compareAttributes(guess, target);
  };

  return (
    <div className="border-container">
      <div className="rounded-lg border shadow-sm border-gray-300 bg-white">
        {/* Table Header */}
        <div className="grid grid-cols-8 gap-1 p-1 bg-muted/50 m-1 pb-3 border-b">
          {headers.map((header, index) => (
            <div
              key={index}
              className="grid-header"
            >
              {header}
            </div>
          ))}
        </div>

        {/* Table Body */}
        <div className="space-y-2 p-2">
          {reversedGuesses.map((guess, index) => {
            const comparison = getComparison(guess);
            const avatarUrl = `./images/avatar/${guess.playerId}.png`;

            return (
              <div key={guesses.length - index - 1}
                className="grid grid-cols-8 gap-2 items-center"
              >
                {/* Character Card */}
                <Tooltip>
                  <TooltipTrigger>
                    <Card className={cn(
                      "relative",
                      "baseCard",
                      "overflow-hidden"
                    )}>
                      <img
                        src={avatarUrl}
                        alt={guess.playerName}
                        className="avatar"
                      />
                    </Card>
                  </TooltipTrigger>
                  <TooltipContent>
                    <div className="flex flex-col items-start justify-center tip">
                      <p className="text-sm font-bold">{guess.playerName}</p>
                      {guess.alias.length > 0 && (
                        <p className="text-xs">
                          {guess.alias.join(', ')}
                        </p>
                      )}
                    </div>
                  </TooltipContent>
                </Tooltip>

                {/* Gender */}
                <Card className={cn(
                  "baseCard",
                  comparison.gender ? "status-correct" : "status-absent"
                )}>
                  <span className="card-content">
                    {guess.gender}
                  </span>
                </Card>

                {/* Affiliation */}
                <Card className={cn(
                  "baseCard",
                  comparison.affiliation ? "status-correct" : "status-absent"
                )}>
                  <span className={cn(
                    "card-content",
                    { "text-xs": isWordGreaterThan(guess.affiliation, 6) }
                  )}>
                    {guess.affiliation}
                  </span>
                </Card>

                {/* Devil Fruit */}
                <Card className={cn(
                  "baseCard",
                  comparison.devilFruit ? "status-correct" : "status-absent"
                )}>
                  <span className={cn(
                    "card-content",
                    { "text-xs": guess.devilFruitType.length > 8 }
                  )}>
                    {guess.devilFruitType || 'None'}
                  </span>
                </Card>

                {/* Haki */}
                <Card className={cn(
                  "baseCard",
                  `status-${comparison.haki}`
                )}>
                  <span className={cn("haki-content")}>
                    {
                      guess.haki.length === 0 || guess.haki[0] === "None" ? "None" :
                        guess.haki.map((haki) => {
                          return <Tooltip>
                            <TooltipTrigger>
                              <i className={`${haki.toLowerCase()}-haki haki-icon`} />
                            </TooltipTrigger>
                            <TooltipContent side="top">
                              <p className="tip">{haki}</p>
                            </TooltipContent>
                          </Tooltip>
                        })
                    }
                  </span>
                </Card>

                {/* Bounty */}
                <Card className={cn(
                  "baseCard",
                  `status-${comparison.bounty.relation === "equal" ? "correct" : "absent"}`,
                  comparison.bounty.relation === "higher" ? "guess-down" :
                    comparison.bounty.relation === "lower" ? "guess-up" : ""
                )}>
                  <span className="font-medium text-sm flex items-center">
                    <i className="beli-icon" />
                    {formatCompactBounty(guess.bounty)}
                  </span>
                </Card>

                {/* Height */}
                <Card className={cn(
                  "baseCard",
                  `status-${comparison.height.relation === "equal" ? "correct" : "absent"}`,
                  comparison.height.relation === "higher" ? "guess-down" :
                    comparison.height.relation === "lower" ? "guess-up" : ""
                )}>
                  <span className="font-medium text-sm">
                    {guess.height}cm
                  </span>
                </Card>

                {/* Debut Arc */}
                <Card className={cn(
                  "baseCard",
                  `status-${comparison.arc.relation === 'equal' ? 'correct' : 'absent'}`,
                  comparison.arc.relation === 'higher' ? 'guess-down' :
                    comparison.arc.relation === 'lower' ? 'guess-up' : ''
                )}>
                  <span className={cn(
                    "card-content",
                    { "text-xs": isWordGreaterThan(comparison.arc.value, 6) }
                  )}>
                    {comparison.arc.value}
                  </span>
                </Card>
              </div>
            );
          })}
        </div>
      </div> </div>
  );
};

export default GuessGrid;