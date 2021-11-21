import { NextPage } from 'next';
import AddTodo from 'components/aleksei/add-todo/add-todo';
import { useDispatch, useSelector } from 'react-redux';
import { selectDoneTodos, selectRemainingTodos } from 'store/aleksei/todos/selectors';
import todoListPageStyles from './todos.module.css';
import { mockTodos } from 'mock-data/aleksei/todos';
import { ITodo } from 'tools/types/aleksei/models';
import { useEffect } from 'react';
import { todosActions } from 'store/aleksei/todos/actions';
import ToDoList from 'components/aleksei/todo-list/todo-list';

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
        <ToDoList title='Remaining' list={remainingTodos} emptyListTitle={'Nothing is remaining'} />
        <ToDoList title='Done' list={doneTodos} emptyListTitle={'Nothing is done yet'} />
      </main>
    </div>
  );
};

export const getStaticProps = async () => ({
  props: { todos: mockTodos },
});

export default TodoListPage;
