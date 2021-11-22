import axios from 'axios';
import type { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from 'hooks/use-app-selector';

import imageLoader from 'layout/gleb/components/picture/imageLoader';
import Layout from 'layout/gleb/components/layout/Layout';
import { getPicture } from 'store/gleb/slice';
import { pictureSelector } from 'store/gleb/selectors';
import { DatePicker } from 'layout/gleb/components/date-picker/Date-picker';
import { IPicture } from 'store/gleb/interfaces';
import { VIDEO, PICTURE_PAGE_TITLE, API_URL } from 'layout/gleb/components/picture/constants';

import styles from 'layout/gleb/components/picture/picture.module.css';

type PicturePageProps = {
  initialPicture: IPicture;
};

type IPicturePageType = NextPage<PicturePageProps> & {
  getLayout: (page: NextPage) => JSX.Element;
};

const PicturePage: IPicturePageType = ({ initialPicture }) => {
  const dispatch = useDispatch();

  const picture = useAppSelector(pictureSelector);
  const [date, setDate] = useState(picture.date);
  const [isToday, setIsToday] = useState(true);

  useEffect(() => {
    const isNewDateSelected = date !== picture.date;
    if (isNewDateSelected) {
      setIsToday(false);
      dispatch(getPicture(date));
    }
  }, [date]);

  const currentPicture = isToday ? initialPicture : picture;

  const onChange = (newDate: string) => setDate(newDate);

  return (
    <div>
      <div className={styles.content}>
        <DatePicker onChange={onChange} />
        <h1 data-testid='title'>{PICTURE_PAGE_TITLE}</h1>
        <div>{date}</div>
        {currentPicture.media_type === VIDEO ? (
          <iframe id='video' title='video' loading='lazy' width='600' height='600' src={currentPicture.url}></iframe>
        ) : (
          <Image
            loader={imageLoader}
            unoptimized
            src={currentPicture?.url}
            alt={currentPicture.title}
            width='800px'
            height='600px'
          />
        )}
        <div className={styles.picture_title}>{currentPicture.title}</div>
        <div className={styles.explanation}>{currentPicture.explanation}</div>
      </div>
    </div>
  );
};

PicturePage.getLayout = (page: NextPage) => <Layout>{page}</Layout>;

export const getStaticProps: GetStaticProps = async () => {
  try {
    const res = await axios(API_URL);
    const initialPicture = await res.data;

    return {
      props: {
        initialPicture,
      },
    };
  } catch (error) {
    console.log('Fetching initial props failed');
    return { props: {} };
  }
};

export default PicturePage;
