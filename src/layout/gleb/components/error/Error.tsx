import errorStyles from './error.module.css';

type ErrorProps = {
  error: boolean;
};

export const Error: React.FC<ErrorProps> = ({ error }) => {
  return (
    <div>
      {error && (
        <div className={errorStyles.error}>
          <p>The note length must not be shorter than 3 characters</p>
          <p>and</p>
          <p>must not exceed 20 characters.</p>
        </div>
      )}
    </div>
  );
};
