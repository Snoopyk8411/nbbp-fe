import headerStyles from './header.module.css';

export const Header = (): JSX.Element => {
  return (
    <header className={`${headerStyles.header_fixed_always} ${headerStyles.header_with_shadow}`}>
      <div className={headerStyles.header__container}>
        <div className={headerStyles.container}></div>
        <div className={headerStyles.header_level_bottom}></div>
      </div>
    </header>
  );
};
//under construction
