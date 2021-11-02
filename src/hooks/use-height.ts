import { RefObject, useEffect, useState } from 'react';
import useDebounce from './useDebounce';

const calculateHeight = (ref: RefObject<HTMLElement>, additionalRef?: RefObject<HTMLElement>) => {
  return (ref.current?.clientHeight || 0) - (additionalRef?.current?.clientHeight || 0);
};

export const useHeight = (ref: RefObject<HTMLElement>, additionalRef?: RefObject<HTMLElement>): number => {
  const [height, setHeight] = useState(calculateHeight(ref, additionalRef));

  useEffect(() => {
    const debouncedHandleResize = () => {
      setHeight(calculateHeight(ref, additionalRef));
    };

    window.addEventListener('resize', debouncedHandleResize);

    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
    };
  });

  // state is using only for recalculation
  return useDebounce(height || calculateHeight(ref, additionalRef), 100);
};
