import { FC, useState } from 'react';
import { renderToString } from 'react-dom/server';
import cn from 'classnames';
import { YMaps, Map, Clusterer, Placemark, YMapsApi } from 'react-yandex-maps';

import geoStyles from './geo.module.css';

const mapState = {
  center: [55.751574, 37.573856],
  zoom: 5,
};

interface IPoint {
  id: string;
  title: string;
  tag: string;
  descr: string;
  coords: [number, number];
}

const POINTS: IPoint[] = [
  {
    id: '1',
    title: 'Placemark 1',
    tag: 'PLC1',
    descr: 'Some description',
    coords: [55.831903, 37.411961],
  },
  {
    id: '2',
    title: 'Placemark 2',
    tag: 'PLC2',
    descr: 'Some description',
    coords: [55.763338, 37.565466],
  },
  {
    id: '3',
    title: 'Placemark 3',
    tag: 'PLC3',
    descr: 'Some description',
    coords: [55.769338, 37.595466],
  },
  {
    id: '4',
    title: 'Placemark 4',
    tag: 'PLC4',
    descr: 'Some description',
    coords: [55.744522, 37.616378],
  },
];

interface IBaloonProps {
  point: IPoint;
}

export const Baloon: FC<IBaloonProps> = ({ point }) => {
  const { title, descr } = point;
  return (
    <div>
      <h4>{title}</h4>
      <div>{descr}</div>
    </div>
  );
};

export const Geo = (): JSX.Element => {
  const [isMapOpen, setIsMapOpen] = useState<boolean>(false);
  const [ymaps, setYmaps] = useState<YMapsApi>();
  const dropDownStyle = geoStyles.open || '';

  return (
    <div className={cn(geoStyles.geo, { [dropDownStyle]: isMapOpen })}>
      <button className={geoStyles.geo__toggle} onClick={(): void => setIsMapOpen(!isMapOpen)}>
        <svg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
          {' '}
          <path
            d='M13.0667 0.533325L0.53 4.71199C0.465111 4.7335 0.408403 4.77444 0.367563 4.82926C0.326724 4.88408 0.303726 4.95013 0.301688 5.01846C0.299651 5.08679 0.318672 5.1541 0.356173 5.21125C0.393673 5.26841 0.447841 5.31265 0.511333 5.33799L6.33333 7.66666L9.28333 13.5667C9.31335 13.6267 9.36082 13.6763 9.41951 13.709C9.47821 13.7416 9.5454 13.7558 9.61227 13.7496C9.67915 13.7434 9.74259 13.7171 9.79429 13.6743C9.84599 13.6314 9.88353 13.5739 9.902 13.5093L13.4933 0.940658C13.51 0.882268 13.5103 0.820443 13.4944 0.761856C13.4785 0.70327 13.4468 0.650148 13.4029 0.608223C13.359 0.566298 13.3045 0.537164 13.2452 0.523964C13.186 0.510765 13.1242 0.514001 13.0667 0.533325Z'
            fill='#949494'
          ></path>
        </svg>
        <span className={geoStyles.geo__value}>МСК</span>
      </button>
      <div className={geoStyles.geo__dropdown}>
        <YMaps query={{ lang: 'ru_RU', load: 'package.full' }}>
          <Map defaultState={mapState} width={'100%'} height={'100%'} onLoad={(ymaps): any => setYmaps(ymaps)}>
            <Clusterer
              options={{
                preset: 'islands#invertedVioletClusterIcons',
                groupByCoordinates: false,
                balloonPanelMaxMapArea: Infinity,
              }}
            >
              {ymaps &&
                POINTS.map((point, index) => (
                  <Placemark
                    modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
                    key={index}
                    geometry={point.coords}
                    hintContent={point.title}
                    balloonContent={renderToString(<Baloon point={point} />)}
                  />
                ))}
            </Clusterer>
          </Map>
        </YMaps>
      </div>
    </div>
  );
};
