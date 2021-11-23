import { FC } from 'react';
import { createPortal } from 'react-dom';
import cn from 'classnames';

import { ERROR_FRAME_ID } from 'layout/cookbook/constants';

import errorFrameStyles from './errorFrame.module.css';
import cookbookStyles from 'layout/cookbook/cookbook-theme.module.css';

const ErrorFrame: FC = () => {
  const bodyEl = document.querySelector('body') as HTMLBodyElement;
  const errorFrame = (
    <div className={cn(cookbookStyles['cookbook-theme'], errorFrameStyles.container)} id={ERROR_FRAME_ID}></div>
  );

  return createPortal(errorFrame, bodyEl);
};

export default ErrorFrame;
