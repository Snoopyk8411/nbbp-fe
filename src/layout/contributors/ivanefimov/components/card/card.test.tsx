import renderer from 'react-test-renderer';

import { Card } from './card';
import { IPhoto } from 'layout/contributors/ivanefimov/interfaces';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter');
useRouter.mockImplementation(() => ({
  asPath: '',
}));

describe('Card component', () => {
  it('should get valid snapshot', () => {
    const photo: IPhoto = {
      id: '1',
      author: 'author',
      url: 'url',
      width: 100,
      height: 100,
      download_url: 'url',
    };
    const component = renderer.create(<Card photo={photo} />);
    expect(component).toMatchSnapshot();
  });
});
