import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IRecipe, IRecipeData } from './interfaces';

export interface IRecipesStore {
  error?: Error;
  counter: number;
  isLoading: boolean;
  data: IRecipeData;
}

const initialState: IRecipesStore = {
  isLoading: false,
  counter: 0,
  data: [],
};

export const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    loadInitData: (state, _action: PayloadAction<IRecipeData>) => {
      return state;
    },

    setRecipes: (state, action: PayloadAction<IRecipeData>) => {
      state.data = action.payload;
    },

    addRecipe: (state, action: PayloadAction<IRecipe>) => {
      state.data.push({ ...action.payload, id: (state.counter += 1) });
    },

    setError: (state, action: PayloadAction<Error>) => {
      state.error = action.payload;
    },

    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },

    deleteError: state => {
      state.error = undefined;
    },
  },
});
