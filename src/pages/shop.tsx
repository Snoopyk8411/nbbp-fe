import Head from 'next/head';
import ShopPageLayout from 'layout/shop';

interface IOgTags {
  locale: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

const OG_TAGS: IOgTags = {
  locale: 'en-US',
  title: 'Shop',
  description: 'Shop description',
  image: 'assets/logo.png',
  imageAlt: 'Fork and knife',
};

const ShopPage = (): JSX.Element => (
  <>
    <Head>
      <title>Shop</title>
      <meta charSet='utf-8' />
      <meta content='IE=edge' httpEquiv='X-UA-Compatible' />
      <meta content='width=device-width, initial-scale=1' name='viewport' />
      <meta content='shop food' name='keywords' />
      <meta content='follow, index' name='robots' />
      <meta content='#ffffff' name='theme-color' />
      <meta content='#ffffff' name='msapplication-TileColor' />
      <meta content={OG_TAGS.description} name='description' />
      <link href='favicon.ico' rel='shortcut icon' />
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='' />
      <link
        href='https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,400;0,600;0,700;0,900;1,400&display=swap'
        rel='stylesheet'
      />
      <meta content={OG_TAGS.locale} property='og:locale' />
      <meta content={OG_TAGS.title} property='og:title' />
      <meta content={OG_TAGS.description} property='og:description' />
      <meta content={OG_TAGS.image} property='og:image' />
      <meta content={OG_TAGS.imageAlt} property='og:image:alt' />
      <meta name='geo.region' content='US' />
      <meta name='geo.placename' content='West New York' />
      <meta name='geo.position' content='40.791;-74.009' />
      <meta name='ICBM' content='40.791, -74.009' />

      {/* Owner verification meta tags
        <meta content="" name="yandex-verification" />
        <meta content="" name="google-site-verification" /> */}
    </Head>
    <ShopPageLayout title='Shop page' />
  </>
);

export default ShopPage;
