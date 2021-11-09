import { Todo } from 'tools/types/aleksei/models';

export const validate = (todo: Todo) => {
  return todo.name?.length > 0;
};
