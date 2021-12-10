import { combineReducers } from '@reduxjs/toolkit';
import { productsSlice } from './contributors/Ilia_Kotov/cookbookProducts/slice';
import { recipesSlice } from './contributors/Ilia_Kotov/cookbookRecipes/slice';

import { galleryPageSlice } from './contributors/ivanefimov/slice';
import { welcomePageSlice } from './welcome/slice';
import { mediaSlice } from './gleb/slice';
import { todosPageSlice } from './aleksei/todos/slice';
import { shopSlice } from './shop/slice';

const rootReducer = combineReducers({
  welcomePage: welcomePageSlice.reducer,
  products: productsSlice.reducer,
  recipes: recipesSlice.reducer,
  todosPage: todosPageSlice.reducer,
  galleryPage: galleryPageSlice.reducer,
  mediaPage: mediaSlice.reducer,
  shop: shopSlice.reducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
