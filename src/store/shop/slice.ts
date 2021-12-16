import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IGeoPoint } from 'tools/types/geolocation-types';

export interface IShopPageData {
  geo: IGeoPoint | null;
  isSearch: boolean;
  isModalOpen: boolean;
}

const initialState: IShopPageData = {
  geo: null,
  isSearch: false,
  isModalOpen: false,
};

export const shopPageSlice = createSlice({
  name: 'shopPage',
  initialState: initialState,
  reducers: {
    setGeo: (state, action: PayloadAction<IGeoPoint>) => {
      state.geo = action.payload;
    },
    setIsSearchUsed: (state, action: PayloadAction<boolean>) => {
      state.isSearch = action.payload;
    },
    setIsModalOpen: (state, action: PayloadAction<boolean>) => {
      state.isModalOpen = action.payload;
    },
  },
});

export const { setGeo, setIsSearchUsed, setIsModalOpen } = shopPageSlice.actions;
