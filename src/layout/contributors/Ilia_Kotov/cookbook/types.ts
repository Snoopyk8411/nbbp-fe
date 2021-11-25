import { NextPage } from 'next';

export type NextPageWithLayout<Props> = NextPage<Props> & {
  getLayout?: (page: NextPage) => JSX.Element;
};
