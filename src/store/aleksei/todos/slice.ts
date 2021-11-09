import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from 'tools/types/aleksei/models';

export interface ITodosPageState {
  todos: Todo[];
}

const initialState: ITodosPageState = {
  todos: [
    {
      id: 1,
      name: 'Get a coffee',
      description: 'Order cappuccino for friends',
      isDone: false,
    },
  ],
};

export const todosPageSlice = createSlice({
  name: 'todosPage',
  initialState: initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      const nextId = state.todos.reduce((maxId, todo) => (maxId > todo.id ? maxId : todo.id), 0) + 1;
      const todo = { ...action.payload, id: nextId };
      state.todos.push(todo);
    },
    removeTodo: (state, action: PayloadAction<Todo | { id: number }>) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
    },
    markDone: (state, action: PayloadAction<Todo | { id: number }>) => {
      const todo = state.todos.find(todo => todo.id === action.payload.id);
      todo && (todo.isDone = true);
    },
  },
});
