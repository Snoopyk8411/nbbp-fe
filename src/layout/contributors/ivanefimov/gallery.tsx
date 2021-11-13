import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import useVisibility from 'hooks/use-visibility';
import { actions } from 'store/contributors/ivanefimov/slice';
import { selectError, selectHasMore, selectIsLoading, selectPhotos } from 'store/contributors/ivanefimov/selectors';
import { TITLE } from 'store/contributors/ivanefimov/constants';
import { Card } from './components/card/card';
import { Loader } from './components/loader/loader';
import { IPhoto } from './interfaces';

import styles from './gallery.module.css';

interface IGalleryProps {
  initialPhotos: IPhoto[];
}

const Gallery = ({ initialPhotos }: IGalleryProps): JSX.Element => {
  const [isEndOfPage, endRef] = useVisibility<HTMLDivElement>();

  const dispatch = useDispatch();

  const photos = useSelector(selectPhotos);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const hasMore = useSelector(selectHasMore);

  useEffect(() => {
    if (!isLoading && hasMore && isEndOfPage) {
      dispatch(actions.fetchPage());
    }
  }, [isEndOfPage]);

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.heading}>{TITLE}</h1>
        {error && <p className={styles.error}>{error.message}</p>}
        <div className={styles.cards}>
          {[...initialPhotos, ...photos].map(photo => (
            <Card key={photo.id} photo={photo} />
          ))}
          {isLoading && <Loader />}
        </div>
        <div ref={endRef}></div>
      </div>
    </>
  );
};

export default Gallery;
