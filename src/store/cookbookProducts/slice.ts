import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProductsData } from './interfaces';

export interface IProductsStore {
  data: IProductsData;
}

const initialState: IProductsStore = {
  data: [],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {
    setData: (state, action: PayloadAction<IProductsData>) => {
      state.data = action.payload;
    },
  },
});

export const { actions } = productsSlice;
