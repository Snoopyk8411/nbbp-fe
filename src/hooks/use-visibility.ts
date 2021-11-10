import { RefObject, useEffect, useRef, useState } from 'react';

const BASE_OFFSET = 200;

export default function useVisibility<T extends HTMLElement>(offset = BASE_OFFSET): [boolean, RefObject<T>] {
  const [isVisible, setIsVisible] = useState(false);
  const currentElement = useRef<T>(null);

  const onScroll = () => {
    if (!currentElement.current) {
      setIsVisible(false);
      return;
    }
    const { top } = currentElement.current.getBoundingClientRect();
    setIsVisible(top + offset >= 0 && top - offset <= window.innerHeight);
  };

  useEffect(() => {
    document.addEventListener('scroll', onScroll, true);
    return () => document.removeEventListener('scroll', onScroll, true);
  }, []);

  return [isVisible, currentElement];
}
