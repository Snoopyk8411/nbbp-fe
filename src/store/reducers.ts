import { combineReducers } from '@reduxjs/toolkit';

import { welcomePageSlice } from './welcome/slice';
import { mediaSlice } from './gleb/slice';

const rootReducer = combineReducers({
  welcomePage: welcomePageSlice.reducer,
  mediaPage: mediaSlice.reducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
