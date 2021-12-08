import { useIntersectionObserver } from 'hooks/use-intersection-observer';
import { useRef } from 'react';

export const Image = (): JSX.Element => {
  const imgRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const isVisible = useIntersectionObserver(imgRef);
  return <div ref={imgRef}>{isVisible ? 'visible' : 'hidden'}</div>;
};
