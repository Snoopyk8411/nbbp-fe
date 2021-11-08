import axios from 'axios';
import { IPicture } from './interfaces';

export function requestGetPicture(): Promise<IPicture> {
  return axios
    .request<IPicture>({
      method: 'get',
      url: 'https://api.nasa.gov/planetary/apod?api_key=musopXnASrDXLrAcjqs4aSU3Fd9pXF9nYnFsCh5a',
    })
    .then(res => res.data);
}
