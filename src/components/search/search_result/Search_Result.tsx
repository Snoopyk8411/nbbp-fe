import { IRating } from 'tools/types/api-product-types';
import { IconComponent } from 'components/icon/Icon';
import { Rating } from 'components/rating/Rating';
import { CART_ICON } from './constants';

import searchResultStyles from './search_result.module.css';

type SearchResultProps = {
  title: string;
  price: number;
  description: string;
  image: string;
  rating: IRating;
};

export const Search_Result = ({ title, price, description, image, rating }: SearchResultProps): JSX.Element => {
  return (
    <div className={searchResultStyles.found_products}>
      <div className={searchResultStyles.product_img_rating}>
        <img src={image} className={searchResultStyles.product_img} alt={description} />
        <Rating rating={rating} />
      </div>
      <div className={searchResultStyles.product_container}>
        <div className={searchResultStyles.product_title_price}>
          <div className={searchResultStyles.product_title}>{title}</div>
          <div>{`${price}$`}</div>
        </div>
        <button className={searchResultStyles.button_cart}>
          <IconComponent name={CART_ICON} className={searchResultStyles.cart_icon} />
        </button>
      </div>
    </div>
  );
};
