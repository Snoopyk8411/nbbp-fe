import { render } from '@testing-library/react';
import { Breadcrumbs } from '.';
import { IBreadcrumb } from './types';

const PATH: IBreadcrumb[] = [
  {
    name: 'Главная',
    url: '/shop',
  },
  {
    name: 'Каталог',
    url: '/shop/catalog',
  },
  {
    name: 'Новинки',
    url: '/shop/catalog/latest',
  },
  {
    name: 'Пиво, медовуха',
  },
];

describe('Breadcrumbs component', () => {
  it('should render all path names', () => {
    const { getByText } = render(<Breadcrumbs path={PATH} />);
    expect(PATH.map(pathItem => getByText(pathItem.name)).every(Boolean)).toBeTruthy();
  });
  it('should render links for path entries with url', () => {
    const { getByText } = render(<Breadcrumbs path={PATH} />);
    expect(
      PATH.filter(pathItem => pathItem.url)
        .map(pathItem => getByText(pathItem.name).closest('a'))
        .every(Boolean),
    ).toBeTruthy();
  });
});
