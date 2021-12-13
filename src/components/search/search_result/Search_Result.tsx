import { useEffect } from 'react';
import { IRating } from 'tools/types/api-product-types';
import { IconComponent } from 'components/icon/Icon';

import searchResultStyles from './search_result.module.css';

type SearchResultProps = {
  title: string;
  price: number;
  description: string;
  image: string;
  rating: IRating;
  setIsResultsRendered: any;
};

export const Search_Result = ({
  title,
  price,
  description,
  image,
  rating,
  setIsResultsRendered,
}: SearchResultProps): JSX.Element => {
  useEffect(() => {
    if (title) {
      setIsResultsRendered(true);
    }
  }, []);

  const cartIcon = 'Cart';

  return (
    <div className={searchResultStyles.found_products}>
      <div className={searchResultStyles.product_img_rating}>
        <img src={image} className={searchResultStyles.product_img} alt={description} />
        <div>{rating.rate}</div>
      </div>
      <div className={searchResultStyles.product_container}>
        <div className={searchResultStyles.product_title_price}>
          <div className={searchResultStyles.product_title}>{title}</div>
          <div>{`${price}$`}</div>
        </div>
        <button className={searchResultStyles.button_cart}>
          <IconComponent name={cartIcon} className={searchResultStyles.cart_icon} />
        </button>
      </div>
    </div>
  );
};
