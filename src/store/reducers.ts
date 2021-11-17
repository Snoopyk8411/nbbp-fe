import { combineReducers } from '@reduxjs/toolkit';

import { welcomePageSlice } from './welcome/slice';
import { pictureSlice } from './gleb/slice';

export const rootReducer = combineReducers({
  welcomePage: welcomePageSlice.reducer,
  picturePage: pictureSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
