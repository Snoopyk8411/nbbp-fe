import { useDispatch } from 'react-redux';
import { todosActions } from 'store/aleksei/todos/actions';
import { models } from 'tools/types/aleksei/index';
import todoStyles from './todo.module.css';

type ITodoProps = models.ITodo;

const Todo: React.FC<models.ITodo> = (todo: ITodoProps) => {
  const { name, description, isDone } = todo;
  const dispatch = useDispatch();

  const handleDoneClick = () => todo.id && dispatch(todosActions.markDone({ id: todo.id }));
  const handleDeleteClick = () => todo.id && dispatch(todosActions.removeTodo({ id: todo.id }));

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
