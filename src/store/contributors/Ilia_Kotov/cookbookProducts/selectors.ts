import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store/reducers';
import { IProductsData } from './interfaces';
import { IProductsStore } from './slice';

const selectProductsData = (state: RootState): IProductsStore => state.products;

export const selectProducts = createSelector(
  selectProductsData,
  (products: IProductsStore): IProductsData => products.data,
);

export const selectError = createSelector(
  selectProductsData,
  (products: IProductsStore): Error | undefined => products.error,
);
