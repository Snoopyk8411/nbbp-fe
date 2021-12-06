import { useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'components/link/Link';
import menuStyles from './menu.module.css';
import { SubmenuOpenActionType, SubmenuPosition } from './constants';
import { IMenuLevelProps, IMenuProps, MenuItemIdType } from './interfaces';
import { getMenuContainerClass, getMenuItemClass, getMenuLevelClass, getSortedItems } from './utils';

const MenuLevel: React.FC<IMenuLevelProps> = ({
  items,
  parentItem,
  submenuOpenActionType,
  containerElement,
  submenuPosition,
  onClose,
}) => {
  const closedWrapperClassName = menuStyles.menu_level_wrapper;
  const openedWrapperClassName = `${menuStyles.menu_level_wrapper} ${menuStyles.opened}`;
  const [openedSubmenuId, setOpenedSubmenuId] = useState<MenuItemIdType | null>(null);
  const [wrapperClassName, setWrapperClassName] = useState(closedWrapperClassName);
  const [isClosing, setIsClosing] = useState(false);
  const sortedItems = useMemo(() => getSortedItems(items), [items]);

  const triggerOpeningAnimation = (): void => setWrapperClassName(openedWrapperClassName);
  const triggerClosingAnimation = (): void => setWrapperClassName(closedWrapperClassName);
  const handleMenuItemClick = (itemId: MenuItemIdType): void => {
    submenuOpenActionType === SubmenuOpenActionType.Click && setOpenedSubmenuId(itemId);
  };
  const handleMenuItemMouseEnter = (itemId: MenuItemIdType): void => {
    submenuOpenActionType === SubmenuOpenActionType.Hover && setOpenedSubmenuId(itemId);
  };
  const handleSubmenuClose = (): void => setOpenedSubmenuId(null);
  const handleWrapperTransitionEnd = (): void => {
    isClosing && onClose && onClose();
  };
  const handleCloseClick = (): void => {
    setIsClosing(true);
    triggerClosingAnimation();
  };

  useEffect(() => {
    setTimeout(() => {
      triggerOpeningAnimation();
    }, 0);
  }, []);

  if (!containerElement || !sortedItems) {
    return null;
  }

  const showBackToParentLink = submenuPosition === SubmenuPosition.Overlap;

  const menuLevel = (
    <div onTransitionEnd={handleWrapperTransitionEnd} className={wrapperClassName}>
      <ul className={getMenuLevelClass(!parentItem)}>
        {!!parentItem && showBackToParentLink && (
          <li className={`${menuStyles.menu_item} ${menuStyles.menu_item_back_to_parent}`} onClick={handleCloseClick}>
            {parentItem.name}
          </li>
        )}
        {sortedItems.map(item => (
          <li key={item.id}>
            <div
              className={getMenuItemClass(!!item.children && item.children.length > 0)}
              onClick={(): void => handleMenuItemClick(item.id)}
              onMouseEnter={(): void => handleMenuItemMouseEnter(item.id)}
            >
              <Link url={item.url} name={item.name} appearance={item.appearance} />
            </div>
            {item.children && item.children.length > 0 && item.id === openedSubmenuId && (
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
    </div>
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

export default Menu;
