/* Under construction. Пока можно не проверять */

import { Menu } from 'components/link/Menu';
import logo from 'assets/logo.png';
import shop from 'assets/shop.svg';

import headerStyles from './header.module.css';

export const Header = (): JSX.Element => {
  const icon = logo ? logo.src : shop.src;

  return (
    <header className={`${headerStyles.header_fixed_always} ${headerStyles.header_with_shadow}`}>
      <div className={headerStyles.header__container}>
        <div className={headerStyles.container}>
          <img src={icon} alt='the logo of shop.' className={headerStyles.svg} />
          <div>
            <input type='search' placeholder='начните поиск' aria-label='Search through site content.' />
            <button>Search</button>
          </div>
          <div>GEO</div>
          <div>некоторые другие иконки действий</div>
        </div>
        <div className={headerStyles.header_level_bottom}>
          <div>Каталог</div>
          <Menu />
          <div>Вакансии</div>
          <div>Доставка</div>
        </div>
      </div>
    </header>
  );
};
//under construction
