import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { configureStore } from 'store';

import { GeoWidget } from './geo-widget';

describe('Geo component', () => {
  it('should get valid snapshot', () => {
    const mockStore = configureStore();
    const component = renderer.create(
      <Provider store={mockStore}>
        <GeoWidget />
      </Provider>,
    );
    expect(component).toMatchSnapshot();
  });
});
