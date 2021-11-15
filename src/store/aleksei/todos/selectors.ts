import { createSelector } from 'reselect';
import { RootState } from '../../reducers';

export const selectTodos = (state: RootState) => Object.values(state.todosPage.todos);

export const selectRemainingTodos = createSelector(selectTodos, todos => todos.filter(todo => !todo.isDone));

export const selectDoneTodos = createSelector(selectTodos, todos => todos.filter(todo => todo.isDone));
