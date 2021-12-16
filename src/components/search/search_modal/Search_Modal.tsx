import { useDispatch } from 'react-redux';
import { Input } from 'components/search/input/Input';
import { setIsModalOpen } from 'store/shop/slice';
import { TITLE } from './constants';

import searchModalStyles from './search_modal.module.css';

export const Search_Modal = (): JSX.Element => {
  const dispatch = useDispatch();
  const handleClose = (): void => {
    dispatch(setIsModalOpen(false));
  };

  return (
    <div className={searchModalStyles.modal}>
      <div className={searchModalStyles.header}>
        <button className={searchModalStyles.button} onClick={handleClose}>
          <i className={searchModalStyles.arrow} />
        </button>
        <div className={searchModalStyles.header_text}>{TITLE}</div>
      </div>
      <div className={searchModalStyles.search_container}>
        <Input />
      </div>
    </div>
  );
};
