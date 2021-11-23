import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import MediaPage from 'pages/contributors/gleb';
import { IMedia } from 'store/gleb/interfaces';
import { IMockStore, IMockData } from 'layout/gleb/components/interfaces';

let mockStore: IMockStore;
const sagaMiddleware = createSagaMiddleware();
const mockStoreConf = configureStore([sagaMiddleware]);

type MediaPageProps = {
  initialMedia: IMedia;
};
const media = {
  copyright: '',
  date: '2021-11-07',
  explanation: "To some it looks like a cat's eye.",
  hdurl: 'https://apod.nasa.gov/apod/image/2111/CatsEye_HubblePohl_1278.jpg',
  media_type: 'image',
  service_version: 'v1',
  title: "The Cat's Eye Nebula in Optical and X-ray",
  url: 'https://apod.nasa.gov/apod/image/2111/CatsEye_HubblePohl_960.jpg',
};

const mockData: IMockData = {
  mediaPage: {
    media,
    error: null,
    selectedDay: 1637010000000,
    isLoading: false,
  },
};

describe('MediaPage Component', () => {
  let props: MediaPageProps;
  beforeEach(() => {
    mockStore = mockStoreConf(mockData);
    props = {
      initialMedia: media,
    };
  });

  it('makes MediaPage snapshot', () => {
    const component = renderer.create(
      <Provider store={mockStore}>
        <MediaPage {...props} />
      </Provider>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
