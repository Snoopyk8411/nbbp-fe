import { useDispatch } from 'react-redux';
import { todosActions } from 'store/aleksei/todos/actions';
import * as models from 'tools/types/aleksei/models';
import styles from './todo.module.css';

const Todo: React.FC<models.Todo> = (todo: models.Todo) => {
  const dispatch = useDispatch();

  return (
    <article className={styles.todo}>
      <h2 className={styles.todoHeader}>{todo.name}</h2>
      <p>{todo.description}</p>
      <div className={styles.buttons}>
        {!todo.isDone && <button onClick={() => dispatch(todosActions.markDone(todo))}>Done</button>}
        <button onClick={() => dispatch(todosActions.removeTodo(todo))}>Delete</button>
      </div>
    </article>
  );
};

export default Todo;
