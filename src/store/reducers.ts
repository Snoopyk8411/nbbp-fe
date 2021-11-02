import { combineReducers } from '@reduxjs/toolkit';

import { welcomePageSlice } from './welcome/slice';

const rootReducer = combineReducers({
  welcomePage: welcomePageSlice.reducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
