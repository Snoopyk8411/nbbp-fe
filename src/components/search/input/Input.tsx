import axios from 'axios';
import { SetStateAction, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import useDebounce from 'hooks/use-debounce';
import { useAppSelector } from 'hooks/use-app-selector';
import { IconComponent } from 'components/icon/Icon';
import { Loader } from 'components/loader/Loader';
import { Search_Result } from 'components/search/search_result/Search_Result';
import { IProduct } from 'tools/types/api-product-types';
import { setIsSearch } from 'store/shop/slice';
import { selectIsSearch } from 'store/shop/selectors';
import { API, SEARCH, LIMIT, EMPTY_STRING } from 'constants/';

import inputStyles from './input.module.css';

export const Input = (): JSX.Element => {
  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = useState(EMPTY_STRING);
  const [searchResult, setSearchResult] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isResultsRendered, setIsResultsRendered] = useState(false); // нужен, чтобы кнопка "Показать всё" в выдаче результатов поиска не появлялась раньше результатов

  const isSearch = useAppSelector(selectIsSearch);

  const debouncedValue = useDebounce(searchValue, 500);
  const searchIcon = 'Search';
  const placeholder = 'Начните поиск';
  const inputAriaLabel = 'Search through site content.';
  const showAllbuttonTitle = 'Показать всё';

  const SEARCH_API = `${API}/${SEARCH}${searchValue}${LIMIT}`;

  useEffect(() => {
    (async (): Promise<void> => {
      if (debouncedValue) {
        setIsLoading(true);
        const res = await axios.get(SEARCH_API);
        if (res.status !== 200) {
          throw new Error(`Error: ${res.status}`);
        }
        setSearchResult(res.data);
        setIsLoading(false);
      }
    })();
  }, [debouncedValue]);

  const handleChange = (event: { target: { value: SetStateAction<string> } }): void => {
    const res = event.target.value;
    dispatch(setIsSearch(true));
    setSearchValue(res);
  };

  return (
    <div className={inputStyles.search_block}>
      <div className={inputStyles.input_container}>
        <IconComponent name={searchIcon} className={inputStyles.search_icon_input} />
        <input
          type='search'
          placeholder={placeholder}
          aria-label={inputAriaLabel}
          className={inputStyles.search_input}
          onChange={handleChange}
          value={searchValue}
        />
        {isLoading && <Loader />}
      </div>
      {isSearch && (
        <ul className={inputStyles.search_result_block}>
          {searchResult.map(item => {
            const { id, title, price, description, image, rating } = item;
            return (
              <li key={`prod${id}`}>
                <Search_Result
                  title={title}
                  price={price}
                  description={description}
                  image={image}
                  rating={rating}
                  setIsResultsRendered={setIsResultsRendered}
                />
              </li>
            );
          })}
          <div className={inputStyles.button_container}>
            {isResultsRendered && <button className={inputStyles.button}>{showAllbuttonTitle}</button>}
          </div>
        </ul>
      )}
    </div>
  );
};