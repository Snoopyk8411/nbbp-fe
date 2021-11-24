import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store/reducers';
import { IRecipesStore } from './slice';

const selectRecipesStore = (store: RootState): IRecipesStore => store.recipes;

export const selectRecipes = createSelector(selectRecipesStore, (recipesStore: IRecipesStore) => recipesStore.data);

export const selectIsLoading = createSelector(
  selectRecipesStore,
  (recipesStore: IRecipesStore) => recipesStore.isLoading,
);

export const selectError = createSelector(selectRecipesStore, (recipesStore: IRecipesStore) => recipesStore.error);
