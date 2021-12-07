import { Breadcrumbs } from 'components/Breadcrumbs/Breadcrumbs';

interface ShopPageLayoutProps {
  title: string;
}

const ShopPageLayout = ({ title }: ShopPageLayoutProps): JSX.Element => {
  return (
    <div>
      <h1>{title}</h1>
      <Breadcrumbs
        path={[
          { name: 'test', url: 'test' },
          { name: 'test2', url: 'test' },
          { name: 'test3', url: 'aa' },
        ]}
      />
    </div>
  );
};

export default ShopPageLayout;
