import { FC, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import { ERROR_FRAME_ID } from 'layout/contributors/Ilia_Kotov/cookbook/constants';

import { ERROR_TIMEOUT } from './constants';
import errorMessageStyles from './errorMessage.module.css';

type ErrorMessageProps = {
  message: string;
};

const ErrorMessage: FC<ErrorMessageProps> = ({ message }) => {
  const container = useRef<HTMLDivElement>(document.querySelector(`#${ERROR_FRAME_ID}`) as HTMLDivElement);
  const [messages, setMessages] = useState<string[]>([]);
  useEffect(() => {
    if (message) {
      setMessages([message, ...messages]);
      setTimeout(() => setMessages(messages.slice(1)), ERROR_TIMEOUT);
    }
  }, [message]);

  const errors = messages.map((currentMessage, index) => (
    <div key={`erro-${index}`} className={errorMessageStyles.error}>
      {currentMessage}
    </div>
  ));

  return createPortal(errors, container.current);
};

export default ErrorMessage;
