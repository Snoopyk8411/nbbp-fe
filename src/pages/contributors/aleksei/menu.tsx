import Menu, { IMenuItemModel, SubmenuOpeningMode } from 'components/aleksei/menu/menu';
import { NextPage } from 'next';

const menuItems: IMenuItemModel[] = [
  {
    id: '1',
    name: 'Доставка',
  },
  {
    id: '2',
    name: 'Магазины',
  },
  {
    id: '3',
    name: 'Акции',
    children: [
      {
        id: '4',
        name: 'Любимый продукт',
      },
      {
        id: '5',
        name: 'Разнообразное питание',
      },
    ],
  },
  {
    id: '7',
    name: 'Новости',
    children: [
      {
        id: '9',
        name: 'Интернет-магазин',
      },
      {
        id: '15',
        name: 'Все новости',
      },
      {
        id: '17',
        name: 'Школа потребителя',
      },
    ],
  },
];

const MenuPage: NextPage = () => {
  return (
    <>
      <Menu items={menuItems} submenuOpeningMode={SubmenuOpeningMode.OnClick}></Menu>
      <Menu items={menuItems} submenuOpeningMode={SubmenuOpeningMode.OnHover}></Menu>
    </>
  );
};

export default MenuPage;
