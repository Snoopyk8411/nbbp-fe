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
  isRoot: boolean;
}

type MenuItemIdType = string | number;

export interface IMenuItemModel {
  id: MenuItemIdType;
  name: string;
  className?: string;
  children?: IMenuItemModel[];
}

const MenuLevel: React.FC<IMenuLevelProps> = ({
  items,
  submenuOpenActionType,
  containerElement,
  isRoot,
}: IMenuLevelProps) => {
  const [openedSubmenuId, setOpenedSubmenuId] = useState<MenuItemIdType | null>(null);

  if (!containerElement) {
    return null;
  }

  const handleMenuItemClick = (itemId: MenuItemIdType): void =>
    (submenuOpenActionType === SubmenuOpenActionType.Click && setOpenedSubmenuId(itemId)) as void;
  const handleMenuItemMouseEnter = (itemId: MenuItemIdType): void =>
    (submenuOpenActionType === SubmenuOpenActionType.Hover && setOpenedSubmenuId(itemId)) as void;

  const menuLevel = (
    <ul className={getMenuLevelClass(isRoot)}>
      {items.map(item => (
        <li key={item.id}>
          <div
            className={getMenuItemClass(!!item.children && item.children.length > 0)}
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
              isRoot={false}
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
      <MenuLevel isRoot={true} {...rest} containerElement={containerElement} />
    </nav>
  );
};

const getMenuContainerClass = (submenuPosition: SubmenuPosition): string | undefined =>
  submenuPosition === SubmenuPosition.Overlap
    ? `${menuStyles.container} ${menuStyles.container_submenu_overlap}`
    : `${menuStyles.container} ${menuStyles.container_submenu_alongside}`;

const getMenuItemClass = (hasChildren: boolean): string | undefined =>
  hasChildren ? `${menuStyles.menu_item} ${menuStyles.menu_item_with_children}` : `${menuStyles.menu_item}`;

const getMenuLevelClass = (isRoot: boolean): string | undefined =>
  isRoot ? `${menuStyles.menu_level}` : `${menuStyles.menu_level} ${menuStyles.menu_level_nested}`;

export default Menu;
