import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from 'hooks/use-app-selector';
import { useOutsideClick } from 'hooks/use-outside-click';

import { Bottom_Menu } from 'components/header_bottom_menu/Bottom_Menu';
import { IconComponent } from 'components/icon/Icon';
import { Search } from 'components/search/Search';
import { Search_Modal } from 'components/search/search_modal/Search_Modal';
import { setIsSearch } from 'store/shop/slice';
import { selectIsModal, selectIsSearch } from 'store/shop/selectors';
import { LOGO_NAME } from './constants';

import headerStyles from './header.module.css';

export const Header = (): JSX.Element => {
  const dispatch = useDispatch();
  const isModal = useAppSelector(selectIsModal);
  const isSearch = useAppSelector(selectIsSearch);

  const ref = useRef<HTMLInputElement>(null);

  const hideResults = (): void => {
    if (isSearch) {
      dispatch(setIsSearch(false));
    }
  };
  useOutsideClick(ref, hideResults);

  const mockHeaderTitle = 'некоторые другие иконки действий'; // remove when more menu items will be added

  return (
    <header className={`${headerStyles.header_fixed_always} ${headerStyles.header_with_shadow}`}>
      {isModal && <Search_Modal />}
      <div className={headerStyles.header__container}>
        <div className={headerStyles.header_level_top}>
          <IconComponent name={LOGO_NAME} className={headerStyles.logo} />
          <div ref={ref}>
            <Search />
          </div>
          <div>GEO</div>
          <div>{mockHeaderTitle}</div>
        </div>
        <div className={headerStyles.header_level_bottom}>
          <Bottom_Menu />
        </div>
      </div>
    </header>
  );
};
