import { Menu } from 'components/header_bottom_menu/Menu';
import { IconComponent } from 'components/icon/Icon';

import headerStyles from './header.module.css';

export const Header = (): JSX.Element => {
  const logoName = 'Shop'; // пока у нас только fallback иконка. Логотип на согласовании у клиента :)
  return (
    <header className={`${headerStyles.header_fixed_always} ${headerStyles.header_with_shadow}`}>
      <div className={headerStyles.header__container}>
        <div className={headerStyles.header_level_top}>
          <IconComponent name={logoName} className={headerStyles.logo} />
          <div>
            <input
              type='search'
              placeholder='начните поиск'
              aria-label='Search through site content.'
              className={headerStyles.search_input}
            />
            <button>Search</button>
          </div>
          <div>GEO</div>
          <div>некоторые другие иконки действий</div>
        </div>
        <div className={headerStyles.header_level_bottom}>
          <Menu />
        </div>
      </div>
    </header>
  );
};
