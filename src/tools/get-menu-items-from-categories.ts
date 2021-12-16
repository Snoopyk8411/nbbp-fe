import { ICatalogTree } from 'tools/types/api-catalog-items-types';
import { IMenuItemModel } from 'components/menu/interfaces';

export const getMenuItemsFromCategories = (categories: ICatalogTree[]): IMenuItemModel[] => {
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
