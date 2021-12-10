import { Geo } from 'components/geo/geo';

interface ShopPageLayoutProps {
  title: string;
}

const ShopPageLayout = ({ title }: ShopPageLayoutProps): JSX.Element => {
  return (
    <div>
      <h1>{title}</h1>
      <Geo />
    </div>
  );
};

export default ShopPageLayout;
