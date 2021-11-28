import { Link } from './Link';

import { CATALOG_ITEMS } from 'mock-data/catalog-data';

import linkStyles from './link.module.css';

export const Menu = (): JSX.Element => {
  return (
    <div aria-live='polite' id='menu' className={linkStyles.menu_row} role='group'>
      {CATALOG_ITEMS.map(element => {
        const { url, name, svgName, appearance } = element;
        return (
          <div key={`${element.id}+el`}>
            <Link url={url} name={name} svgName={svgName} appearance={appearance} />
          </div>
        );
      })}
    </div>
  );
};

// компонент на период разаработки. Потом удалить
