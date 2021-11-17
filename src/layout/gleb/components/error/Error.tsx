import styles from './error.module.css';

type ErrorProps = {
  error: boolean;
};

const Error: React.FC<ErrorProps> = ({ error }) => {
  return (
    <div>
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

export default Error;
