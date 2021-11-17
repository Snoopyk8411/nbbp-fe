import { useState, ReactNode } from 'react';

import CreateNote from 'layout/gleb/components/create-note/Create-note';
import Note from 'layout/gleb/components/note/Note';
import Layout from 'layout/gleb/components/layout/Layout';

import styles from './note-list.module.css';

type INoteListType = ReactNode & {
  getLayout: (page: ReactNode) => JSX.Element;
};

const NoteList: INoteListType = () => {
  const [noteList, setNoteList] = useState<string[]>([]);

  const addNote = (note: string) => {
    setNoteList([note, ...noteList]);
  };

  return (
    <div className={styles.notes}>
      <div>
        <h1 className={styles.title}>Notes</h1>
        <ul>
          {noteList.map((note, index) => (
            <Note note={note} key={`note_${index + 1}`} />
          ))}
        </ul>
      </div>
      <CreateNote addNote={addNote} />
    </div>
  );
};

NoteList.getLayout = (page: ReactNode) => <Layout>{page}</Layout>;

export default NoteList;
