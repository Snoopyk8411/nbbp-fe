import { FC } from 'react';

import { IGeoPoint } from 'tools/types/geolocation-types';
import balloonStyles from './geo-balloon.module.css';

interface IGeoBaloonProps {
  point: IGeoPoint;
  handleSelect?: () => void;
}

export const GeoBalloon: FC<IGeoBaloonProps> = ({ point, handleSelect }) => {
  const { title, description } = point;
  return (
    <div className={balloonStyles.wrapper}>
      <h4 className={balloonStyles.heading}>{title}</h4>
      <div>{description}</div>
      <button className={balloonStyles.button} onClick={handleSelect} type='button'>
        Выбрать
      </button>
    </div>
  );
};
