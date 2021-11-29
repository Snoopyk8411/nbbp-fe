import Menu, { SubmenuOpenActionType, SubmenuPosition } from 'components/aleksei/menu/menu';
import { NextPage } from 'next';
import { menuItems } from 'mock-data/aleksei/menu-items';

const MenuPage: NextPage = () => {
  return (
    <>
      <Menu
        items={menuItems}
        submenuOpenActionType={SubmenuOpenActionType.Click}
        submenuPosition={SubmenuPosition.Overlap}
      ></Menu>
      <br />
      {
        <Menu
          items={menuItems}
          submenuOpenActionType={SubmenuOpenActionType.Hover}
          submenuPosition={SubmenuPosition.Alongside}
        ></Menu>
      }
    </>
  );
};

export default MenuPage;
