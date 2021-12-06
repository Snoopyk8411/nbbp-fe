import { SubmenuPosition } from './constants';
import { IMenuItemModel } from './interfaces';
import menuStyles from './menu.module.css';

export const getMenuContainerClass = (submenuPosition: SubmenuPosition): string | undefined =>
  submenuPosition === SubmenuPosition.Overlap
    ? `${menuStyles.container} ${menuStyles.container_submenu_overlap}`
    : `${menuStyles.container} ${menuStyles.container_submenu_alongside}`;

export const getMenuItemClass = (hasChildren: boolean): string | undefined =>
  hasChildren ? `${menuStyles.menu_item} ${menuStyles.menu_item_with_children}` : `${menuStyles.menu_item}`;

export const getMenuLevelClass = (isRoot: boolean): string | undefined =>
  isRoot ? `${menuStyles.menu_level}` : `${menuStyles.menu_level} ${menuStyles.menu_level_nested}`;

export const getSortedItems = (menuItems: IMenuItemModel[]): IMenuItemModel[] => {
  const copy = [...menuItems];
  copy.sort((a, b) => b.order - a.order);
  return copy;
};
