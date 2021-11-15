import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getNextId } from 'tools/aleksei/getNextId';
import { ITodo } from 'tools/types/aleksei/models';

export interface ITodosPageState {
  todos: { [id: number]: ITodo };
}

const initialState: ITodosPageState = {
  todos: {
    1: {
      id: 1,
      name: 'Get a coffee',
      description: 'Order cappuccino for friends',
      isDone: false,
    },
  },
};

export const todosPageSlice = createSlice({
  name: 'todosPage',
  initialState: initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<ITodo>) => {
      const todosIds = Object.keys(state.todos);
      const nextId = getNextId(todosIds);
      const todo = { ...action.payload, id: nextId };
      state.todos[nextId] = todo;
    },
    removeTodo: (state, action: PayloadAction<ITodo | { id: number }>) => {
      delete state.todos[action.payload.id];
    },
    markDone: (state, action: PayloadAction<ITodo | { id: number }>) => {
      const todo = state.todos[action.payload.id];
      todo && (todo.isDone = true);
    },
  },
});
