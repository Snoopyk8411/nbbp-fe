import { NextApiRequest, NextApiResponse } from 'next';

import { Errors } from 'tools/types/api-catalog-items-types';

import { SEARCH_KEYS } from './constants';
import { mockProducts } from './mockProducts';
import { searchProduct } from './searchProduct';

const search = (req: NextApiRequest, res: NextApiResponse): void => {
  const { value = '', limit } = req.query;
  if (typeof value === 'string') {
    let result: object[] = searchProduct(value, mockProducts, SEARCH_KEYS);
    if (Number(limit)) {
      result = result.slice(0, Number(limit));
    }
    res.status(200).json(result);
    return;
  }
  res.status(400).end(Errors.WRONG_TYPE);
};

export default search;
