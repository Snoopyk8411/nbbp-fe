import { FunctionComponent } from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { NoteList } from 'layout/gleb/components/note-list/Note-list';
import { IMockStore } from 'layout/gleb/components/interfaces';

let mockStore: IMockStore;
const mockStoreConf = configureStore();

const mockData = {};

describe('NoteList Component', () => {
  beforeEach(() => {
    mockStore = mockStoreConf(mockData);
  });

  it('makes NoteList snapshot', () => {
    const component = renderer.create(
      <Provider store={mockStore}>
        <NoteList />
      </Provider>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
