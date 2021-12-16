import axios from 'axios';
import { useState, useEffect } from 'react';
import useDebounce from 'hooks/use-debounce';
import { API, SEARCH, LIMIT, STATUS_SUCCESS } from 'constants/';
import { IProduct } from 'tools/types/api-product-types';

export default function useSearchResult(searchValue: string, DELAY: number): any {
  const [searchResult, setSearchResult] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const debouncedValue = useDebounce(searchValue, DELAY);
  const SEARCH_API = `${API}/${SEARCH}${searchValue}${LIMIT}`;

  useEffect(() => {
    (async (): Promise<void> => {
      if (debouncedValue) {
        setIsLoading(true);
        const res = await axios.get(SEARCH_API);
        if (res.status !== STATUS_SUCCESS) {
          throw new Error(`Error: ${res.status}`);
        }
        setSearchResult(res.data);
        setIsLoading(false);
      }
    })();
  }, [debouncedValue]);

  return { searchResult, isLoading };
}
