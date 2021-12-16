import { useEffect, useState } from 'react';

import { ROOT_MARGIN } from 'constants/index';

export const useIntersectionObserver = (ref: React.RefObject<HTMLElement>): boolean => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting = entry?.isIntersecting;
        if (isIntersecting) {
          setIntersecting(true);
        }
      },
      {
        rootMargin: ROOT_MARGIN,
      },
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return (): void => {
      observer.disconnect();
    };
  }, []);

  return isIntersecting;
};
