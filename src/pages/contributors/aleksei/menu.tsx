import Menu, { SubmenuPosition } from 'components/menu/menu';
import { MouseEventHandler, useState } from 'react';
import { NextPage } from 'next';
import { menuItems } from 'mock-data/aleksei/menu-items';
import Popup, { HideActionType } from 'components/popup/popup';

const MenuPage: NextPage = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const handleMenuButtonClick: MouseEventHandler = e => {
    e.stopPropagation();
    setIsMenuVisible(!isMenuVisible);
  };

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

export default MenuPage;
