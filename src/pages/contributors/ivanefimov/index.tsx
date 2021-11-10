import Gallery from 'layout/contributors/ivanefimov/components/gallery/gallery';
import { IPhoto } from 'layout/contributors/ivanefimov/interfaces';
import { apiLoadPhotos } from 'store/contributors/ivanefimov/api-load-photos';

type Props = {
  initialPhotos: IPhoto[];
};

const Index = ({ initialPhotos }: Props) => {
  return <Gallery initialPhotos={initialPhotos} />;
};

export default Index;

export const getServerSideProps = async () => {
  const initialPhotos = await apiLoadPhotos();
  return {
    props: { initialPhotos },
  };
};
