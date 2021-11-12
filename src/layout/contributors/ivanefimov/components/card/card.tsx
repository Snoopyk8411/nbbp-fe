import Link from 'next/link';
import { useRouter } from 'next/router';

import { IPhoto } from '../../interfaces';
import { getUrlById } from '../../helpers';
import styles from './card.module.css';

interface ICardProps {
  photo: IPhoto;
}

export const Card = ({ photo }: ICardProps): JSX.Element => {
  const router = useRouter();
  return (
    <div className={styles.card} style={{ backgroundImage: getUrlById(photo.id) }}>
      <div className={styles.content}>
        <h3 className={styles.heading}>by {photo.author}</h3>
        <p className={styles.description}>Original size:</p>
        <p className={styles.description}>
          {photo.width} x {photo.height} px
        </p>
        <Link href={`${router.asPath}/${photo.id}`}>
          <a className={styles.button}>Download</a>
        </Link>
      </div>
    </div>
  );
};
