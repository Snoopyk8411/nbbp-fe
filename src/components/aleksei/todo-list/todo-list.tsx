import { ITodo } from 'tools/types/aleksei/models';
import Todo from '../todo/todo';
import todoListStyles from './todo-list.module.css';

interface ITodoListProps {
  title: string;
  list: ITodo[];
  emptyListTitle: string;
}

const TodoList: React.FC<ITodoListProps> = ({ title, list, emptyListTitle }: ITodoListProps) => (
  <>
    <h3>{title}:</h3>
    {list.length > 0 ? (
      <ul className={todoListStyles.list}>
        {list.map(todo => (
          <li key={todo.id}>
            <Todo {...todo}></Todo>
          </li>
        ))}
      </ul>
    ) : (
      <div>{emptyListTitle}</div>
    )}
  </>
);

export default TodoList;
