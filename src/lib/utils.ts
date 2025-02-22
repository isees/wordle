import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getBountyColor = (relation: 'higher' | 'lower' | 'equal') => {
  return {
    higher: 'bg-yellow-100',
    lower: 'bg-blue-100',
    equal: 'bg-green-100'
  }[relation];
};

export const relationToText = (relation: 'higher' | 'lower' | 'equal') => {
  return {
    higher: '更高',
    lower: '更低',
    equal: '正确'
  }[relation];
};

export const getRelationSymbol = (relation: 'higher' | 'lower' | 'equal') => {
  return {
    higher: '↑',
    lower: '↓',
    equal: ''
  }[relation];
};
