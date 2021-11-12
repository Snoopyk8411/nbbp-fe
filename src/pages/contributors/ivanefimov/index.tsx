import Gallery from 'layout/contributors/ivanefimov/gallery';
import { IPhoto } from 'layout/contributors/ivanefimov/interfaces';
import { apiGetPhotos } from 'store/contributors/ivanefimov/api-get-photos';

interface IIndexPageProps {
  initialPhotos: IPhoto[];
}

const IndexPage = ({ initialPhotos }: IIndexPageProps): JSX.Element => {
  return <Gallery initialPhotos={initialPhotos} />;
};

export default IndexPage;

export const getServerSideProps = async () => {
  const initialPhotos = await apiGetPhotos();
  return {
    props: { initialPhotos },
  };
};
