import Menu, { IMenuItemModel, SubmenuPosition } from 'components/menu/menu';
import { MouseEventHandler, useEffect, useState } from 'react';
import { NextPage } from 'next';
import Popup, { HideActionType } from 'components/popup/popup';
import { ICatalogTree } from 'tools/types/api-catalog-items-types';

// This is a test page to demonstrate menu component
const MenuPage: NextPage = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [menuItems, setMenuItems] = useState<IMenuItemModel[] | undefined>(undefined);
  const handleMenuButtonClick: MouseEventHandler = e => {
    e.stopPropagation();
    setIsMenuVisible(!isMenuVisible);
  };

  useEffect(() => {
    (async (): Promise<void> => {
      const requestedCategory = 'Каталог';
      const response = await fetch('/api/catalog?category=' + requestedCategory);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const catalog = await response.json();
      const menuItems = getMenuItemsFromCategories(catalog.children);
      setMenuItems(menuItems);
    })();
  }, []);

  if (!menuItems) {
    return null;
  }

  return (
    <>
      <Menu items={menuItems} submenuPosition={SubmenuPosition.Overlap}></Menu>
      <br />
      <button onClick={handleMenuButtonClick}>Menu</button>
      <Popup isVisible={isMenuVisible} setIsVisible={setIsMenuVisible} hideActionType={HideActionType.ClickOutside}>
        <Menu items={menuItems} submenuPosition={SubmenuPosition.Alongside}></Menu>
        <div></div>
      </Popup>
    </>
  );
};

const getMenuItemsFromCategories = (categories: ICatalogTree[]): IMenuItemModel[] => {
  const menuItems: IMenuItemModel[] = [];
  for (const catalogNode of categories) {
    const { id, name, order, url, appearance } = catalogNode.node;
    const menuItem: IMenuItemModel = {
      id,
      name,
      url,
      appearance,
      order,
    };
    menuItem.children = catalogNode.children && getMenuItemsFromCategories(catalogNode.children);
    menuItems.push(menuItem);
  }
  return menuItems;
};

export default MenuPage;
