import { MouseEventHandler, useState } from 'react';

import Menu from 'components/menu/menu';
import Popup, { HideActionType } from 'components/popup/popup';
import useFetchCatalogItems from 'hooks/use-fetch-catalog-items';

import { IconComponent } from 'components/icon/Icon';
import { SubmenuPosition } from 'components/menu/constants';
import { SEARCH_API, CATALOG_ICON, TITLE } from './constants';

import catalogStyles from './catalog_menu.module.css';

export const Catalog_Menu = (): JSX.Element => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const menuItems = useFetchCatalogItems(SEARCH_API);
  const handleMenuButtonClick: MouseEventHandler = e => {
    e.stopPropagation();
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <div>
      <button onClick={handleMenuButtonClick} className={catalogStyles.button}>
        <IconComponent name={CATALOG_ICON} className={catalogStyles.svg} fill={'currentColor'} />
        {TITLE}
      </button>
      <Popup isVisible={isMenuVisible} setIsVisible={setIsMenuVisible} hideActionType={HideActionType.ClickOutside}>
        <Menu items={menuItems ?? []} submenuPosition={SubmenuPosition.Alongside} />
        <div></div>
      </Popup>
    </div>
  );
};
