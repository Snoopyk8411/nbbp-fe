import { ChangeEvent, useState, MouseEvent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { todosActions } from 'store/aleksei/todos/actions';
import addTodoStyles from './add-todo.module.css';
import { validateName } from './helpers/validateName';
import { EMPTY_VALUE } from 'tools/types/aleksei/const';
import * as addTodoConst from './constants';

const AddTodo: React.FC = () => {
  const [name, setName] = useState(EMPTY_VALUE);
  const [description, setDescription] = useState(EMPTY_VALUE);
  const [isAddButtonDisabled, setIsAddButtonDisabled] = useState(true);
  const dispatch = useDispatch();

  const handleAddTodoClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(
      todosActions.addTodo({
        name,
        description,
      }),
    );
  };

  useEffect(() => {
    setIsAddButtonDisabled(!validateName(name));
  }, [name]);

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
          <button onClick={handleAddTodoClick} disabled={isAddButtonDisabled}>
            Add todo
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
