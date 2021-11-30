import { KEYS } from './constants';

export const shiftString = (word: string): string =>
  word
    .toLowerCase()
    .split('')
    .map(char => KEYS[char] || char)
    .join('');
