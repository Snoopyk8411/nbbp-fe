import { ROOT_ID } from 'src/constants';
import { FC, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import errorFrameStyles from './errorFrame.module.css';
import cookBookTheme from 'layout/cookbook/cookbook-theme.module.css';
import { ERROR_ELEMENT_ID, ERROR_TIMEOUT } from './constants';

type ErrorFrameProps = {
  message: string;
};

export const ErrorFrame: FC<ErrorFrameProps> = ({ message }) => {
  const container = useRef<HTMLDivElement>();
  const [curMessages, setCurMessages] = useState<string[]>([]);
  useEffect(() => {
    container.current = document.querySelector(`#${ERROR_ELEMENT_ID}`) as HTMLDivElement;
    if (!container.current) {
      container.current = document.createElement('div');
      container.current.classList.add(errorFrameStyles.error as string);
      container.current.classList.add(cookBookTheme['cookbook-theme'] as string);
      container.current.id = ERROR_ELEMENT_ID;
      document.querySelector(`#${ROOT_ID}`)?.appendChild(container?.current);
      return () => {
        container?.current && document.querySelector(`#${ROOT_ID}`)?.removeChild(container?.current);
      };
    }
  }, []);
  useEffect(() => {
    setCurMessages([...curMessages, message]);
    setTimeout(() => setCurMessages(curMessages?.slice(1)), ERROR_TIMEOUT);
  }, [message]);
  const errors = (
    <>
      {curMessages.map((message, index) => (
        <div key={`error-${index}`} className={errorFrameStyles.message}>
          {message}
        </div>
      ))}
    </>
  );
  return container?.current ? createPortal(errors, container?.current) : null;
};
