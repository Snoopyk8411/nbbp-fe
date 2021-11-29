import { IMenuItemModel } from 'components/aleksei/menu/menu';

const getNextId = ((): (() => number) => {
  let nextId = 1;
  return (): number => nextId++;
})();

const menuItems: IMenuItemModel[] = [
  {
    id: getNextId(),
    name: 'Новинки',
    children: [
      {
        id: getNextId(),
        name: 'Алкоголь',
        children: [
          {
            id: getNextId(),
            name: 'Пиво, медовуха',
          },
        ],
      },
      {
        id: getNextId(),
        name: 'Бакалея',
        children: [
          {
            id: getNextId(),
            name: 'Макароны, крупы, бобовые',
          },
          {
            id: getNextId(),
            name: 'Мюсли',
          },
          {
            id: getNextId(),
            name: 'Орехи, сухофрукты, ореховые пасты',
          },
          {
            id: getNextId(),
            name: 'Растительные масла, соусы, уксус',
          },
          {
            id: getNextId(),
            name: 'Снеки, батончики',
          },
          {
            id: getNextId(),
            name: 'Чай, травы, кофе, какао',
          },
        ],
      },
      {
        id: getNextId(),
        name: 'Вместо мяса',
        children: [
          {
            id: getNextId(),
            name: 'Колбасы, сосиски, котлеты',
          },
        ],
      },
    ],
  },
  {
    id: getNextId(),
    name: 'Хиты',
    children: [
      {
        id: getNextId(),
        name: 'Овощи и фрукты',
      },
      {
        id: getNextId(),
        name: 'Готовые блюда',
      },
    ],
  },
  {
    id: getNextId(),
    name: 'Рационы на каждый день',
  },
];

export { menuItems };
