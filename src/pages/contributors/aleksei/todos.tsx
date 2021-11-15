import Todo from 'components/aleksei/todo/todo';
import { NextPage } from 'next';
import AddTodo from 'components/aleksei/add-todo/add-todo';
import { useDispatch, useSelector } from 'react-redux';
import { selectDoneTodos, selectRemainingTodos } from 'store/aleksei/todos/selectors';
import todoListPageStyles from './todos.module.css';
import { mockTodos } from 'mock-data/aleksei/todos';
import { ITodo } from 'tools/types/aleksei/models';
import { useEffect } from 'react';
import { todosActions } from 'store/aleksei/todos/actions';

interface ITodoListPageProps {
  todos: ITodo[];
}

const TodoListPage: NextPage<ITodoListPageProps> = ({ todos }: ITodoListPageProps) => {
  const remainingTodos = useSelector(selectRemainingTodos);
  const doneTodos = useSelector(selectDoneTodos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(todosActions.loadTodos(todos));
  }, [todos]);

  return (
    <div className={todoListPageStyles.container}>
      <AddTodo />
      <h2>Todos</h2>
      <main>
        <h3>Remaining:</h3>
        {remainingTodos.length > 0 ? (
          <ul className={todoListPageStyles.todo_list}>
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
          <ul className={todoListPageStyles.todoList}>
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

export const getStaticProps = async () => ({
  props: { todos: mockTodos },
});

export default TodoListPage;
