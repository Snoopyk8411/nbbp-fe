import axios from 'axios';

const apiKey = process.env.apiKey;

export function requestGetPicture(newDate: string) {
  return axios
    .request({
      method: 'GET',
      url: `https://api.nasa.gov/planetary/apod?date=${newDate}&api_key=${apiKey}`,
    })
    .then(res => res.data);
}
