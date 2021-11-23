import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { CreateNote } from 'layout/gleb/components/create-note/Create-note';
import { IMockStore } from 'layout/gleb/components/interfaces';

let mockStore: IMockStore;
const mockStoreConf = configureStore();
const mockData = {};

describe('CreateNote Component', () => {
  let props = {
    addNote: jest.fn(),
  };
  beforeEach(() => {
    mockStore = mockStoreConf(mockData);
  });

  it('makes CreateNote snapshot', () => {
    const component = renderer.create(
      <Provider store={mockStore}>
        <CreateNote {...props} />
      </Provider>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should add new task on click event', () => {
    const { getByTestId } = render(
      <Provider store={mockStore}>
        <CreateNote {...props} />
      </Provider>,
    );

    fireEvent.change(getByTestId('AddNoteInputField'), {
      target: { value: 'This is a demo note' },
    });
    fireEvent.click(getByTestId('AddNoteButton'));
    expect(props.addNote).toHaveBeenCalled();
    expect(props.addNote).toHaveBeenCalledWith('This is a demo note');
  });
});
