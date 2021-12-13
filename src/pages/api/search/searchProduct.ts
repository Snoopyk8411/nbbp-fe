import Fuse from 'fuse.js';

import { IProduct } from 'tools/types/api-product-types';

import { shiftString } from './shiftString';
import { trimPunctuation } from './trimPunctuation';
import { SEARCH_DISTANCE } from './constants';
import { ISearchKeysType, ISearchResult } from './types';

const searchWithSplit = (fuse: Fuse<IProduct>, searchString: string): ISearchResult[] => {
  const searchScores = searchString
    .split(' ')
    .map(word => fuse.search(trimPunctuation(word.trim())))
    .flat()
    .reduce((scores: Record<number, { result: ISearchResult; score: number }>, searchResult) => {
      const entry = scores[searchResult.item.id];
      if (entry) {
        entry.score += 1;
      } else {
        scores[searchResult.item.id] = { result: searchResult, score: 1 };
      }
      return scores;
    }, {});
  return Object.values(searchScores)
    .sort((a, b) => b.score - a.score)
    .map(item => item.result);
};

export const searchProduct = (value: string, products: IProduct[], searchKeys: ISearchKeysType[]): IProduct[] => {
  const isEmptyValue = value.length === 0;
  if (isEmptyValue) {
    return products;
  }
  const options = {
    keys: searchKeys,
    threshold: 0.3,
    distance: SEARCH_DISTANCE,
    getFn: (product: IProduct, path: string | string[]): string[] | string => {
      const searchKey = Array.isArray(path) ? path[0] : path;
      const value = product[searchKey as keyof IProduct];
      const isValueValid = !!value;
      return `${isValueValid ? value : ''}`
        .split(' ')
        .map(word => word.trim())
        .map(trimPunctuation);
    },
  };
  const fuse = new Fuse(products, options);
  let result: ISearchResult[] = searchWithSplit(fuse, value);
  const hasResults = !!result.length;
  const isOneCharSearch = value.length === 1;
  if (!hasResults && !isOneCharSearch) {
    const shiftedString: string = shiftString(value);
    if (shiftedString !== value) {
      result = searchWithSplit(fuse, shiftedString);
    }
  }
  return result.map(result => result.item);
};
