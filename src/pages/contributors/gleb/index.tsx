import axios from 'axios';
import type { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from 'hooks/use-app-selector';

import { imageLoader } from 'layout/gleb/components/media/imageLoader';
import { Loader } from 'layout/gleb/components/loader/loader';
import { Layout } from 'layout/gleb/components/layout/Layout';
import { getMedia } from 'store/gleb/slice';
import { mediaSelector, selectIsLoading } from 'store/gleb/selectors';
import { DatePicker } from 'layout/gleb/components/date-picker/Date-picker';
import { IMedia } from 'store/gleb/interfaces';
import { VIDEO, PICTURE_PAGE_TITLE, API_URL } from 'layout/gleb/components/media/constants';

import styles from 'layout/gleb/components/media/media.module.css';

type MediaPageProps = {
  initialMedia: IMedia;
};

type IMediaPageType = NextPage<MediaPageProps> & {
  getLayout: (page: NextPage) => JSX.Element;
};

const MediaPage: IMediaPageType = ({ initialMedia }) => {
  const dispatch = useDispatch();

  const storedMedia = useAppSelector(mediaSelector);
  const isLoading = useAppSelector(selectIsLoading);
  const [date, setDate] = useState(storedMedia.date);
  const [isToday, setIsToday] = useState(true);

  const currentMedia = isToday ? initialMedia : storedMedia;
  const { url, title, media_type, explanation } = currentMedia;
  const isMediaTypeVideo = media_type === VIDEO;

  useEffect(() => {
    const isNewDateSelected = date !== storedMedia.date;
    if (isNewDateSelected) {
      setIsToday(false);
      dispatch(getMedia(date));
    }
  }, [date]);

  const handleChange = (newDate: string): void => setDate(newDate);
  return (
    <div>
      <div className={styles.content}>
        <DatePicker onChange={handleChange} />
        <h1 data-testid='title'>{PICTURE_PAGE_TITLE}</h1>
        {isLoading && <Loader />}
        <div>{date}</div>
        {isMediaTypeVideo ? (
          <iframe id='video' title='video' loading='lazy' width='600' height='600' src={url}></iframe>
        ) : (
          url && <Image loader={imageLoader} unoptimized src={url} alt={title} width='800px' height='600px' />
        )}
        <div className={styles.picture_title}>{title}</div>
        <div className={styles.explanation}>{explanation}</div>
      </div>
    </div>
  );
};

MediaPage.getLayout = (page: NextPage) => <Layout>{page}</Layout>;

export const getStaticProps: GetStaticProps = async () => {
  try {
    const res = await axios(API_URL);
    const initialMedia = await res.data;

    return {
      props: {
        initialMedia,
      },
    };
  } catch (error) {
    console.log('Fetching initial props failed');
    return { props: {} };
  }
};

export default MediaPage;
