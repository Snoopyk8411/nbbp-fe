import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IWelcomePagaInitDataModel } from './interfaces';

export interface IWelcomePageData {
  error: Error | undefined;
  isLoading: boolean;
  counter: number;
  initData: IWelcomePagaInitDataModel;
}

const initialState: IWelcomePageData = {
  error: undefined,
  isLoading: false,
  counter: 0,
  initData: {},
};

export const welcomePageSlice = createSlice({
  name: 'welcomePage',
  initialState: initialState,
  reducers: {
    loadInitData: (state, _action: PayloadAction<IWelcomePagaInitDataModel>) => {
      return state;
    },

    setInitData: (state, action: PayloadAction<IWelcomePagaInitDataModel>) => {
      state.initData = action.payload;
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

export const { actions } = welcomePageSlice;
