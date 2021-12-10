import { useDispatch } from 'react-redux';
import { Input } from 'components/search/input/Input';
import { setIsModal } from 'store/shop/slice';

import searchModalStyles from './search_modal.module.css';

export const Search_Modal = (): JSX.Element => {
  const dispatch = useDispatch();
  const handleClick = (): void => {
    dispatch(setIsModal(false));
  };
  const title = 'Поиск';

  return (
    <div className={searchModalStyles.modal}>
      <div className={searchModalStyles.header}>
        <button className={searchModalStyles.button} onClick={handleClick}>
          <i className={searchModalStyles.arrow} />
        </button>
        <div className={searchModalStyles.header_text}>{title}</div>
      </div>
      <div className={searchModalStyles.search_container}>
        <Input />
      </div>
    </div>
  );
};
