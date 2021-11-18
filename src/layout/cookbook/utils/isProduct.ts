import { IProduct } from 'store/cookbookProducts/interfaces';

export const isProduct = (product: unknown): product is IProduct =>
  typeof product === 'object' &&
  Object.prototype.hasOwnProperty.call(product, 'id') &&
  Object.prototype.hasOwnProperty.call(product, 'name');
