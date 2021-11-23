type NoteProps = {
  note: string;
};

export const Note: React.FC<NoteProps> = ({ note }): JSX.Element => {
  return <li>{note}</li>;
};
