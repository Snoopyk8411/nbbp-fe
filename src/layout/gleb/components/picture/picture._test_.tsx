import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import '@testing-library/react';
import createSagaMiddleware from 'redux-saga';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import Picture from 'layout/gleb/components/picture/Picture';
import { IPicture } from 'store/gleb/interfaces';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
let mockStore: any;
const mockStoreConf = configureStore(middlewares);

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
    console.log(mockStore, 'xz');
  });

  // it('Picture snapshot', () => {
  //   const component = renderer.create(
  //     <Provider store={mockStore}>
  //       <Picture />
  //     </Provider>
  //   );
  //   const tree = component.toJSON();
  //   expect(tree).toMatchSnapshot();
  // });

  // it('successfully rendered', () => {
  //   const component = render(
  //     <Provider store={mockStore}>
  //       <Picture />
  //     </Provider>,
  //   );

  //   expect(component).getByTestId('title').textContent.toBe('Astronomy picture of the day');
  // });

  it('successfully rendered', () => {
    render(<Picture />);

    const heading = screen.getByRole('h1', {
      name: /Astronomy picture of the day/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
