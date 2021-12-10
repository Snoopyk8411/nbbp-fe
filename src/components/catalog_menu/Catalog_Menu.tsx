import { MouseEventHandler, useEffect, useState } from 'react';

import Menu from 'components/menu/menu';
import Popup, { HideActionType } from 'components/popup/popup';
import { API, CATALOG } from 'constants/';
import { IconComponent } from 'components/icon/Icon';
import { ICatalogTree } from 'tools/types/api-catalog-items-types';
import { IMenuItemModel } from 'components/menu/interfaces';
import { SubmenuPosition } from 'components/menu/constants';

import catalogStyles from './catalog_menu.module.css';

export const Catalog_Menu = (): JSX.Element => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [menuItems, setMenuItems] = useState<IMenuItemModel[] | undefined>(undefined);
  const handleMenuButtonClick: MouseEventHandler = e => {
    e.stopPropagation();
    setIsMenuVisible(!isMenuVisible);
  };

  useEffect(() => {
    (async (): Promise<void> => {
      const requestedCategory = 'Каталог';
      const SEARCH_API = `${API}/${CATALOG}${requestedCategory}`;
      const response = await fetch(SEARCH_API);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const catalog = await response.json();
      const menuItems = getMenuItemsFromCategories(catalog.children);
      setMenuItems(menuItems);
    })();
  }, []);

  const catalogIcon = 'Catalog';
  const title = 'Каталог';
  return (
    <div>
      <button onClick={handleMenuButtonClick} className={catalogStyles.button}>
        <IconComponent name={catalogIcon} className={catalogStyles.svg} fill={'currentColor'} />
        {title}
      </button>
      <Popup isVisible={isMenuVisible} setIsVisible={setIsMenuVisible} hideActionType={HideActionType.ClickOutside}>
        <Menu items={menuItems ?? []} submenuPosition={SubmenuPosition.Alongside} />
        <div></div>
      </Popup>
    </div>
  );
};

const getMenuItemsFromCategories = (categories: ICatalogTree[]): IMenuItemModel[] => {
  const menuItems: IMenuItemModel[] = [];
  for (const catalogNode of categories) {
    const { id, name, order, url, appearance, svgName } = catalogNode.node;
    const menuItem: IMenuItemModel = {
      id,
      name,
      url,
      appearance,
      order,
      svgName,
    };
    menuItem.children = catalogNode.children && getMenuItemsFromCategories(catalogNode.children);
    menuItems.push(menuItem);
  }
  return menuItems;
};
