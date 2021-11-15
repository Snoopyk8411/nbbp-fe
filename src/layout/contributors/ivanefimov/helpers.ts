import { BASE_URL, CardSize } from '../../../store/contributors/ivanefimov/constants';

export const getUrlById = (id: string) => `url(${BASE_URL}/id/${id}/${CardSize.WIDTH}/${CardSize.HEIGHT})`;
