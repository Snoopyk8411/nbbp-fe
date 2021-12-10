/* Component for the development period.
When the components Catalog, Jobs, Delivery, etc. appear, I will transfer the logic of this component to the Header.. */
import { Link } from 'components/link/Link';
import { Catalog_Menu } from 'components/catalog_menu/Catalog_Menu';
import { CATALOG_ITEMS } from 'mock-data/catalog-data';
import menuStyles from './bottom_menu.module.css';

export const Bottom_Menu = (): JSX.Element => {
  const headerItem = CATALOG_ITEMS.filter(el => el.groups.includes('Header') && !el.name.includes('Каталог'));
  return (
    <nav aria-live='polite' id='menu' className={menuStyles.menu_row} role='group'>
      <Catalog_Menu />
      {headerItem.map(element => {
        const { url, name, svgName, appearance } = element;
        return (
          <div key={`${element.id}+el`} className={menuStyles.menu}>
            <Link url={url} name={name} svgName={svgName} appearance={appearance} />
          </div>
        );
      })}
    </nav>
  );
};
