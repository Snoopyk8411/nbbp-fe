import { useDispatch } from 'react-redux';
import { todosActions } from 'store/aleksei/todos/actions';
import * as models from 'tools/types/aleksei/models';
import todoStyles from './todo.module.css';

type ITodoProps = models.ITodo;

const Todo: React.FC<models.ITodo> = (todo: ITodoProps) => {
  const { name, description, isDone } = todo;
  const dispatch = useDispatch();

  const handleDoneClick = () => dispatch(todosActions.markDone(todo));
  const handleDeleteClick = () => dispatch(todosActions.removeTodo(todo));

  return (
    <article className={todoStyles.container}>
      <h2 className={todoStyles.header}>{name}</h2>
      <p>{description}</p>
      <div className={todoStyles.buttons}>
        {!isDone && <button onClick={handleDoneClick}>Done</button>}
        <button onClick={handleDeleteClick}>Delete</button>
      </div>
    </article>
  );
};

export default Todo;
