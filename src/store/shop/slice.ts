import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IGeoPoint } from 'tools/types/geolocation-types';

export interface IShopPageData {
  geo: IGeoPoint | null;
}

const initialState: IShopPageData = {
  geo: null,
};

export const shopPageSlice = createSlice({
  name: 'shopPage',
  initialState: initialState,
  reducers: {
    setGeo: (state, action: PayloadAction<IGeoPoint>) => {
      state.geo = action.payload;
    },
  },
});

export const { setGeo } = shopPageSlice.actions;
