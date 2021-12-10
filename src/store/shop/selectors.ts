import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store/reducers';

const selectShop = (state: RootState) => state.shop;

export const selectIsSearch = createSelector(selectShop, state => state.isSearch);
export const selectIsModal = createSelector(selectShop, state => state.isModal);
