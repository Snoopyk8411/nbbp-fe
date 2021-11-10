import axios from 'axios';

import { IPhoto } from 'layout/contributors/ivanefimov/interfaces';

const BASE_URL = 'https://picsum.photos/v2/list';
const LIMIT = 10;

export const apiLoadPhotos = async (page = 1) => {
  return await axios
    .get<IPhoto[]>(BASE_URL, {
      params: {
        page,
        limit: LIMIT,
      },
    })
    .then(res => res.data);
};
