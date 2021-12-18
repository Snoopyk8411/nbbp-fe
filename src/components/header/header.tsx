import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from 'hooks/use-app-selector';
import { useOutsideClick } from 'hooks/use-outside-click';

import { Bottom_Menu } from 'components/header_bottom_menu/Bottom_Menu';
import { GeoWidget } from 'components/geo-widget/geo-widget';
import { IconComponent } from 'components/icon/Icon';
import { Search } from 'components/search/Search';
import { Search_Modal } from 'components/search/search_modal/Search_Modal';
import { setIsSearchUsed, setIsGeoOpen } from 'store/shop/slice';
import { selectIsModalOpen, selectIsSearchUsed, selectIsGeoOpen } from 'store/shop/selectors';
import { LOGO_NAME } from './constants';

import headerStyles from './header.module.css';

export const Header = (): JSX.Element => {
  const dispatch = useDispatch();
  const isModalOpen = useAppSelector(selectIsModalOpen);
  const isSearchOpen = useAppSelector(selectIsSearchUsed);
  const isGeoOpen = useAppSelector(selectIsGeoOpen);

  const refSearch = useRef<HTMLInputElement>(null);
  const refGeo = useRef<HTMLInputElement>(null);

  const hideSearchResults = (): void => {
    if (isSearchOpen) {
      dispatch(setIsSearchUsed(false));
    }
  };
  useOutsideClick(refSearch, hideSearchResults);

  const hideGeoWidget = (): void => {
    if (isGeoOpen) {
      dispatch(setIsGeoOpen(false));
    }
  };
  useOutsideClick(refGeo, hideGeoWidget);

  const mockHeaderTitle = 'некоторые другие иконки действий'; // remove when more menu items will be added

  return (
    <header className={`${headerStyles.header_fixed_always} ${headerStyles.header_with_shadow}`}>
      {isModalOpen && <Search_Modal />}
      <div className={headerStyles.header__container}>
        <div className={headerStyles.header_level_top}>
          <IconComponent name={LOGO_NAME} className={headerStyles.logo} />
          <div ref={refSearch}>
            <Search />
          </div>
          <div ref={refGeo}>
            <GeoWidget />
          </div>
          <div>{mockHeaderTitle}</div>
        </div>
        <div className={headerStyles.header_level_bottom}>
          <Bottom_Menu />
        </div>
      </div>
    </header>
  );
};
