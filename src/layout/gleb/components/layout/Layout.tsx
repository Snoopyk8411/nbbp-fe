import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import type { NextPage } from 'next';

import { MAIN_ROUTE, NOTES_ROUTE, GO_TO_PICTURE, GO_TO_NOTES } from './constants';

import layoutStyles from './layout.module.css';

export const Layout = ({ children }: { children: ReactNode | NextPage }) => {
  const router = useRouter();

  const isNotesRoute: boolean = router.pathname === NOTES_ROUTE;

  const handleClickNavigation = () => (isNotesRoute ? router.push(MAIN_ROUTE) : router.push(NOTES_ROUTE));

  return (
    <div>
      <div className={layoutStyles.header} data-test='headerComponent'>
        <button className={layoutStyles.header_title} data-testid='NavigationButton' onClick={handleClickNavigation}>
          {isNotesRoute ? GO_TO_PICTURE : GO_TO_NOTES}
        </button>
      </div>
      {children}
    </div>
  );
};
