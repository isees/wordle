import arcs from "@/data/onepiece/arcs";
import { Character } from "@/types";
import { cn } from "@/lib/utils";

// Add type definition at the top of the file
type Status = 'correct' | 'present' | 'absent';

interface ComparisonRowProps {
  guessed: Character;
  solution: Character;
}

const getArcName = (chapter: number) => {
  return arcs.find(arc => chapter >= arc.from && chapter <= arc.to)?.value || 'Unknown';
};

const arraysEqual = (a: string[], b: string[]) => {
  if (a === b) return true;
  if (a.length !== b.length) return false;
  return a.every(val => b.includes(val)) && b.every(val => a.includes(val));
};

const isSubset = (a: string[], b: string[]) => {
  return a.every(val => b.includes(val));
};

// Format bounty display
export const formatBounty = (bounty: number) => {
  if (bounty >= 1e9) return `${(bounty / 1e9).toFixed(0)}B`;
  if (bounty >= 1e6) return `${(bounty / 1e6).toFixed(0)}M`;
  return bounty.toLocaleString();
};

export const formatCompactBounty = (bounty: number) => {
  if (bounty >= 1e9) return `${Math.floor(bounty / 1e9)}B`;
  if (bounty >= 1e6) {
    const millions = Math.floor(bounty / 1e6);
    const remainder = Math.floor((bounty % 1e6) / 1e4);
    return remainder > 0 ? `${millions}M${remainder}` : `${millions}M`;
  }
  return bounty.toLocaleString();
};

const getHakiStatus = (guessed: string[], solution: string[]) => {
  const hasCommon = guessed.some(h => solution.includes(h));
  if (arraysEqual(guessed, solution)) return 'correct';
  return hasCommon ? 'present' : 'absent';
};

// Update statusColors definition
const statusColors: Record<Status, string> = {
  correct: 'bg-green-500',
  present: 'bg-yellow-500',
  absent: 'bg-gray-200',
};

const AttributeCell = ({ status, value }: { status: Status; value: string }) => {
  return (
    <div className={cn(
      "aspect-square flex items-center justify-center p-1",
      "w-[4rem] min-w-[3rem]", // Fixed dimensions
      statusColors[status]
    )}>
      <span className="text-xs leading-tight line-clamp-2">
        {value}
      </span>
    </div>
  );
};

const normalizeBounty = (bounty: number) => {
  // convert to million unit for comparison
  return Math.round(bounty / 1e6);
};

const getArcStatus = (guessedChapter: number, solutionChapter: number) => {
  const guessedArc = arcs.find(a => guessedChapter >= a.from && guessedChapter <= a.to);
  const solutionArc = arcs.find(a => solutionChapter >= a.from && solutionChapter <= a.to);

  if (!guessedArc || !solutionArc) return 'absent';
  return guessedArc.value === solutionArc.value ? 'correct' : 'absent';
};

const CharacterRow = ({ guessed, solution }: ComparisonRowProps) => {
  // Comparison logic for game attributes
  const isMatch = (field: keyof Character) => {
    const guessedVal = guessed[field];
    const solutionVal = solution[field];

    if (field === 'haki') {
      return arraysEqual(guessedVal as string[], solutionVal as string[]);
    }
    return guessedVal === solutionVal;
  };

  const guessedBounty = normalizeBounty(guessed.bounty);
  const solutionBounty = normalizeBounty(solution.bounty);
  const isBountyMatch = guessedBounty === solutionBounty;

  return (
    <div className="grid grid-cols-9 gap-1 w-full min-w-[600px]">
      <AttributeCell
        status={guessed.playerName === solution.playerName ||
          solution.alias.includes(guessed.playerName) ? 'correct' : 'absent'}
        value={guessed.playerName}
      />
      <AttributeCell status={isMatch('gender') ? 'correct' : 'absent'} value={guessed.gender} />
      <AttributeCell status={isMatch('affiliation') ? 'correct' : 'absent'} value={guessed.affiliation} />
      <AttributeCell status={isMatch('devilFruitType') ? 'correct' : 'absent'} value={guessed.devilFruitType} />
      <AttributeCell status={getHakiStatus(guessed.haki, solution.haki) === 'correct' ? 'correct' : getHakiStatus(guessed.haki, solution.haki) === 'present' ? 'present' : 'absent'} value={guessed.haki.join(', ')} />
      <AttributeCell
        status={isBountyMatch ? 'correct' : 'absent'}
        value={formatBounty(guessed.bounty)}
      />
      <AttributeCell status={guessed.height === solution.height ? 'correct' : 'absent'} value={`${guessed.height}cm`} />
      <AttributeCell status={isMatch('origin') ? 'correct' : 'absent'} value={guessed.origin} />
      <AttributeCell status={getArcStatus(guessed.debut, solution.debut) === 'correct' ? 'correct' : 'absent'} value={getArcName(guessed.debut)} />
    </div>
  );
};

interface Props {
  label: string;
  value?: string | number | string[];
}
const AttributeRow = ({ label, value }: Props) => {
  const formatValue = () => {
    if (value === undefined || value === null) return 'N/A';

    // 特殊处理数值类型
    if (label === 'Last Bounty') {
      return `฿${Number(value).toLocaleString()}`;
    }
    if (label === 'Height') {
      return `${value}cm`;
    }
    if (Array.isArray(value)) {
      return value.filter(Boolean).join(', ') || 'N/A';
    }
    return value.toString();
  };

  const formatArc = (debut: number) => {
    const arc = arcs.find(a => a.from <= debut && a.to >= debut);
    return arc?.value || 'Unknown Arc';
  };

  return (
    <div className="grid grid-cols-3 py-2 border-b">
      <span className="font-medium text-gray-600">{label}</span>
      <span className="col-span-2 text-gray-800">
        {label === 'Arc' && typeof value === 'number'
          ? formatArc(value)
          : formatValue()}
      </span>
    </div>
  );
};
