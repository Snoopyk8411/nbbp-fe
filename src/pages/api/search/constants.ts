import { ISearchKeysType } from './types';

export const SEARCH_KEYS: ISearchKeysType[] = ['title'];

export const SEARCH_DISTANCE = 20;

export const SEARCH_THRESHOLD = 0.3;

export const SEARCH_DISTANCE_LOOSE = 30;

export const SEARCH_THRESHOLD_LOOSE = 0.5;

export const KEYS: Record<string, string> = {
  q: 'й',
  w: 'ц',
  e: 'у',
  r: 'к',
  t: 'е',
  y: 'н',
  u: 'г',
  i: 'ш',
  o: 'щ',
  p: 'з',
  '[': 'х',
  ']': 'ъ',
  '{': 'х',
  '}': 'ъ',
  a: 'ф',
  s: 'ы',
  d: 'в',
  f: 'а',
  g: 'п',
  h: 'р',
  j: 'о',
  k: 'л',
  l: 'д',
  ';': 'ж',
  "'": 'э',
  ':': 'ж',
  '"': 'э',
  z: 'я',
  x: 'ч',
  c: 'с',
  v: 'м',
  b: 'и',
  n: 'т',
  m: 'ь',
  ',': 'б',
  '.': 'ю',
  '<': 'б',
  '>': 'ю',
};
