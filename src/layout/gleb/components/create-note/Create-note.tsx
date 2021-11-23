import { ChangeEvent, KeyboardEvent, useState } from 'react';

import { Error } from 'layout/gleb/components/error/Error';
import { MAX_TITLE_LENGTH, MIN_TITLE_LENGTH, TEXTAREA_ROWS, PLACEHOLDER, ADD_NOTE_BTN_TEXT } from './constants';
import { ENTER_BUTTON, EMPTY_STRING } from 'constants/index';

import createNoteStyles from './create-note.module.css';

type CreateNoteProps = {
  addNote: (note: string) => void;
};

export const CreateNote: React.FC<CreateNoteProps> = ({ addNote }): JSX.Element => {
  const [title, setTitle] = useState(EMPTY_STRING);
  const [isError, setIsError] = useState(false);

  const handleChangeNote = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e?.target?.value ?? '';
    setTitle(value);
    if (isError) setIsError(false);
  };

  const titleLength = title.length;
  const isTitleLengthValid = titleLength <= MAX_TITLE_LENGTH && titleLength >= MIN_TITLE_LENGTH;

  const handleClickAddNote = () => {
    if (isTitleLengthValid) {
      addNote(title);
      setTitle(EMPTY_STRING);
    } else {
      setIsError(!isTitleLengthValid);
    }
  };

  const handleKeypress = (e: KeyboardEvent): void => {
    if (e.key === ENTER_BUTTON) {
      handleClickAddNote();
    }
  };

  return (
    <div className={createNoteStyles.create_note}>
      <div className={createNoteStyles.create_note_form}>
        <textarea
          rows={TEXTAREA_ROWS}
          value={title}
          onChange={handleChangeNote}
          placeholder={PLACEHOLDER}
          onKeyPress={handleKeypress}
          className={createNoteStyles.input}
          data-testid='AddNoteInputField'
        />

        <button
          type='button'
          onClick={handleClickAddNote}
          className={createNoteStyles.add_note_button}
          disabled={isError}
          data-testid='AddNoteButton'
        >
          {ADD_NOTE_BTN_TEXT}
        </button>
      </div>
      <Error error={isError} />
    </div>
  );
};
