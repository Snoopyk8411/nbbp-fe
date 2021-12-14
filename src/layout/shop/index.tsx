interface ShopPageLayoutProps {
  title: string;
}

const ShopPageLayout = ({ title }: ShopPageLayoutProps): JSX.Element => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export default ShopPageLayout;
