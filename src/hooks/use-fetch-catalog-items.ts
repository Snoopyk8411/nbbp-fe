import { useState, useEffect } from 'react';
import { IMenuItemModel } from 'components/menu/interfaces';
import { getMenuItemsFromCategories } from 'tools/get-menu-items-from-categories';

export default function useFetchCatalogItems(SEARCH_API: string): any {
  const [menuItems, setMenuItems] = useState<IMenuItemModel[] | undefined>(undefined);

  useEffect(() => {
    (async (): Promise<void> => {
      const response = await fetch(SEARCH_API);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const catalog = await response.json();
      const menuItems = getMenuItemsFromCategories(catalog.children);
      setMenuItems(menuItems);
    })();
  }, []);

  return menuItems;
}
