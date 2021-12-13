import { useDispatch } from 'react-redux';
import { IconComponent } from 'components/icon/Icon';
import { Input } from 'components/search/input/Input';
import { setIsModal } from 'store/shop/slice';

import searchStyles from './search.module.css';

export const Search = (): JSX.Element => {
  const dispatch = useDispatch();

  const searchIcon = 'Search';

  const handleClick = (): void => {
    dispatch(setIsModal(true));
  };

  return (
    <div className={searchStyles.search_container}>
      <div className={searchStyles.input_container}>
        <Input />
      </div>
      <button className={searchStyles.button} onClick={handleClick}>
        <IconComponent name={searchIcon} className={searchStyles.search_icon_button} />
      </button>
    </div>
  );
};