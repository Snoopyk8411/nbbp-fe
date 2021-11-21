import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getNextId } from 'tools/aleksei/getNextId';
import { ITodo, Todo } from 'tools/types/aleksei/models';

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
      todos.forEach(todo => todo.id && (state.todos[todo.id] = todo));
    },
    addTodo: (state, action: PayloadAction<{ name: string; description: string }>) => {
      const { name, description } = action.payload;
      const todosIds = Object.keys(state.todos);
      const nextId = getNextId(todosIds);
      const todo = new Todo(name, description);
      todo.id = nextId;
      state.todos[nextId] = todo;
    },
    removeTodo: (state, action: PayloadAction<{ id: number }>) => {
      const id = action.payload.id;
      id && delete state.todos[id];
    },
    markDone: (state, action: PayloadAction<{ id: number }>) => {
      const id = action.payload.id;
      const todo = id && state.todos[id];
      if (todo) {
        state.todos[id] = { ...todo, isDone: true };
      }
    },
  },
});
