import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store/reducers';
import { IProductsData } from './interfaces';
import { IProductsStore } from './slice';

const getProductsStore = (state: RootState) => state.products;

export const getProducts = createSelector(getProductsStore, (products: IProductsStore): IProductsData => products.data);

export const getIsLoading = createSelector(getProductsStore, (products: IProductsStore): boolean => products.isLoading);
