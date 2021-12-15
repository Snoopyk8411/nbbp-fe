import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store/reducers';
import { IShop } from './interfaces';

const selectShop = (state: RootState): IShop => state.shop;

export const selectIsSearch = createSelector(selectShop, state => state.isSearch);
export const selectIsModal = createSelector(selectShop, state => state.isModalOpen);
