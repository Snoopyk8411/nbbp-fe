import { NextApiRequest, NextApiResponse } from 'next';

import { SEARCH_KEYS, WRONG_QUERY_ERROR } from './constants';
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
  res.status(400).end(WRONG_QUERY_ERROR);
};

export default search;
