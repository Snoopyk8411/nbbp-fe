import Fuse from 'fuse.js';

import { shiftString } from './shiftString';
import { trimPunctuation } from './trimPunctuation';
import { SEARCH_DISTANCE } from './constants';
import { ISearchKeysType, ISearchResult } from './types';
import { IProduct } from 'tools/types/api-product-types';

export const searchProduct = (value: string, products: IProduct[], searchKeys: ISearchKeysType[]): IProduct[] => {
  const searchString = trimPunctuation(value.trim());
  const isEmptySearchString = searchString.length === 0;
  if (isEmptySearchString) {
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
  let result: ISearchResult[] = searchString
    .split(' ')
    .map(word => fuse.search(word))
    .flat()
    .reduce((searchResults: ISearchResult[], serachResult) => {
      if (!searchResults.find((entry: ISearchResult) => entry.item.id === serachResult.item.id)) {
        searchResults.push(serachResult);
      }
      return searchResults;
    }, []);
  const hasResults = !!result.length;
  const isOneCharSearch = value.length === 1;
  if (!hasResults && !isOneCharSearch) {
    const shiftedString: string = shiftString(value);
    if (shiftedString !== value) {
      result = fuse.search(trimPunctuation(shiftedString.trim()));
    }
  }
  return result.map(result => result.item);
};
