import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getNextId } from 'tools/aleksei/getNextId';
import { ITodo } from 'tools/types/aleksei/models';

export interface ITodosPageState {
  todos: { [id: number]: ITodo };
}

const initialState: ITodosPageState = {
  todos: {},
};

export const todosPageSlice = createSlice({
  name: 'todosPage',
  initialState: initialState,
  reducers: {
    loadTodos: (state, action: PayloadAction<ITodo[]>) => {
      const todos = action.payload;
      todos.forEach(todo => (state.todos[todo.id] = todo));
    },
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
