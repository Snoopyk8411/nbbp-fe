import { combineReducers } from '@reduxjs/toolkit';
import { productsSlice } from './cookbookProducts/slice';
import { recipesSlice } from './cookbookRecipes/slice';

import { welcomePageSlice } from './welcome/slice';

const rootReducer = combineReducers({
  welcomePage: welcomePageSlice.reducer,
  products: productsSlice.reducer,
  recipes: recipesSlice.reducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
