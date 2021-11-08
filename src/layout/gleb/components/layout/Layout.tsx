import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import styles from './layout.module.css';

const Layout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  const isNotesroute: boolean = router.pathname === '/contributors/gleb/notes';

  const onClickNavigation = () => {
    isNotesroute ? router.push(`/contributors/gleb`) : router.push(`/contributors/gleb/notes`);
  };

  return (
    <div>
      <div className={styles.header} data-test='headerComponent'>
        <button className={styles.header_title} data-testid='HeaderTitle' onClick={onClickNavigation}>
          {isNotesroute ? 'Go to the Picture' : 'Go to Notes'}
        </button>
      </div>
      {children}
    </div>
  );
};

export default Layout;
