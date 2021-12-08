import axios from 'axios';
import { IProductRepository, IProduct } from 'tools/types/api-product-types';

export const FAKE_API_URL = 'https://fakestoreapi.com/products';

export class ApiProductRepo implements IProductRepository {
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
