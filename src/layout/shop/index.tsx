import { GeoWidget } from 'components/geo-widget/geo-widget';

interface ShopPageLayoutProps {
  title: string;
}

const ShopPageLayout = ({ title }: ShopPageLayoutProps): JSX.Element => {
  return (
    <div>
      <h1>{title}</h1>
      <GeoWidget />
    </div>
  );
};

export default ShopPageLayout;
