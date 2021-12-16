import { useDispatch } from 'react-redux';

import { IconComponent } from 'components/icon/Icon';
import { Input } from 'components/search/input/Input';
import { setIsModalOpen } from 'store/shop/slice';
import { SEARCH_ICON } from './constants';

import searchStyles from './search.module.css';

export const Search = (): JSX.Element => {
  const dispatch = useDispatch();

  const handleClick = (): void => {
    dispatch(setIsModalOpen(true));
  };

  return (
    <div className={searchStyles.search_container}>
      <div className={searchStyles.input_container}>
        <Input />
      </div>
      <button className={searchStyles.button} onClick={handleClick}>
        <IconComponent name={SEARCH_ICON} className={searchStyles.search_icon_button} />
      </button>
    </div>
  );
};
