import { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { todosActions } from 'store/aleksei/todos/actions';
import addTodoStyles from './add-todo.module.css';
import { validateName } from './helpers/validateName';
import { EMPTY_VALUE } from 'tools/types/aleksei/const';
import * as addTodoConst from './const';

const AddTodo: React.FC = () => {
  const [name, setName] = useState(EMPTY_VALUE);
  const [description, setDescription] = useState(EMPTY_VALUE);
  const dispatch = useDispatch();

  const addTodo = () =>
    dispatch(
      todosActions.addTodo({
        id: 0,
        name: name,
        description: description,
        isDone: false,
      }),
    );

  const checkAddDisabled = () => {
    const isAddDisabled = !validateName(name);
    return isAddDisabled;
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value);
  const handleDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value);

  return (
    <div className={addTodoStyles.container}>
      <h2 className={addTodoStyles.header}>Add todo</h2>
      <form className={addTodoStyles.form}>
        <label htmlFor={addTodoConst.NAME_INPUT}>Name:</label>
        <input type='text' id={addTodoConst.NAME_INPUT} value={name} onChange={handleNameChange} />
        <label htmlFor={addTodoConst.DESCRIPTION_INPUT}>Description:</label>
        <textarea
          id={addTodoConst.DESCRIPTION_INPUT}
          cols={addTodoConst.DESCRIPTION_COLS}
          rows={addTodoConst.DESCRIPTION_ROWS}
          value={description}
          onChange={handleDescriptionChange}
        ></textarea>
        <div>
          <button onClick={() => addTodo()} disabled={checkAddDisabled()}>
            Add todo
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
