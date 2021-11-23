import Link from 'next/link';
import { useRouter } from 'next/router';

import { IPhoto } from 'layout/contributors/ivanefimov/interfaces';
import { getUrlById } from 'layout/contributors/ivanefimov/helpers';
import cardStyles from './card.module.css';

interface ICardProps {
  photo: IPhoto;
}

export const Card = ({ photo }: ICardProps): JSX.Element => {
  const router = useRouter();
  const { id, author, width, height } = photo;
  return (
    <div className={cardStyles.card} style={{ backgroundImage: getUrlById(id) }}>
      <div className={cardStyles.content}>
        <h3 className={cardStyles.heading}>by {author}</h3>
        <p className={cardStyles.description}>Original size:</p>
        <p className={cardStyles.description}>
          {width} x {height} px
        </p>
        <Link href={`${router.asPath}/${id}`}>
          <a className={cardStyles.button}>Download</a>
        </Link>
      </div>
    </div>
  );
};
