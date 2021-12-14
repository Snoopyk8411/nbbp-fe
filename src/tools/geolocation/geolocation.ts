import { ICoords, IGeoPoint } from 'tools/types/geolocation-types';

const LOCATION = 'location';

export const readCoordsFromLocalStorage = (): ICoords | null => {
  const coords = localStorage.getItem(LOCATION);
  return coords ? (JSON.parse(coords) as ICoords) : null;
};

export const getCoords = (pos: GeolocationPosition): ICoords => {
  const { latitude, longitude } = pos.coords;
  return [latitude, longitude];
};

export const saveCoordsToLocalStorage = (point: ICoords): void => {
  localStorage.setItem(LOCATION, JSON.stringify(point));
};

export const getDistance = (p1: ICoords, p2: ICoords): number => {
  const [x1, y1] = p1;
  const [x2, y2] = p2;
  return ((x1 - x2) ** 2 + (y1 - y2) ** 2) ** 0.5;
};

export const getNearest = (target: ICoords, points: IGeoPoint[]): IGeoPoint | undefined => {
  let nearest = points[0];
  let distance = Infinity;

  points.forEach(el => {
    const currentDistance = getDistance(target, el.coords);
    if (currentDistance < distance) {
      distance = currentDistance;
      nearest = el;
    }
  });
  return nearest;
};
