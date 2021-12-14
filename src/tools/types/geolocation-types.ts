export type ICoords = [number, number];

export interface IGeoPoint {
  id: string;
  title: string;
  tag: string;
  description: string;
  coords: ICoords;
}
