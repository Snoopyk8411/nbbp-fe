import { IMenuItemModel } from 'components/aleksei/menu/menu';
import { Appearance } from 'tools/types/api-catalog-items-types';

const getNextId = ((): (() => number) => {
  let nextId = 1;
  return (): number => nextId++;
})();

const menuItems: IMenuItemModel[] = [
  {
    id: getNextId(),
    name: 'Новинки',
    url: '',
    appearance: Appearance.PLAIN,
    children: [
      {
        id: getNextId(),
        name: 'Алкоголь',
        url: '',
        appearance: Appearance.PLAIN,
        children: [
          {
            id: getNextId(),
            name: 'Пиво, медовуха',
            url: '',
            appearance: Appearance.PLAIN,
          },
        ],
      },
      {
        id: getNextId(),
        name: 'Бакалея',
        url: '',
        appearance: Appearance.PLAIN,
        children: [
          {
            id: getNextId(),
            name: 'Макароны, крупы, бобовые',
            url: '',
            appearance: Appearance.PLAIN,
          },
          {
            id: getNextId(),
            name: 'Мюсли',
            url: '',
            appearance: Appearance.PLAIN,
          },
          {
            id: getNextId(),
            name: 'Орехи, сухофрукты, ореховые пасты',
            url: '',
            appearance: Appearance.PLAIN,
          },
          {
            id: getNextId(),
            name: 'Растительные масла, соусы, уксус',
            url: '',
            appearance: Appearance.PLAIN,
          },
          {
            id: getNextId(),
            name: 'Снеки, батончики',
            url: '',
            appearance: Appearance.PLAIN,
          },
          {
            id: getNextId(),
            name: 'Чай, травы, кофе, какао',
            url: '',
            appearance: Appearance.PLAIN,
          },
        ],
      },
      {
        id: getNextId(),
        name: 'Вместо мяса',
        url: '',
        appearance: Appearance.PLAIN,
        children: [
          {
            id: getNextId(),
            name: 'Колбасы, сосиски, котлеты',
            url: '',
            appearance: Appearance.PLAIN,
          },
        ],
      },
    ],
  },
  {
    id: getNextId(),
    name: 'Хиты',
    url: '',
    appearance: Appearance.PLAIN,
    children: [
      {
        id: getNextId(),
        name: 'Овощи и фрукты',
        url: '',
        appearance: Appearance.PLAIN,
      },
      {
        id: getNextId(),
        name: 'Готовые блюда',
        url: '',
        appearance: Appearance.PLAIN,
      },
    ],
  },
  {
    id: getNextId(),
    name: 'Рационы на каждый день',
    url: '',
    appearance: Appearance.ACCENT,
  },
];

export { menuItems };
