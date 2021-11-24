import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { NOTES_ROUTE } from './constants';
import { Layout } from 'layout/gleb/components/layout/Layout';
import { IMockStore } from 'layout/gleb/components/interfaces';

let mockStore: IMockStore;
const mockStoreConf = configureStore();
const mockRoutePush = jest.fn();

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
      push: mockRoutePush,
    };
  },
}));
const mockData = {};

describe('Layout Component', () => {
  let props: { children: string };
  beforeEach(() => {
    mockStore = mockStoreConf(mockData);
    props = {
      children: 'Component',
    };
  });

  it('makes Layout snapshot', () => {
    const component = renderer.create(
      <Provider store={mockStore}>
        <Layout {...props} />
      </Provider>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should push to Notes component', () => {
    const { getByTestId } = render(
      <Provider store={mockStore}>
        <Layout {...props} />
      </Provider>,
    );

    fireEvent.click(getByTestId('NavigationButton'));
    expect(mockRoutePush).toHaveBeenCalledTimes(1);
    expect(mockRoutePush).toHaveBeenCalledWith(NOTES_ROUTE);
  });
});
