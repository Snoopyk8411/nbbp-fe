import { GetServerSideProps } from 'next';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPicture } from 'store/gleb/slice';
import { RootState } from 'store/reducers';
import store from 'store/index';
import imageLoader from 'layout/gleb/components/imageLoader';
import Layout from 'layout/gleb/components/layout/Layout';
import styles from './picture.module.css';

const Picture = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPicture());
  }, []);

  const picture = useSelector((state: RootState) => state.picture);
  const date = picture.date.toString();

  const image = picture.url ? (
    <Image loader={imageLoader} unoptimized src={picture.url} alt={picture.title} width='500px' height='500px' />
  ) : (
    <img src={picture.url} alt={picture.title} className={styles.picture} />
  );

  return (
    <div>
      <div className={styles.main}>
        <h1 data-testid='title'>Astronomy picture of the day</h1>
        <div>{date}</div>
        {picture.media_type !== 'video' ? (
          image
        ) : (
          <iframe id='video' title='video' loading='lazy' width='500' height='500' src={picture.url}></iframe>
        )}
        <div className={styles.picture_title}>{picture.title}</div>
        <div>{picture.explanation}</div>
      </div>
    </div>
  );
};

Picture.getLayout = function getLayout(page: typeof Picture) {
  return <Layout>{page}</Layout>;
};

// export const getStaticProps = () => {
//   const picture = useSelector((state: RootState) => state.picture);
//   const initialState = picture;

//   return {
//     props: initialState,
//   };
// };

export default Picture;
