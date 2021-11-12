import axios from 'axios';

import { IPhoto } from 'layout/contributors/ivanefimov/interfaces';
import { BY_ID_URL, LIST_URL, PAGE_SIZE } from './constants';

export const apiGetPhotos = async (page = 1) => {
  return await axios
    .get<IPhoto[]>(LIST_URL, {
      params: {
        page,
        limit: PAGE_SIZE,
      },
    })
    .then(res => res.data);
};

export const apiGetPhotoById = async (id: string) => {
  return await axios.get<IPhoto>(`${BY_ID_URL}${id}/info`).then(res => res.data);
};
