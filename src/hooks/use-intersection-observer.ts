import { useEffect, useState } from 'react';

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
        rootMargin: '50% 50%',
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
