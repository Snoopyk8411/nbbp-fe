import Fuse from 'fuse.js';

import { IProduct, mockProducts } from './mockProducts';
import { shiftString } from './shiftString';
import { trimPunctuation } from './trimPunctuation';
import { SearchKeysType, SEARCH_DISTANCE } from './constants';

export const searchProduct = (value: string, products: IProduct[], keys: SearchKeysType[]): IProduct[] => {
  const searchString = trimPunctuation(value.trim());
  const options = {
    keys,
    distance: SEARCH_DISTANCE,
    getFn: (product: IProduct, path: string | string[]): string[] | string => {
      const key = Array.isArray(path) ? path[0] : path;
      if (typeof key === 'string') {
        const value = product[key as keyof IProduct];
        if (typeof value === 'string') {
          return value
            .split(' ')
            .map(word => word.trim())
            .map(trimPunctuation);
        }
        return value.toString();
      }
      return '';
    },
  };
  if (searchString.length === 0) {
    return products;
  }
  const fuse = new Fuse(mockProducts, options);
  let result: IProduct[] = fuse.search(searchString).map(result => result.item);
  if (result.length === 0 && value.length > 1) {
    const shiftedString: string = shiftString(value);
    console.log(shiftedString);
    if (shiftedString !== value) {
      result = fuse.search(shiftedString).map(result => result.item);
    }
  }
  return result;
};
