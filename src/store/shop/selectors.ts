import { createSelector } from 'reselect';
import { RootState } from 'store/reducers';
import { IShopPageData } from './slice';

const selectShopPage = (state: RootState): IShopPageData => state.shopPage;

export const selectGeo = createSelector(selectShopPage, shopPage => shopPage.geo);
export const selectIsGeoOpen = createSelector(selectShopPage, state => state.isGeoOpen);
export const selectIsSearchUsed = createSelector(selectShopPage, state => state.isSearchUsed);
export const selectIsModalOpen = createSelector(selectShopPage, state => state.isModalOpen);
