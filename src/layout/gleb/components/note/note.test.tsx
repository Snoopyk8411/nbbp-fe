import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import NoteList from 'pages/contributors/gleb/notes';

let mockStore: any;
const mockStoreConf = configureStore();

const mockData = {};

describe('Note Component', () => {
  beforeEach(() => {
    mockStore = mockStoreConf(mockData);
  });

  it('Note snapshot', () => {
    const component = renderer.create(
      <Provider store={mockStore}>
        <NoteList />
      </Provider>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
