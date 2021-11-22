import type { NextApiRequest, NextApiResponse } from 'next';

import PRODUCTS from 'store/cookbook-products-data-mock.json';
import { IProduct } from 'store/cookbookProducts/interfaces';

export default function handler(req: NextApiRequest, res: NextApiResponse<IProduct[]>): void {
  res.status(200).json(PRODUCTS);
}
