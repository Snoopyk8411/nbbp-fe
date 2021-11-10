import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import NoteList from 'layout/gleb/components/note-list/Note-list';

let mockStore: any;
const mockStoreConf = configureStore();

const mockData = {};

describe('NoteList Component', () => {
  let props: { note: string };
  beforeEach(() => {
    mockStore = mockStoreConf(mockData);
  });

  it('NoteList snapshot', () => {
    const component = renderer.create(
      <Provider store={mockStore}>
        <NoteList />
      </Provider>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
