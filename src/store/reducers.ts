import { combineReducers } from '@reduxjs/toolkit';

import { welcomePageSlice } from './welcome/slice';
import { pictureSlice } from './gleb/slice';

export const rootReducer = combineReducers({
  welcomePage: welcomePageSlice.reducer,
  picture: pictureSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
