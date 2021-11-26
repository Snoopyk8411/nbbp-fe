import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store/reducers';
import { IRecipesStore } from './slice';

const selectRecipesData = (store: RootState): IRecipesStore => store.recipes;

export const selectRecipes = createSelector(selectRecipesData, (recipesStore: IRecipesStore) => recipesStore.data);

export const selectIsLoading = createSelector(
  selectRecipesData,
  (recipesStore: IRecipesStore) => recipesStore.isLoading,
);

export const selectError = createSelector(selectRecipesData, (recipesStore: IRecipesStore) => recipesStore.error);
