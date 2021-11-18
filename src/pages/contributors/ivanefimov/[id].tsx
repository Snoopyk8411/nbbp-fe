import { GetServerSideProps } from 'next';

import { IPhoto } from 'layout/contributors/ivanefimov/interfaces';
import { apiGetPhotoById } from 'store/contributors/ivanefimov/api-get-photos';

interface IFullSizePhotoPageProps {
  photo: IPhoto;
}

const FullSizePhotoPage = ({ photo }: IFullSizePhotoPageProps): JSX.Element => (
  <img src={photo.download_url} alt={`photo by ${photo.author}`} />
);

export default FullSizePhotoPage;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const photo = await apiGetPhotoById(params?.id as string);
  return {
    props: { photo },
  };
};
