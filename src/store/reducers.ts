import { combineReducers } from '@reduxjs/toolkit';

import { galleryPageSlice } from './contributors/ivanefimov/slice';
import { welcomePageSlice } from './welcome/slice';
import { todosPageSlice } from './aleksei/todos/slice';

const rootReducer = combineReducers({
  welcomePage: welcomePageSlice.reducer,
  todosPage: todosPageSlice.reducer,
  galleryPage: galleryPageSlice.reducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
