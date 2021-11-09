import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { todosActions } from 'store/aleksei/todos/actions';
import styles from './add-todo.module.css';
import { validate } from './helpers/validate';

const AddTodo: React.FC = () => {
  const [name, setName] = useState('');
  const [description, setDesctiption] = useState('');
  const dispatch = useDispatch();

  const addTodo = () => {
    dispatch(
      todosActions.addTodo({
        id: 0,
        name: name,
        description: description,
        isDone: false,
      }),
    );
  };

  const isAddDisabled = () => {
    return !validate({
      id: 0,
      name: name,
      description: description,
      isDone: false,
    });
  };

  return (
    <div className={styles.addTodo}>
      <h2 className={styles.header}>Add todo</h2>
      <form className={styles.addTodoForm}>
        <label htmlFor='name'>Name:</label>
        <input type='text' id='name' value={name} onChange={e => setName(e.target.value)} />
        <label htmlFor='description'>Description:</label>
        <textarea id='description' cols={30} rows={10} value={description} onChange={e => setDesctiption(e.target.value)}></textarea>
        <div>
          <input type='button' onClick={() => addTodo()} disabled={isAddDisabled()} value='Add todo' />
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
