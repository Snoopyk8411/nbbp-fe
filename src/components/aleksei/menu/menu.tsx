import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import menuStyles from './menu.module.css';
import { Link } from 'components/link/Link';
import { Appearance } from 'tools/types/api-catalog-items-types';

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
  submenuPosition: SubmenuPosition;
}

export interface IMenuLevelProps {
  items: IMenuItemModel[];
  parentItem?: IMenuItemModel;
  submenuOpenActionType: SubmenuOpenActionType;
  submenuPosition: SubmenuPosition;
  containerElement: HTMLElement | null;
  onClose?: () => void;
}

type MenuItemIdType = string | number;

export interface IMenuItemModel {
  id: MenuItemIdType;
  name: string;
  url: string;
  appearance: Appearance | String;
  children?: IMenuItemModel[];
}

const MenuLevel: React.FC<IMenuLevelProps> = ({
  items,
  parentItem,
  submenuOpenActionType,
  containerElement,
  submenuPosition,
  onClose,
}: IMenuLevelProps) => {
  const [openedSubmenuId, setOpenedSubmenuId] = useState<MenuItemIdType | null>(null);

  if (!containerElement) {
    return null;
  }

  const showBackToParentLink = submenuPosition === SubmenuPosition.Overlap;

  const handleMenuItemClick = (itemId: MenuItemIdType): void =>
    (submenuOpenActionType === SubmenuOpenActionType.Click && setOpenedSubmenuId(itemId)) as void;
  const handleMenuItemMouseEnter = (itemId: MenuItemIdType): void =>
    (submenuOpenActionType === SubmenuOpenActionType.Hover && setOpenedSubmenuId(itemId)) as void;
  const handleSubmenuClose = (): void => setOpenedSubmenuId(null);

  const menuLevel = (
    <ul className={getMenuLevelClass(!parentItem)}>
      {!!parentItem && showBackToParentLink && (
        <li className={`${menuStyles.menu_item} ${menuStyles.menu_item_back_to_parent}`} onClick={onClose}>
          {parentItem.name}
        </li>
      )}
      {items.map(item => (
        <li key={item.id}>
          <div
            className={getMenuItemClass(!!item.children && item.children.length > 0)}
            onClick={(): void => handleMenuItemClick(item.id)}
            onMouseEnter={(): void => handleMenuItemMouseEnter(item.id)}
          >
            <Link url={item.url} name={item.name} appearance={item.appearance} />
          </div>
          {item.children && item.id === openedSubmenuId && (
            <MenuLevel
              submenuOpenActionType={submenuOpenActionType}
              items={item.children}
              parentItem={item}
              submenuPosition={submenuPosition}
              containerElement={containerElement}
              onClose={handleSubmenuClose}
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
  const submenuOpenActionType =
    submenuPosition === SubmenuPosition.Alongside ? SubmenuOpenActionType.Hover : SubmenuOpenActionType.Click;

  return (
    <nav ref={menuContainerRef} className={getMenuContainerClass(submenuPosition)}>
      <MenuLevel
        {...rest}
        parentItem={undefined}
        containerElement={containerElement}
        submenuPosition={submenuPosition}
        submenuOpenActionType={submenuOpenActionType}
      />
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
