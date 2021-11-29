import { useState } from 'react';
import menuStyles from './menu.module.css';

export enum SubmenuOpeningMode {
  OnClick,
  OnHover,
}

export enum SubmenuPosition {
  Overlap,
  Alongside,
}

export interface IMenuProps {
  items: IMenuItemModel[];
  submenuOpeningMode: SubmenuOpeningMode;
  submenuPosition: SubmenuPosition;
}

type MenuItemIdType = string;

export interface IMenuItemModel {
  id: MenuItemIdType;
  name: string;
  className?: string;
  children?: IMenuItemModel[];
}

const Menu: React.FC<IMenuProps> = ({ items, submenuOpeningMode, submenuPosition, ...restProps }: IMenuProps) => {
  const [openedSubmenuId, setOpenedSubmenuId] = useState<MenuItemIdType | null>(null);

  const handleMenuItemClick = (itemId: MenuItemIdType): void =>
    (submenuOpeningMode === SubmenuOpeningMode.OnClick && setOpenedSubmenuId(itemId)) as void;
  const handleMenuItemMouseEnter = (itemId: MenuItemIdType): void =>
    (submenuOpeningMode === SubmenuOpeningMode.OnHover && setOpenedSubmenuId(itemId)) as void;

  let menuClassNames = menuStyles.menu;
  if (submenuPosition == SubmenuPosition.Overlap) {
    menuClassNames += ` ${menuStyles.menu_overlapping}`;
  }

  return (
    <ul className={menuClassNames}>
      {items.map(item => (
        <li key={item.id}>
          <div
            className={menuStyles.menu_item}
            onClick={(): void => handleMenuItemClick(item.id)}
            onMouseEnter={(): void => handleMenuItemMouseEnter(item.id)}
          >
            {item.name}
          </div>
          {item.children && item.id === openedSubmenuId && (
            <Menu
              submenuOpeningMode={submenuOpeningMode}
              submenuPosition={submenuPosition}
              items={item.children}
              {...restProps}
            />
          )}
        </li>
      ))}
    </ul>
  );
};

export default Menu;
