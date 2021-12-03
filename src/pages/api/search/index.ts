import { NextApiRequest, NextApiResponse } from 'next';

import { IProduct } from 'tools/types/api-product-types';
import { PRODUCTS } from 'mock-data/product-data';

import { SEARCH_KEYS } from './constants';
import { searchProduct } from './searchProduct';

const searchProductApi = (req: NextApiRequest, res: NextApiResponse): void => {
  const { value = '', limit: limitParam } = req.query;
  const limit = Number.isNaN(Number(limitParam)) ? undefined : Number(limitParam);
  let result: IProduct[] = searchProduct(value as string, PRODUCTS, SEARCH_KEYS);
  result = result.slice(0, limit);
  res.status(200).json(result);
};

export default searchProductApi;
