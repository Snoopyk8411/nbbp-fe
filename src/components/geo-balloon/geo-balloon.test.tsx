import renderer from 'react-test-renderer';

import { IGeoPoint } from 'tools/types/geolocation-types';
import { GeoBalloon } from './geo-balloon';

describe('Geo balloon component', () => {
  it('should get valid snapshot', () => {
    const point: IGeoPoint = {
      id: '1',
      title: 'Title',
      tag: 'Tag',
      description: 'Description',
      coords: [0, 0],
    };
    const component = renderer.create(<GeoBalloon point={point} />);
    expect(component).toMatchSnapshot();
  });
});
