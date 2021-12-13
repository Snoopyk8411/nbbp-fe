import { IconComponent } from 'components/icon/Icon';

import ratingStyles from './rating.module.scss';

interface IRating {
  rating: { rate: Number; count: Number };
}

export const Rating = ({ rating }: IRating): JSX.Element => {
  const starIcon = 'Star';
  const titleLink = `${rating.count} отзывов`;
  return (
    <div className={ratingStyles.container}>
      <a href='#Reviews' title={titleLink}>
        <div className={ratingStyles.product_rating}>
          <IconComponent name={starIcon} className={ratingStyles.star} />
          <div className={ratingStyles.rating_text}>{rating.rate}</div>
        </div>
      </a>
    </div>
  );
};
