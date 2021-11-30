// компонент на период разаработки.
// Когда появятся отдельные компонеты Каталог, Вакансии, Доставка и т. д. перенесу логику этого компонента в Header.

import { Link } from 'components/link/Link';

import { CATALOG_ITEMS } from 'mock-data/catalog-data';

import menuStyles from './menu.module.css';

export const Menu = (): JSX.Element => {
  const headerItem = CATALOG_ITEMS.filter(el => el.groups.includes('Header'));
  return (
    <div aria-live='polite' id='menu' className={menuStyles.menu_row} role='group'>
      {headerItem.map(element => {
        const { url, name, svgName, appearance } = element;
        return (
          <div key={`${element.id}+el`} className={menuStyles.menu}>
            <Link url={url} name={name} svgName={svgName} appearance={appearance} />
          </div>
        );
      })}
    </div>
  );
};
