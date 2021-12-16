type NoteProps = {
  note: string;
};

export const Note: React.FC<NoteProps> = ({ note }: NoteProps): JSX.Element => {
  return <li>{note}</li>;
};
