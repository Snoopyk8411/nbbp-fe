import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITodo } from 'tools/types/aleksei/models';

export interface ITodosPageState {
  todos: ITodo[];
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
    addTodo: (state, action: PayloadAction<ITodo>) => {
      const nextId = state.todos.reduce((maxId, todo) => (maxId > todo.id ? maxId : todo.id), 0) + 1;
      const todo = { ...action.payload, id: nextId };
      state.todos.push(todo);
    },
    removeTodo: (state, action: PayloadAction<ITodo | { id: number }>) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
    },
    markDone: (state, action: PayloadAction<ITodo | { id: number }>) => {
      const todo = state.todos.find(todo => todo.id === action.payload.id);
      todo && (todo.isDone = true);
    },
  },
});
