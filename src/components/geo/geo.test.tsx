import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { configureStore } from 'store';

import { Geo } from './geo';

describe('Geo component', () => {
  it('should get valid snapshot', () => {
    const mockStore = configureStore();
    const component = renderer.create(
      <Provider store={mockStore}>
        <Geo />
      </Provider>,
    );
    expect(component).toMatchSnapshot();
  });
});
