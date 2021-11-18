import axios from 'axios';

const apiKey = process.env.NEXT_PUBLIC_API_KEY;

export function requestGetPicture(newDate: string) {
  console.log();
  return axios
    .request({
      method: 'GET',
      url: `https://api.nasa.gov/planetary/apod?date=${newDate}&api_key=${apiKey}`,
    })
    .then(res => res.data);
}
