import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { DatePicker } from 'layout/gleb/components/date-picker/Date-picker';
import { IMockStore, IMockData } from 'layout/gleb/components/interfaces';

let mockStore: IMockStore;
const sagaMiddleware = createSagaMiddleware();
const mockStoreConf = configureStore([sagaMiddleware]);

const mockData: IMockData = {
  mediaPage: {
    media: {
      copyright: '',
      date: '2021-11-07',
      explanation: "To some it looks like a cat's eye.",
      hdurl: 'https://apod.nasa.gov/apod/image/2111/CatsEye_HubblePohl_1278.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: "The Cat's Eye Nebula in Optical and X-ray",
      url: 'https://apod.nasa.gov/apod/image/2111/CatsEye_HubblePohl_960.jpg',
    },
    error: null,
    selectedDay: 1637010000000,
    isLoading: false,
  },
};
type DateProps = {
  onChange: (e: string) => void;
};

describe('DatePicker Component', () => {
  let props: DateProps;
  beforeEach(() => {
    mockStore = mockStoreConf(mockData);
  });

  it('makes DatePicker snapshot', () => {
    const component = renderer.create(
      <Provider store={mockStore}>
        <DatePicker {...props} />
      </Provider>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
