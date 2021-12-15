import { IGeoPoint } from 'tools/types/geolocation-types';

export enum YMAP_CONFIG {
  LANG = 'ru_RU',
  PACKAGE = 'package.full',
  CLUSTERER_PRESET = 'invertedVioletClusterIcons',
  MODULE_BALLOON = 'geoObject.addon.balloon',
  MODULE_HINT = 'geoObject.addon.hint',
}

export const GEO_POINTS: IGeoPoint[] = [
  {
    id: '1',
    title: 'Москва 1',
    tag: 'МСК1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum omnis obcaecati natus, ea repellendus necessitatibus aut assumenda blanditiis commodi, officia fugiat similique repellat ratione at. Sunt, sequi illum? Dicta, dolorem!',
    coords: [55.831903, 37.411961],
  },
  {
    id: '2',
    title: 'Москва 2',
    tag: 'МСК2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum omnis obcaecati natus, ea repellendus necessitatibus aut assumenda blanditiis commodi, officia fugiat similique repellat ratione at.',
    coords: [55.763338, 37.565466],
  },
  {
    id: '3',
    title: 'Москва 3',
    tag: 'МСК3',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum omnis obcaecati natus, ea repellendus necessitatibus aut assumenda blanditiis commodi, officia fugiat similique repellat ratione at.',
    coords: [55.769338, 37.595466],
  },
  {
    id: '4',
    title: 'Москва 4',
    tag: 'МСК4',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum omnis obcaecati natus, ea repellendus necessitatibus aut assumenda blanditiis commodi, officia fugiat similique repellat ratione at.',
    coords: [55.744522, 37.616378],
  },
  {
    id: '5',
    title: 'Череповец',
    tag: 'ЧЕР',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum omnis obcaecati natus, ea repellendus necessitatibus aut assumenda blanditiis commodi, officia fugiat similique repellat ratione at.',
    coords: [59.1257843, 37.9827323],
  },
];

export const INITIAL_MAP_STATE = {
  center: [55.751574, 37.573856],
  zoom: 5,
};

export const NO_LOCATION_TAG = 'N/A';
