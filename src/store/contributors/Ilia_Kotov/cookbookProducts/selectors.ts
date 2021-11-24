import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store/reducers';
import { IProductsData } from './interfaces';
import { IProductsStore } from './slice';

const selectProductsStore = (state: RootState): IProductsStore => state.products;

export const selectProducts = createSelector(
  selectProductsStore,
  (products: IProductsStore): IProductsData => products.data,
);

export const selectError = createSelector(
  selectProductsStore,
  (products: IProductsStore): Error | undefined => products.error,
);
