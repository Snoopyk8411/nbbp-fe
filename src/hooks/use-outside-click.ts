import { useEffect } from 'react';

type Ref = { current: HTMLElement | null };
export const useOutsideClick = (ref: Ref, callback: () => void): void => {
  const handleClick = (e: any): void => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };
  useEffect(() => {
    document.addEventListener('click', handleClick);
    return (): void => {
      document.removeEventListener('click', handleClick);
    };
  });
};
