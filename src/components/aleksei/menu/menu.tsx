import { useState } from 'react';

export enum SubmenuOpeningMode {
  OnClick,
  OnHover,
}

export interface IMenuProps {
  items: IMenuItemModel[];
  submenuOpeningMode: SubmenuOpeningMode;
}

type MenuItemIdType = string;

export interface IMenuItemModel {
  id: MenuItemIdType;
  name: string;
  className?: string;
  children?: IMenuItemModel[];
}

const Menu: React.FC<IMenuProps> = ({ items, submenuOpeningMode, ...restProps }: IMenuProps) => {
  const [openedSubmenuId, setOpenedSubmenuId] = useState<MenuItemIdType | null>(null);

  const handleMenuItemClick = (itemId: MenuItemIdType): void =>
    (submenuOpeningMode === SubmenuOpeningMode.OnClick && setOpenedSubmenuId(itemId)) as void;
  const handleMenuItemMouseEnter = (itemId: MenuItemIdType): void =>
    (submenuOpeningMode === SubmenuOpeningMode.OnHover && setOpenedSubmenuId(itemId)) as void;

  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <div
            onClick={(): void => handleMenuItemClick(item.id)}
            onMouseEnter={(): void => handleMenuItemMouseEnter(item.id)}
          >
            {item.name}
          </div>
          {item.children && item.id === openedSubmenuId && (
            <Menu submenuOpeningMode={submenuOpeningMode} items={item.children} {...restProps} />
          )}
        </li>
      ))}
    </ul>
  );
};

export default Menu;
