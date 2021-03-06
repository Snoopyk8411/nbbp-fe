import Catalog from 'mock-data/svg/catalog.svg';
import Sale from 'mock-data/svg/sale.svg';
import Vacancies from 'mock-data/svg/vacancies.svg';
import Shipping from 'mock-data/svg/shipping.svg';
import Geo from 'mock-data/svg/geo.svg';
import Menu from 'mock-data/svg/menu.svg';
import Shop from 'assets/shop.svg';
import Star from 'assets/star.svg';
import Search from 'mock-data/svg/search.svg';
import Cart from 'mock-data/svg/cart.svg';

interface IIconNames {
  Catalog: string;
  Sale: string;
  Vacancies: string;
  Shipping: string;
  Geo: string;
  Menu: string;
  Shop: string;
  Search: string;
  Cart: string;
  Star: string;
}

const iconNames: IIconNames = {
  Catalog: Catalog,
  Sale: Sale,
  Vacancies: Vacancies,
  Shipping: Shipping,
  Geo: Geo,
  Menu: Menu,
  Shop: Shop,
  Search: Search,
  Cart: Cart,
  Star: Star,
};

type IName = keyof typeof iconNames;

export type IconProps<TComponent extends React.ComponentType<any> | keyof JSX.IntrinsicElements> = {
  as: TComponent;
  props: React.ComponentProps<TComponent>;
};

export const IconComponent = ({ name, ...props }: any): JSX.Element | null => {
  const Icon = iconNames[name as IName];
  if (!Icon) {
    return null;
  }
  return <Icon {...(props as any)} />;
};
