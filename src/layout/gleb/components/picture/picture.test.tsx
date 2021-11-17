import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import PicturePage from 'pages/contributors/gleb';
import { IPicture } from 'store/gleb/interfaces';
import { IMockStore } from 'layout/gleb/components/interfaces';

let mockStore: IMockStore;
const sagaMiddleware = createSagaMiddleware();
const mockStoreConf = configureStore([sagaMiddleware]);

type PicturePageProps = {
  todayPicture: IPicture;
};
const picture = {
  copyright: '',
  date: '2021-11-07',
  explanation: "To some it looks like a cat's eye.",
  hdurl: 'https://apod.nasa.gov/apod/image/2111/CatsEye_HubblePohl_1278.jpg',
  media_type: 'image',
  service_version: 'v1',
  title: "The Cat's Eye Nebula in Optical and X-ray",
  url: 'https://apod.nasa.gov/apod/image/2111/CatsEye_HubblePohl_960.jpg',
};

const mockData = {
  picturePage: {
    picture: picture,
  },
};

describe('PicturePage Component', () => {
  let props: PicturePageProps;
  beforeEach(() => {
    mockStore = mockStoreConf(mockData);
    props = {
      todayPicture: picture,
    };
  });

  it('PicturePage snapshot', () => {
    const component = renderer.create(
      <Provider store={mockStore}>
        <PicturePage {...props} />
      </Provider>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
