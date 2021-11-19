import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store/reducers';
import { IRecipesStore } from './slice';

const selectRecipesStore = (store: RootState) => store.recipes;

export const selectRecipes = createSelector(selectRecipesStore, (recipesStore: IRecipesStore) => recipesStore.data);
