import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import useVisibility from 'hooks/use-visibility';
import { actions } from 'store/contributors/ivanefimov/slice';
import { isLoadingSelector, photosSelector } from 'store/contributors/ivanefimov/selectors';
import { Card } from '../card/card';
import { Loader } from '../loader/loader';
import styles from './gallery.module.css';

const Gallery = () => {
  const [isVisible, endRef] = useVisibility<HTMLDivElement>();
  const dispatch = useDispatch();
  const photos = useSelector(photosSelector);
  const isLoading = useSelector(isLoadingSelector);

  useEffect(() => {
    if (!isLoading && (isVisible || !photos.length)) {
      dispatch(actions.fetchPage());
    }
  }, [isVisible]);

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.heading}>Lorem Picsum Gallery</h1>
        <div className={styles.cards}>
          {photos.map(photo => (
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
