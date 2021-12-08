import { Appearance, ICatalogItem } from 'tools/types/api-catalog-items-types';

import Catalog from './svg/catalog.svg';
import Sale from './svg/sale.svg';
import Vacancies from './svg/vacancies.svg';
import Shipping from './svg/shipping.svg';
import Geo from './svg/geo.svg';
import Menu from './svg/menu.svg';

export const CATALOG_ITEMS: ICatalogItem[] = [
  {
    id: '0',
    name: 'Header',
    url: '/',
    groups: [''],
    appearance: Appearance.PLAIN,
  },
  {
    id: '1',
    name: 'Каталог',
    url: '/',
    groups: ['Header'],
    appearance: Appearance.ACCENT,
    svg: Catalog,
  },
  {
    id: '2',
    name: 'Акции',
    url: '/',
    groups: ['Header'],
    appearance: Appearance.HIGHLIGHT,
    svg: Sale,
  },
  {
    id: '3',
    name: 'Сладости, десерты, мороженое',
    url: '/',
    groups: ['Header', 'Каталог'],
    appearance: Appearance.PLAIN,
  },
  {
    id: '4',
    name: 'Кулинария',
    url: '/',
    groups: ['Header', 'Каталог'],
    appearance: Appearance.PLAIN,
  },
  {
    id: '5',
    name: 'Добрые покупки',
    url: '/',
    groups: ['Header', 'Каталог'],
    appearance: Appearance.PLAIN,
  },
  {
    id: '6',
    name: 'Праздник',
    url: '/',
    groups: ['Header'],
    appearance: Appearance.ACCENT,
  },
  {
    id: '7',
    name: 'Вакансии',
    url: '/',
    groups: ['Header'],
    appearance: Appearance.ACCENT,
    svg: Vacancies,
  },
  {
    id: '8',
    name: 'Доставка',
    url: '/',
    groups: ['Header'],
    appearance: Appearance.PLAIN,
    svg: Shipping,
  },
  {
    id: '9',
    name: 'Магазины',
    url: '/',
    groups: ['Header'],
    appearance: Appearance.PLAIN,
    svg: Geo,
  },
  {
    id: '10',
    name: 'Меню',
    url: '/',
    groups: ['Header'],
    appearance: Appearance.PLAIN,
    svg: Menu,
  },
  {
    id: '11',
    name: 'Новинки',
    url: '/',
    groups: ['Каталог'],
    appearance: Appearance.PLAIN,
  },
  {
    id: '12',
    name: 'Хиты',
    url: '/',
    groups: ['Каталог'],
    appearance: Appearance.PLAIN,
  },
  {
    id: '13',
    name: 'Алкоголь',
    url: '/',
    groups: ['Каталог', 'Новинки', 'Хиты'],
    appearance: Appearance.PLAIN,
  },
  {
    id: '14',
    name: 'Бакалея',
    url: '/',
    groups: ['Каталог', 'Новинки', 'Хиты'],
    appearance: Appearance.PLAIN,
  },
  {
    id: '15',
    name: 'Пиво, медовуха',
    url: '/',
    groups: ['Алкоголь', 'Новинки', 'Хиты'],
    appearance: Appearance.PLAIN,
  },
  {
    id: '16',
    name: 'Макароны, крупы, бобовые',
    url: '/',
    groups: ['Бакалея', 'Новинки', 'Хиты'],
    appearance: Appearance.PLAIN,
  },
  {
    id: '17',
    name: 'Мюсли, сухие завтраки и обеды, каши',
    url: '/',
    groups: ['Бакалея', 'Новинки', 'Хиты'],
    appearance: Appearance.PLAIN,
  },
];
