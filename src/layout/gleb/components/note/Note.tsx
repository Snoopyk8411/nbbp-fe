type Props = {
  note: string;
};

const Note: React.FC<Props> = ({ note }) => {
  return <li>{note}</li>;
};

export default Note;
