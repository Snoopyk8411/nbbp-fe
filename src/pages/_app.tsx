import { ReactNode, ReactElement } from 'react';
import type { AppProps } from 'next/app';
import { NextPage } from 'next';
import { Provider } from 'react-redux';
import store from 'store';
import 'styles/globals.css';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout): JSX.Element => {
  const getLayout = Component.getLayout ?? ((page: ReactNode): ReactNode => page);
  return <Provider store={store}>{getLayout(<Component {...pageProps} />)}</Provider>;
};

export default App;
