import Todo from 'components/aleksei/todo/todo';
import { NextPage } from 'next';
import AddTodo from 'components/aleksei/add-todo/add-todo';
import { useSelector } from 'react-redux';
import { todosSelector } from 'store/aleksei/todos/selectors';
import { useMemo } from 'react';
import styles from './todos.module.css';

const Todos: NextPage = () => {
  const todos = useSelector(todosSelector);

  const remainingTodos = useMemo(() => todos.filter(todo => !todo.isDone), [todos]);
  const doneTodos = useMemo(() => todos.filter(todo => todo.isDone), [todos]);

  return (
    <div className={styles.todos}>
      <AddTodo />
      <h2>Todos</h2>
      <main>
        <h3>Remaining:</h3>
        {remainingTodos.length > 0 ? (
          <ul className={styles.todoList}>
            {remainingTodos.map(todo => (
              <li key={todo.id}>
                <Todo {...todo}></Todo>
              </li>
            ))}
          </ul>
        ) : (
          <div>Nothing is remaining</div>
        )}
        <h3>Done:</h3>
        {doneTodos.length > 0 ? (
          <ul className={styles.todoList}>
            {doneTodos.map(todo => (
              <li key={todo.id}>
                <Todo {...todo}></Todo>
              </li>
            ))}
          </ul>
        ) : (
          <div>Nothing is done yet</div>
        )}
      </main>
    </div>
  );
};

export default Todos;
