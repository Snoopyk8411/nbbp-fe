import axios from 'axios';
import { GetServerSideProps } from 'next';

import { IPhoto } from 'layout/contributors/ivanefimov/interfaces';

export default function FullSizePhoto({ photo }: { photo: IPhoto }) {
  return <img src={photo.download_url} alt={`photo by ${photo.author}`} />;
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const photo = await axios.get<IPhoto>(`https://picsum.photos/id/${params?.id}/info`).then(res => res.data);
  return {
    props: { photo },
  };
};
