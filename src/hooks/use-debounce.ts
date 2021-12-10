import { useState, useEffect } from 'react';

export default function useDebounce(value: unknown, delay: number): any {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return (): void => {
      clearTimeout(handler);
    };
  }, [value]);

  return debouncedValue;
}
