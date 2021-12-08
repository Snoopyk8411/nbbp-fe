import { Image } from 'components/Image';

interface ShopPageLayoutProps {
  title: string;
}

const ShopPageLayout = ({ title }: ShopPageLayoutProps): JSX.Element => {
  return (
    <div>
      <Image />
      <h1>{title}</h1>
      <Image />
      <Image />
      <Image />
      <Image />
      <Image />
      <Image />
      <Image />
      <Image />
      <Image />
      <Image />
      <Image />
      <Image />
      <Image />
    </div>
  );
};

export default ShopPageLayout;
