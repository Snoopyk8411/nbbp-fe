import type { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getPicture } from 'store/gleb/slice';
import { useAppSelector } from 'hooks/use-app-selector';
import { pictureSelector } from 'store/gleb/selectors';
import imageLoader from 'layout/gleb/components/picture/imageLoader';
import Layout from 'layout/gleb/components/layout/Layout';
import { DatePicker } from 'layout/gleb/components/date-picker/Date-picker';
import { IPicture } from 'store/gleb/interfaces';
import { VIDEO, PICTURE_PAGE_TITLE } from 'layout/gleb/components/picture/constants';

import styles from 'layout/gleb/components/picture/picture.module.css';

type PicturePageProps = {
  todayPicture: IPicture;
};

const PicturePage: NextPage<PicturePageProps> = ({ todayPicture }) => {
  const dispatch = useDispatch();

  const pictureFromStore = useAppSelector(pictureSelector);
  const [date, setDate] = useState(pictureFromStore.date);
  const [isToday, setIsToday] = useState(true);

  useEffect(() => {
    if (date !== pictureFromStore.date) {
      setIsToday(false);
      dispatch(getPicture(date));
    }
  }, [date]);

  const picture = isToday ? todayPicture : pictureFromStore;

  const image = picture.url ? (
    <Image loader={imageLoader} unoptimized src={picture.url} alt={picture.title} width='600px' height='600px' />
  ) : (
    <img src={picture.url} alt={picture.title} className={styles.picture_image} />
  );

  function onChange(newDate: string) {
    setDate(newDate);
  }

  return (
    <div>
      <div className={styles.content}>
        <DatePicker onChange={onChange} />
        <h1 data-testid='title'>{PICTURE_PAGE_TITLE}</h1>
        <div>{date}</div>
        {picture.media_type === VIDEO ? (
          <iframe id='video' title='video' loading='lazy' width='600' height='600' src={picture.url}></iframe>
        ) : (
          image
        )}
        <div className={styles.picture_title}>{picture.title}</div>
        <div className={styles.explanation}>{picture.explanation}</div>
      </div>
    </div>
  );
};

(PicturePage as any).getLayout = function getLayout(page: typeof PicturePage) {
  return <Layout>{page}</Layout>;
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=musopXnASrDXLrAcjqs4aSU3Fd9pXF9nYnFsCh5a`);
  const todayPicture = await res.json();

  return {
    props: {
      todayPicture,
    },
  };
};

export default PicturePage;
