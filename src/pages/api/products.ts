import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';
import { IProduct, IProductRepository } from 'tools/types/api-product-types';

const FAKE_API_URL = 'https://fakestoreapi.com/products';
const DEFAULT_PRODUCTS_LIMIT = 20;

class ApiProductRepo implements IProductRepository {
  constructor(private repoUrl: string) {}
  async getProducts(limit: number): Promise<IProduct[]> {
    const response = await axios.get<IProduct[]>(this.repoUrl, {
      params: {
        limit,
      },
    });
    return await response.data;
  }
}

const fakeApiProductRepo = new ApiProductRepo(FAKE_API_URL);

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
