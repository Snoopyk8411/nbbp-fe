const BASE_URL = 'https://picsum.photos';
const WIDTH = 200;
const HEIGHT = 300;

export const getUrlById = (id: string) => {
  return `url(${BASE_URL}/id/${id}/${WIDTH}/${HEIGHT})`;
};
