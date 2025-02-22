import arcs from '@/data/onepiece/arcs';
import { Character, CompareResult } from '@/types';

// 属性比较逻辑
export const compareAttributes = (guess: Character, target: Character): CompareResult => {
  return {
    gender: guess.gender === target.gender,
    affiliation: guess.affiliation === target.affiliation,
    devilFruit: guess.devilFruitName === target.devilFruitName,
    haki: getHakiStatus(guess.haki, target.haki),
    bounty: {
      value: guess.bounty,
      relation: getRelation(guess.bounty, target.bounty)
    },
    height: {
      value: guess.height,
      relation: getRelation(guess.height, target.height)
    },
    origin: guess.origin === target.origin,
    arc: {
      relation: getArcRelation(guess.debut, target.debut),
      value: getArcName(guess.debut)
    }
  };
};

const getRelation = (a: number, b: number) =>
  a === b ? 'equal' : a > b ? 'higher' : 'lower';

// 添加游戏状态验证
export const validateGameState = (guesses: Character[], target: Character) => {
  const lastGuess = guesses[guesses.length - 1];
  return {
    isWon: lastGuess?.playerId === target.playerId,
    isLost: guesses.length >= 6 && lastGuess?.playerId !== target.playerId
  };
};

const getHakiStatus = (guessed: string[], solution: string[]) => {
  const hasCommon = guessed.some(h => solution.includes(h));
  return arraysEqual(guessed, solution) ? 'correct' : hasCommon ? 'present' : 'absent';
};

const arraysEqual = (a: string[], b: string[]) => {
  if (a === b) return true;
  if (a.length !== b.length) return false;
  return a.every(val => b.includes(val)) && b.every(val => a.includes(val));
};

const getArcName = (chapter: number) => {
  return arcs.find(arc => chapter >= arc.from && chapter <= arc.to)?.value || 'Unknown';
};

const getArcRelation = (chapter: number, targetChapter: number) => {
  const guessedArc = getArcName(chapter);
  const solutionArc = getArcName(targetChapter);
  return guessedArc === solutionArc ? 'equal' : guessedArc < solutionArc ? 'lower' : 'higher';
};