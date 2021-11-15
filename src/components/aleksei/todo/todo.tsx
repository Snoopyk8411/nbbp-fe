import { useDispatch } from 'react-redux';
import { todosActions } from 'store/aleksei/todos/actions';
import * as models from 'tools/types/aleksei/models';
import todoStyles from './todo.module.css';

const Todo: React.FC<models.ITodo> = (todo: models.ITodo) => {
  const dispatch = useDispatch();

  const handleDoneClick = () => dispatch(todosActions.markDone(todo));
  const handleDeleteClick = () => dispatch(todosActions.removeTodo(todo));

  return (
    <article className={todoStyles.container}>
      <h2 className={todoStyles.header}>{todo.name}</h2>
      <p>{todo.description}</p>
      <div className={todoStyles.buttons}>
        {!todo.isDone && <button onClick={handleDoneClick}>Done</button>}
        <button onClick={handleDeleteClick}>Delete</button>
      </div>
    </article>
  );
};

export default Todo;
