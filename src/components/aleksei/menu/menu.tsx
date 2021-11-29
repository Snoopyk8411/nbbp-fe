import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import menuStyles from './menu.module.css';

export enum SubmenuOpenActionType {
  Click,
  Hover,
}

export enum SubmenuPosition {
  Overlap,
  Alongside,
}

export interface IMenuProps {
  items: IMenuItemModel[];
  submenuOpenActionType: SubmenuOpenActionType;
  submenuPosition: SubmenuPosition;
}

export interface IMenuLevelProps {
  items: IMenuItemModel[];
  submenuOpenActionType: SubmenuOpenActionType;
  containerElement: HTMLElement | null;
}

type MenuItemIdType = string | number;

export interface IMenuItemModel {
  id: MenuItemIdType;
  name: string;
  className?: string;
  children?: IMenuItemModel[];
}

const MenuLevel: React.FC<IMenuLevelProps> = ({ items, submenuOpenActionType, containerElement }: IMenuLevelProps) => {
  const [openedSubmenuId, setOpenedSubmenuId] = useState<MenuItemIdType | null>(null);

  if (!containerElement) {
    return null;
  }

  const handleMenuItemClick = (itemId: MenuItemIdType): void =>
    (submenuOpenActionType === SubmenuOpenActionType.Click && setOpenedSubmenuId(itemId)) as void;
  const handleMenuItemMouseEnter = (itemId: MenuItemIdType): void =>
    (submenuOpenActionType === SubmenuOpenActionType.Hover && setOpenedSubmenuId(itemId)) as void;

  const menuLevel = (
    <ul className={menuStyles.menu_level}>
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
            <MenuLevel
              submenuOpenActionType={submenuOpenActionType}
              items={item.children}
              containerElement={containerElement}
            />
          )}
        </li>
      ))}
    </ul>
  );

  return createPortal(menuLevel, containerElement);
};

const Menu: React.FC<IMenuProps> = ({ submenuPosition, ...rest }: IMenuProps) => {
  const menuContainerRef = useRef(null as HTMLDivElement | null);
  const [containerElement, setContainerElement] = useState<HTMLElement | null>(null);
  useEffect(() => {
    setContainerElement(menuContainerRef.current);
  });

  return (
    <nav ref={menuContainerRef} className={getMenuContainerClass(submenuPosition)}>
      <MenuLevel {...rest} containerElement={containerElement} />
    </nav>
  );
};

const getMenuContainerClass = (submenuPosition: SubmenuPosition): string | undefined =>
  submenuPosition === SubmenuPosition.Overlap
    ? `${menuStyles.container} ${menuStyles.container_submenu_overlap}`
    : `${menuStyles.container} ${menuStyles.container_submenu_alongside}`;

export default Menu;
