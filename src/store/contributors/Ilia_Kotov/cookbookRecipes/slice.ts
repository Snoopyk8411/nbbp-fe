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
    loadRecipes: state => {
      return state;
    },

    setRecipes: (state, action: PayloadAction<IRecipeData>) => {
      state.data = action.payload;
    },

    addRecipe: (state, action: PayloadAction<IRecipe>) => {
      state.counter += 1;
      state.data.push({ ...action.payload, id: state.counter });
    },

    setError: (state, action: PayloadAction<Error | undefined>) => {
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
