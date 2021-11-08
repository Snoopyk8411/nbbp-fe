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
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getPicture());
  // }, []);

  const picture = useSelector((state: RootState) => state.picture);
  const date = picture.date.toString();
  return (
    <div>
      <div className={styles.main}>
        <h1>Astronomy picture of the day</h1>
        <div>{date}</div>
        {picture.media_type !== 'video' ? (
          <img src={picture.url} alt={picture.title} className={styles.picture} />
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

export const getStaticProps = () => {
  const dispatch = useDispatch();

  dispatch(getPicture());

  const picture = useSelector((state: RootState) => state.picture);
  const initialState = picture;

  return {
    props: initialState,
  };
};

export default Picture;
