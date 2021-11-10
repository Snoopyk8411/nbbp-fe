import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import styles from './create-note.module.css';

type Props = {
  addNote: (note: string) => void;
};

const CreateNote: React.FC<Props> = ({ addNote }) => {
  const [title, setTitle] = useState('');
  const [error, setError] = useState(false);

  const onChangeNote = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(e.target.value);
    setError(false);
  };

  const onClickaddNote = () => {
    if (title.length <= 20 && title.length >= 3) {
      addNote(title);
      setError(false);
    } else {
      setError(true);
    }
  };

  const handleKeypress = (e: KeyboardEvent): void => {
    if (e.key === 'Enter') {
      onClickaddNote();
    }
  };

  return (
    <div className={styles.create_note}>
      <div className={styles.create_note_form}>
        <textarea
          rows={3}
          value={title}
          onChange={onChangeNote}
          placeholder='Write new note'
          onKeyPress={handleKeypress}
          className={styles.input}
        />
        {error ? (
          <button type='button' onClick={onClickaddNote} className={styles.addNoteButton__disabled} disabled>
            add
          </button>
        ) : (
          <button type='button' onClick={onClickaddNote} className={styles.addNoteButton}>
            add
          </button>
        )}
      </div>
      {error && (
        <div className={styles.error}>
          <div>The note length must not be shorter than 3 characters</div>
          <div>and</div>
          <div>must not exceed 20 characters.</div>
        </div>
      )}
    </div>
  );
};

export default CreateNote;
