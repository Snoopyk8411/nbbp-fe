import { Link } from './Link';

import linkStyles from './link.module.css';

export const Menu = (): JSX.Element => {
  enum Appearance {
    PLAIN, // default styles
    ACCENT, // color accent applied
    HIGHLIGHT, // highlighted
  }
  const data = [
    {
      id: 1,
      title: 'Сладости, десерты, мороженое',
      url: '/goods/sladosti-deserty-morozhenoe/',
      svg: '',
      accent: {},
    },
    {
      id: 2,
      title: 'Кулинария',
      url: '/goods/kulinariya/',
      svg: '/assets/pot.svg',
      accent: Appearance.ACCENT,
    },
    { id: 3, title: 'Добрые покупки', url: '/charity/', svg: '', accent: {} },
    { id: 4, title: 'Праздник', url: 'https://prazdnik.vkusvill.ru', svg: '', accent: Appearance.HIGHLIGHT },
  ];

  return (
    <div aria-live='polite' id='menu' className={linkStyles.menu_row} role='group'>
      {data.map(element => {
        const { url, title, svg, accent } = element;
        return (
          <div key={`${element.id}+el`}>
            <Link url={url} title={title} svg={svg} accent={accent} />
          </div>
        );
      })}
    </div>
  );
};

// компонент на период разаработки. Потом удалить
