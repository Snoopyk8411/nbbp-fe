import type { NextApiRequest, NextApiResponse } from 'next';
import { PRODUCTS } from 'mock-data/product-data';
import { IProduct, IProductRepository } from 'tools/types/api-product-types';

const DEFAULT_PRODUCTS_LIMIT = 20;

class MockProductRepo implements IProductRepository {
  async getProducts(limit: number): Promise<IProduct[]> {
    return PRODUCTS.slice(0, limit);
  }
}

const fakeApiProductRepo = new MockProductRepo();

const getProductsHandler = async (req: NextApiRequest, res: NextApiResponse<IProduct[]>): Promise<void> => {
  const { limit } = req.query;
  try {
    const products = await fakeApiProductRepo.getProducts(Number(limit) | DEFAULT_PRODUCTS_LIMIT);
    res.status(200).send(products);
  } catch (err) {
    res.status(500).end(err);
  }
};

export default getProductsHandler;
