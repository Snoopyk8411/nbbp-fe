import { createSelector } from 'reselect';
import { RootState } from 'store/reducers';
import { IShopPageData } from './slice';

const selectShopPage = (state: RootState): IShopPageData => state.shopPage;

export const selectGeo = createSelector(selectShopPage, shopPage => shopPage.geo);
export const selectIsSearch = createSelector(selectShopPage, state => state.isSearch);
export const selectIsModal = createSelector(selectShopPage, state => state.isModalOpen);
