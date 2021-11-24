import { combineReducers } from '@reduxjs/toolkit';
import { productsSlice } from './contributors/Ilia_Kotov/cookbookProducts/slice';
import { recipesSlice } from './contributors/Ilia_Kotov/cookbookRecipes/slice';

import { galleryPageSlice } from './contributors/ivanefimov/slice';
import { welcomePageSlice } from './welcome/slice';

const rootReducer = combineReducers({
  welcomePage: welcomePageSlice.reducer,
  products: productsSlice.reducer,
  recipes: recipesSlice.reducer,
  galleryPage: galleryPageSlice.reducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
