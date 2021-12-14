import { Image } from 'components/Image';

interface ShopPageLayoutProps {
  title: string;
}

const ShopPageLayout = ({ title }: ShopPageLayoutProps): JSX.Element => {
  return (
    <div>
      <Image src={'https://picsum.photos/id/1/250/500'} alt={''} />
      <h1>{title}</h1>
      <Image src={'https://picsum.photos/id/2/250/500'} width='250px' height='500px' alt={''} />
      <h1>{title}</h1>
      <Image src={'https://picsum.photos/id/3/250/500'} width='250px' height='500px' alt={''} />
      <h1>{title}</h1>
      <Image src={'https://picsum.photos/id/4/250/500'} width='250px' height='500px' alt={''} />
      <h1>{title}</h1>
      <Image src={'https://picsum.photos/id/5/250/500'} width='250px' height='500px' alt={''} />
      <h1>{title}</h1>
      <Image src={'jhkjh'} width='250px' height='500px' alt={''} />
      <h1>{title}</h1>
      <Image src={'https://picsum.photos/id/7/250/500'} width='250px' height='500px' alt={''} />
      <h1>{title}</h1>
      <Image src={'https://picsum.photos/id/8/250/500'} width='250px' height='500px' alt={''} />
      <h1>{title}</h1>
      <Image src={'sds'} width='250px' height='500px' alt={''} />
      <h1>{title}</h1>
      <Image src={'https://picsum.photos/id/10/250/500'} width='250px' height='500px' alt={''} />
      <h1>{title}</h1>
      <Image src={'https://picsum.photos/id/3/250/500'} width='250px' height='500px' alt={''} />
      <h1>{title}</h1>
      <Image src={'https://picsum.photos/id/4/250/500'} width='250px' height='500px' alt={''} />
      <Image src={'https://picsum.photos/id/5/250/500'} width='250px' height='500px' alt={''} />
    </div>
  );
};

export default ShopPageLayout;
