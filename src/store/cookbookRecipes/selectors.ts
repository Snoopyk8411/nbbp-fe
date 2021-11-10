import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store/reducers';
import { IRecipesStore } from './slice';

const getRecipesStore = (store: RootState) => store.recipes;

export const getRecipes = createSelector(getRecipesStore, (recipesStore: IRecipesStore) => recipesStore.data);
