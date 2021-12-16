import { useState, ReactNode, FunctionComponent } from 'react';

import { CreateNote } from 'layout/gleb/components/create-note/Create-note';
import { Note } from 'layout/gleb/components/note/Note';
import { Layout } from 'layout/gleb/components/layout/Layout';

import noteListStyles from './note-list.module.css';

export type INoteListType = FunctionComponent & {
  getLayout: (page: ReactNode) => JSX.Element;
};

export const NoteList: INoteListType = (): JSX.Element => {
  const [noteList, setNoteList] = useState<string[]>([]);

  const addNote = (note: string): void => {
    const updatedNoteList = [note, ...noteList];
    setNoteList(updatedNoteList);
  };

  return (
    <div className={noteListStyles.notes}>
      <div>
        <h1 className={noteListStyles.title}>Notes</h1>
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

NoteList.getLayout = (page: ReactNode): JSX.Element => <Layout>{page}</Layout>;
