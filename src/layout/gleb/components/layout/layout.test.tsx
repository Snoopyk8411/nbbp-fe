import { ReactNode } from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import Layout from 'layout/gleb/components/layout/Layout';

let mockStore: any;
const mockStoreConf = configureStore();
const useRouter = jest.spyOn(require('next/router'), 'useRouter');
const mockData = {};

describe('Note Component', () => {
  let props: { children: string };
  beforeEach(() => {
    mockStore = mockStoreConf(mockData);
    props = {
      children: 'Component',
    };
  });

  it('Note snapshot', () => {
    useRouter.mockImplementationOnce(() => ({
      pathname: '/contributors/gleb/notes',
    }));

    const component = renderer.create(
      <Provider store={mockStore}>
        <Layout {...props} />
      </Provider>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
