import Menu, { SubmenuPosition } from 'components/aleksei/menu/menu';
import { MouseEventHandler, useState } from 'react';
import { NextPage } from 'next';
import { menuItems } from 'mock-data/aleksei/menu-items';

const MenuPage: NextPage = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const handleMenuButtonClick: MouseEventHandler = () => setIsMenuVisible(!isMenuVisible);

  return (
    <>
      <Menu items={menuItems} submenuPosition={SubmenuPosition.Overlap}></Menu>
      <br />
      <button onClick={handleMenuButtonClick}>Menu</button>
      <div>{isMenuVisible && <Menu items={menuItems} submenuPosition={SubmenuPosition.Alongside}></Menu>}</div>
    </>
  );
};

export default MenuPage;
