import { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { todosActions } from 'store/aleksei/todos/actions';
import addTodoStyles from './add-todo.module.css';
import { validate } from './helpers/validate';
import { EMPTY_VALUE } from 'tools/types/aleksei/const';

const AddTodo: React.FC = () => {
  const [name, setName] = useState(EMPTY_VALUE);
  const [description, setDesctiption] = useState(EMPTY_VALUE);
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

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value);
  const handleDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => setDesctiption(e.target.value);

  return (
    <div className={addTodoStyles.container}>
      <h2 className={addTodoStyles.header}>Add todo</h2>
      <form className={addTodoStyles.form}>
        <label htmlFor='name'>Name:</label>
        <input type='text' id='name' value={name} onChange={handleNameChange} />
        <label htmlFor='description'>Description:</label>
        <textarea id='description' cols={30} rows={10} value={description} onChange={handleDescriptionChange}></textarea>
        <div>
          <input type='button' onClick={() => addTodo()} disabled={isAddDisabled()} value='Add todo' />
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
