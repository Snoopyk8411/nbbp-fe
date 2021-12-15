import { GEO_POINTS } from 'components/geo-widget/constants';
import { ICoords, IGeoPoint } from 'tools/types/geolocation-types';
import { getDistance, getNearest } from './geolocation';

describe('getDistance:', () => {
  it('should return distance between two points', () => {
    const p1: ICoords = [0, 0];
    const p2: ICoords = [0, 5];
    const p3: ICoords = [-5, 0];
    expect(getDistance(p1, p2)).toBe(5);
    expect(getDistance(p1, p1)).toBe(0);
    expect(getDistance(p2, p2)).toBe(0);
    expect(getDistance(p1, p3)).toBe(5);
  });
});

describe('getNearest:', () => {
  it('should return point nearest to target', () => {
    let target = (GEO_POINTS[0] as IGeoPoint).coords;
    expect(getNearest(target, GEO_POINTS)).toEqual(GEO_POINTS[0]);
    target = (GEO_POINTS[1] as IGeoPoint).coords;
    expect(getNearest(target, GEO_POINTS)).toEqual(GEO_POINTS[1]);
  });
});
