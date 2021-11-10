import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import Note from 'layout/gleb/components/note/Note';

let mockStore: any;
const mockStoreConf = configureStore();
const mockData = {};

describe('Note Component', () => {
  let props: { note: string };
  beforeEach(() => {
    mockStore = mockStoreConf(mockData);
    props = {
      note: 'write a note',
    };
  });

  it('Note snapshot', () => {
    const component = renderer.create(
      <Provider store={mockStore}>
        <Note {...props} />
      </Provider>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});