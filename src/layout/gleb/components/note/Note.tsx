type NoteProps = {
  note: string;
};

const Note: React.FC<NoteProps> = ({ note }) => {
  return <li>{note}</li>;
};

export default Note;
