import React, { useState } from 'react';
import CreateNote from 'layout/gleb/components/create-note/Create-note';
import Note from 'layout/gleb/components/note/Note';
import Layout from 'layout/gleb/components/layout/Layout';
import styles from 'layout/gleb/components/note-list/note-list.module.css';

const NoteList = () => {
  const [noteList, setNoteList] = useState<string[]>([]);

  const addNote = (note: string) => {
    setNoteList([note, ...noteList]);
  };

  return (
    <div className={styles.notes}>
      <div>
        <h1 className={styles.title}>Notes</h1>
        <ul>
          {noteList.map(note => (
            <Note note={note} key={note} />
          ))}
        </ul>
      </div>
      <CreateNote addNote={addNote} />
    </div>
  );
};

NoteList.getLayout = function getLayout(page: typeof NoteList) {
  return <Layout>{page}</Layout>;
};

export default NoteList;
