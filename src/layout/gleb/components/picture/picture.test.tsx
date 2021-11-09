import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import Picture from 'layout/gleb/components/picture/Picture';

let mockStore: any;
const mockStoreConf = configureStore();

const mockData = {
  picture: {
    copyright: '',
    date: '2021-11-07',
    explanation: "To some it looks like a cat's eye.",
    hdurl: 'https://apod.nasa.gov/apod/image/2111/CatsEye_HubblePohl_1278.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: "The Cat's Eye Nebula in Optical and X-ray",
    url: 'https://apod.nasa.gov/apod/image/2111/CatsEye_HubblePohl_960.jpg',
  },
};

describe('Picture Component', () => {
  beforeEach(() => {
    mockStore = mockStoreConf(mockData);
  });

  it('Picture snapshot', () => {
    const component = renderer.create(
      <Provider store={mockStore}>
        <Picture />
      </Provider>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
