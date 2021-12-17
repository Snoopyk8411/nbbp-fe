import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IGeoPoint } from 'tools/types/geolocation-types';

export interface IShopPageData {
  geo: IGeoPoint | null;
  isGeoOpen: boolean;
  isSearchUsed: boolean;
  isModalOpen: boolean;
}

const initialState: IShopPageData = {
  geo: null,
  isGeoOpen: false,
  isSearchUsed: false,
  isModalOpen: false,
};

export const shopPageSlice = createSlice({
  name: 'shopPage',
  initialState: initialState,
  reducers: {
    setGeo: (state, action: PayloadAction<IGeoPoint>) => {
      state.geo = action.payload;
    },
    setIsGeoOpen: (state, action: PayloadAction<boolean>) => {
      state.isGeoOpen = action.payload;
    },
    setIsSearchUsed: (state, action: PayloadAction<boolean>) => {
      state.isSearchUsed = action.payload;
    },
    setIsModalOpen: (state, action: PayloadAction<boolean>) => {
      state.isModalOpen = action.payload;
    },
  },
});

export const { setGeo, setIsGeoOpen, setIsSearchUsed, setIsModalOpen } = shopPageSlice.actions;
