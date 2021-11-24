import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProductsData } from './interfaces';

export interface IProductsStore {
  data: IProductsData;
  error?: Error;
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
    setError: (state, action: PayloadAction<Error>) => {
      state.error = action.payload;
    },
  },
});

export const { actions } = productsSlice;
