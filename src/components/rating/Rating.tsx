import { IconComponent } from 'components/icon/Icon';
import { STAR_ICON } from './constants';

import ratingStyles from './rating.module.scss';

interface IRatingProps {
  rating: { rate: Number; count: Number };
}

export const Rating = ({ rating }: IRatingProps): JSX.Element => {
  const titleLink = `${rating.count} отзывов`;
  return (
    <div className={ratingStyles.container}>
      <a href='#Reviews' title={titleLink}>
        <div className={ratingStyles.product_rating}>
          <IconComponent name={STAR_ICON} className={ratingStyles.star} />
          <div className={ratingStyles.rating_text}>{rating.rate}</div>
        </div>
      </a>
    </div>
  );
};
