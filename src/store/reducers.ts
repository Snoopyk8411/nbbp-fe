import { combineReducers } from '@reduxjs/toolkit';

import { galleryPageSlice } from './contributors/ivanefimov/slice';
import { welcomePageSlice } from './welcome/slice';

const rootReducer = combineReducers({
  welcomePage: welcomePageSlice.reducer,
  galleryPage: galleryPageSlice.reducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
