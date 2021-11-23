import renderer from 'react-test-renderer';

import { Loader } from './loader';

describe('Loader component', () => {
  it('should get valid snapshot', () => {
    const component = renderer.create(<Loader />);
    expect(component).toMatchSnapshot();
  });
});
