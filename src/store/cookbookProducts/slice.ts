import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProductsData } from './interfaces';

export interface IProductsStore {
  error: Error | undefined;
  isLoading: boolean;
  counter: number;
  data: IProductsData;
}

const initialState: IProductsStore = {
  error: undefined,
  isLoading: false,
  counter: 0,
  data: [],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {
    loadInitData: (state, _action: PayloadAction<IProductsData>) => {
      return state;
    },

    setData: (state, action: PayloadAction<IProductsData>) => {
      state.data = action.payload;
    },

    setError: (state, action: PayloadAction<Error>) => {
      state.error = action.payload;
    },

    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },

    setCounter: (state, action: PayloadAction<number>) => {
      state.counter = action.payload;
    },

    setCounterIncrement: state => {
      state.counter += 1;
    },

    setCounterDecrement: state => {
      state.counter -= 1;
    },

    deleteError: state => {
      state.error = undefined;
    },

    resetFormState: () => {
      return initialState;
    },
  },
});

export const { actions } = productsSlice;
