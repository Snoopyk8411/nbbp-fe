import { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from 'hooks/use-app-selector';
import useSearchResult from 'hooks/use-search-result';

import { IconComponent } from 'components/icon/Icon';
import { Loader } from 'components/Loader/Loader';
import { Search_Result } from 'components/search/search_result/Search_Result';
import { IProduct } from 'tools/types/api-product-types';
import { setIsSearchUsed } from 'store/shop/slice';
import { selectIsSearchUsed } from 'store/shop/selectors';

import { EMPTY_STRING } from 'constants/';
import { SEARCH_ICON, PLACEHOLDER, INPUT_AREA_LABEL, SHOW_ALL_BUTTON_TITLE, DELAY } from './constants';

import inputStyles from './input.module.css';

export const Input = (): JSX.Element => {
  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = useState(EMPTY_STRING);
  const { searchResult, isLoading }: { searchResult: IProduct[]; isLoading: boolean } = useSearchResult(
    searchValue,
    DELAY,
  );

  const isSearchUsed = useAppSelector(selectIsSearchUsed);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const nextSearchValue = event?.target?.value ?? '';
    dispatch(setIsSearchUsed(true));
    setSearchValue(nextSearchValue);
  };

  const showButtonCondition = searchResult.length > 5;

  return (
    <div className={inputStyles.search_block}>
      <div className={inputStyles.input_container}>
        <IconComponent name={SEARCH_ICON} className={inputStyles.search_icon_input} />
        <input
          type='search'
          placeholder={PLACEHOLDER}
          aria-label={INPUT_AREA_LABEL}
          className={inputStyles.search_input}
          onChange={handleChange}
          value={searchValue}
        />
        {isLoading && <Loader />}
      </div>
      {isSearchUsed && (
        <ul className={inputStyles.search_result_block}>
          {searchResult.map(item => {
            const { id, title, price, description, image, rating } = item;
            return (
              <li key={`prod${id}`}>
                <Search_Result title={title} price={price} description={description} image={image} rating={rating} />
              </li>
            );
          })}
          <div className={inputStyles.button_container}>
            {showButtonCondition && <button className={inputStyles.button}>{SHOW_ALL_BUTTON_TITLE}</button>}
          </div>
        </ul>
      )}
    </div>
  );
};
