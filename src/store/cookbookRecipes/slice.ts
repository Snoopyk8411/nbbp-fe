import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IRecipe, IRecipeData } from './interfaces';

export interface IRecipesStore {
  error?: Error;
  counter: number;
  loading: boolean;
  data: IRecipeData;
}

const initialState: IRecipesStore = {
  loading: false,
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
  },
});
