import { GetServerSideProps } from 'next';
import { ParsedUrlQuery } from 'querystring';

import { IPhoto } from 'layout/contributors/ivanefimov/interfaces';
import { apiGetPhotoById } from 'store/contributors/ivanefimov/api-get-photos';
import { DEFAULT_ID } from 'store/contributors/ivanefimov/constants';

interface IFullSizePhotoPageProps {
  photo: IPhoto | string;
}

const FullSizePhotoPage = ({ photo }: IFullSizePhotoPageProps): JSX.Element => {
  return typeof photo !== 'string' ? <img src={photo.download_url} alt={`photo by ${photo.author}`} /> : <p>{photo}</p>;
};

export default FullSizePhotoPage;

interface IParams extends ParsedUrlQuery {
  id: string;
}

export const getServerSideProps: GetServerSideProps<IFullSizePhotoPageProps, IParams> = async ({ params }) => {
  let id = DEFAULT_ID;
  if (params) {
    id = params.id;
  }
  const photo = await apiGetPhotoById(id);
  return {
    props: { photo },
  };
};
