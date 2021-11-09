import axios from 'axios';
import store from 'store';
import { IPhoto } from 'layout/contributors/ivanefimov/interfaces';

const BASE_URL = 'https://picsum.photos/v2/list';
const LIMIT = 10;

export const apiLoadPhotos = async () => {
  const page = store.getState().galleryPage.page;
  return await axios
    .get<IPhoto[]>(BASE_URL, {
      params: {
        page,
        limit: LIMIT,
      },
    })
    .then(res => res.data);
};
