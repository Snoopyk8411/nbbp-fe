import { ITodo } from 'tools/types/aleksei/models';

export const validate = (todo: ITodo) => {
  return todo.name?.length > 0;
};
