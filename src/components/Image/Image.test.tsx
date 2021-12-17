import { fireEvent, render } from '@testing-library/react';
import { useIntersectionObserver } from 'hooks/use-intersection-observer';

import { FALLBACK_URL, IMAGE_TYPES, THUMBNAIL_SUFFIX } from './constants';
import { Image } from './Image';

jest.mock('hooks/use-intersection-observer', () => ({
  useIntersectionObserver: jest.fn(),
}));

const useIntersectionObserverMock = useIntersectionObserver as jest.MockedFunction<typeof useIntersectionObserver>;

const TEST_SRC = 'somefolder/test.jpg';
const TEST_SRC_THUMB = `somefolder/test${THUMBNAIL_SUFFIX}.jpg`;
const TEST_SRC_WEBP = `somefolder/test.${IMAGE_TYPES.WEBP}`;
const TEST_ALT = 'test';

describe('Image component', () => {
  beforeEach(() => {
    useIntersectionObserverMock.mockReturnValue(true);
  });

  it('should render image component when component is visible', () => {
    const { getByRole } = render(<Image src={TEST_SRC} alt={TEST_ALT} />);
    expect(getByRole('img')).toBeInTheDocument();
  });
  it('should hide image component when component is not visible', () => {
    useIntersectionObserverMock.mockReturnValue(false);
    const { queryByRole } = render(<Image src={TEST_SRC} alt={TEST_ALT} />);
    expect(queryByRole('img')).toBeFalsy();
  });
  it('should always render image component when lazy loading disabled', () => {
    useIntersectionObserverMock.mockReturnValue(false);
    const { getByRole } = render(<Image src={TEST_SRC} alt={TEST_ALT} useLazyLoading={false} />);
    expect(getByRole('img')).toBeInTheDocument();
  });
  it('should add source element for wepb sourse', () => {
    const { container } = render(<Image src={TEST_SRC} alt={TEST_ALT} useWebp />);
    expect(container.querySelector('source')).toBeInTheDocument();
  });
  it('should correctly change source extension of webp source', () => {
    const { container } = render(<Image src={TEST_SRC} alt={TEST_ALT} useWebp />);
    expect(container.querySelector('source')).toHaveAttribute('srcset', TEST_SRC_WEBP);
  });
  it('should correctly add thumbnail suffix to image path', () => {
    const { getByRole } = render(<Image src={TEST_SRC} alt={TEST_ALT} useThumbnail />);
    expect(getByRole('img')).toHaveAttribute('src', TEST_SRC_THUMB);
  });
  it('should show fallback image on error', () => {
    const { getByRole } = render(<Image src={TEST_SRC} alt={TEST_ALT} />);
    fireEvent.error(getByRole('img'));
    expect(getByRole('img')).toHaveAttribute('src', FALLBACK_URL);
  });
});
