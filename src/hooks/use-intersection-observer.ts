import { useEffect, useState } from 'react';

export const useIntersectionObserver = (ref: React.RefObject<HTMLElement>): boolean => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry) {
        setIntersecting(entry.isIntersecting);
      }
    });
    if (ref.current) {
      observer.observe(ref.current);
    }
    return (): void => {
      observer.disconnect();
    };
  }, []);

  return isIntersecting;
};
