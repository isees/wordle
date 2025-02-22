import { Card } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import arcs from "@/data/onepiece/arcs";
import { cn } from "@/lib/utils";
import { Character, CompareResult } from "@/types";
import { compareAttributes } from '../lib/game-logic';

interface GuessGridProps {
  guesses: Character[];
  target: Character;
}

const statusColors = {
  correct: "bg-green-500 text-white",
  present: "bg-yellow-500 text-black",
  absent: "bg-gray-200 text-black",
};

const getArcName = (chapter: number) => {
  return arcs.find(arc => chapter >= arc.from && chapter <= arc.to)?.value || 'Unknown';
};

const formatCompactBounty = (bounty: number) => {
  if (bounty >= 1e9) return `${Math.floor(bounty / 1e9)}B`;
  if (bounty >= 1e6) return `${Math.floor(bounty / 1e6)}M`;
  return bounty.toLocaleString();
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
    <div className="overflow-x-auto rounded-lg border shadow-sm">
      {/* Table Header */}
      <div className="grid grid-cols-8 gap-2 p-2 bg-muted/50">
        {headers.map((header, index) => (
          <div
            key={index}
            className="text-sm font-medium text-center p-2 text-foreground"
          >
            {header}
          </div>
        ))}
      </div>

      {/* Table Body */}
      <div className="space-y-2 p-2">
        {reversedGuesses.map((guess, index) => {
          const comparison = getComparison(guess);
          const avatarUrl = `./characters/${guess.playerId}.jpg`;

          return (
            <div
              key={index}
              className="grid grid-cols-8 gap-2 items-center"
            >
              {/* Character Card */}
              <Tooltip>
                <TooltipTrigger>
                  <Card className="aspect-square flex items-center justify-center overflow-hidden">
                    <img
                      src={avatarUrl}
                      alt={guess.playerName}
                      className="object-cover w-full h-full"
                    />
                  </Card>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{guess.playerName}</p>
                  {guess.alias.length > 0 && (
                    <p className="text-muted-foreground text-xs">
                      AKA: {guess.alias.join(', ')}
                    </p>
                  )}
                </TooltipContent>
              </Tooltip>

              {/* Gender */}
              <Card className={cn(
                "aspect-square flex items-center justify-center p-1",
                statusColors[comparison.gender ? "correct" : "absent"]
              )}>
                <span className="text-xs md:text-sm text-center">
                  {guess.gender}
                </span>
              </Card>

              {/* Affiliation */}
              <Card className={cn(
                "aspect-square flex items-center justify-center p-1",
                statusColors[comparison.affiliation ? "correct" : "absent"]
              )}>
                <span className="text-xs md:text-sm text-center">
                  {guess.affiliation}
                </span>
              </Card>

              {/* Devil Fruit */}
              <Card className={cn(
                "aspect-square flex items-center justify-center p-1",
                statusColors[comparison.devilFruit ? "correct" : "absent"]
              )}>
                <span className="text-xs md:text-sm text-center">
                  {guess.devilFruitName || 'None'}
                </span>
              </Card>

              {/* Haki */}
              <Card className={cn(
                "aspect-square flex items-center justify-center p-1",
                statusColors[comparison.haki]
              )}>
                <span className="text-xs md:text-sm text-center">
                  {guess.haki.join(', ') || 'None'}
                </span>
              </Card>

              {/* Bounty */}
              <Card className={cn(
                "aspect-square flex flex-col items-center justify-center p-1",
                statusColors[comparison.bounty.relation === "equal" ? "correct" : "absent"]
              )}>
                <span className="font-medium text-sm">
                  ฿{formatCompactBounty(guess.bounty)}
                </span>
                <span className="text-xs mt-0.5">
                  {comparison.bounty.relation === "higher" ? "↓" :
                    comparison.bounty.relation === "lower" ? "↑" : ""}
                </span>
              </Card>

              {/* Height */}
              <Card className={cn(
                "aspect-square flex flex-col items-center justify-center p-1",
                statusColors[comparison.height.relation === "equal" ? "correct" : "absent"]
              )}>
                <span className="font-medium text-sm">
                  {guess.height}cm
                </span>
                <span className="text-xs mt-0.5">
                  {comparison.height.relation === "higher" ? "↓" :
                    comparison.height.relation === "lower" ? "↑" : ""}
                </span>
              </Card>

              {/* Debut Arc */}
              <Card className={cn(
                "aspect-square flex flex-col items-center justify-center p-1",
                statusColors[comparison.arc.relation === 'equal' ? 'correct' : 'absent']
              )}>
                <span className="font-medium text-sm text-center">
                  {comparison.arc.value}
                </span>
                {comparison.arc.relation !== 'equal' && (
                  <span className="text-xs mt-0.5">
                    {comparison.arc.relation === 'higher' ? '↑' : '↓'}
                  </span>
                )}
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GuessGrid;