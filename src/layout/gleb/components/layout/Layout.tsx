import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import type { NextPage } from 'next';

import { MAIN_ROUTE, NOTES_ROUTE, GO_TO_PICTURE, GO_TO_NOTES } from './constants';

import styles from './layout.module.css';

const Layout = ({ children }: { children: ReactNode | NextPage }) => {
  const router = useRouter();

  const isNotesRoute: boolean = router.pathname === NOTES_ROUTE;

  const handleClickNavigation = () => {
    isNotesRoute ? router.push(MAIN_ROUTE) : router.push(NOTES_ROUTE);
  };

  return (
    <div>
      <div className={styles.header} data-test='headerComponent'>
        <button className={styles.header_title} data-testid='NavigationButton' onClick={handleClickNavigation}>
          {isNotesRoute ? GO_TO_PICTURE : GO_TO_NOTES}
        </button>
      </div>
      {children}
    </div>
  );
};

export default Layout;
