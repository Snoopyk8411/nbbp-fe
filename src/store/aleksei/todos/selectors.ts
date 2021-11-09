import { RootState } from '../../reducers';

export const todosSelector = (state: RootState) => state.todosPage.todos;
