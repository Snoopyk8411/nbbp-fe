import { useEffect, useRef, useState } from 'react';
import cn from 'classnames';

import { useIntersectionObserver } from 'hooks/use-intersection-observer';

import { DEFAULT_DIMENSION, FALLBACK_URL, IMAGE_TYPES, ITEM_PROP, ITEM_TYPE, THUMBNAIL_SUFFIX } from './constants';
import { addImageSuffix } from './addImageSuffix';
import ImageStyles from './image.module.css';
import { Source } from './Source';

type ImageProps = {
  className?: string;
  src: string;
  alt: string;
  width?: string;
  height?: string;
  useWebp?: boolean;
  useAvif?: boolean;
  useThumbnail?: boolean;
  useLazyLoading?: boolean;
};

export const Image = ({
  className,
  src,
  alt,
  width = DEFAULT_DIMENSION,
  height = DEFAULT_DIMENSION,
  useWebp,
  useAvif,
  useThumbnail,
  useLazyLoading = true,
}: ImageProps): JSX.Element => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [imgSrc, setImgSrc] = useState(src);
  const imgWrapperRef = useRef<HTMLPictureElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const isIntersecting = imgWrapperRef ? useIntersectionObserver(imgWrapperRef) : false;
  const dimensionsStyle = {
    width,
    height,
  };
  const isVisible = useLazyLoading ? isIntersecting : true;

  const handleLoad = (): void => {
    setIsLoaded(true);
  };

  const handleError = (): void => {
    setHasError(true);
  };

  useEffect(() => {
    const isSrcMutated = src !== imgSrc; // check if thumbnail suffix was added
    const needsFallback = !isSrcMutated && hasError;
    const needsSrcRestore = isSrcMutated && hasError;
    // if thumbnail couldn't load, try normal source
    if (needsSrcRestore) {
      setImgSrc(src);
    }
    // if main source couldn't load, show fallback
    if (needsFallback) {
      if (imgRef.current) {
        imgRef.current.onerror = (): void => {
          return;
        };
        setImgSrc(FALLBACK_URL);
      }
    }
  }, [hasError]);

  useEffect(() => {
    if (useThumbnail) {
      setImgSrc(addImageSuffix(src, THUMBNAIL_SUFFIX));
    }
  }, [src, useThumbnail]);

  return (
    <picture
      ref={imgWrapperRef}
      style={dimensionsStyle}
      className={cn(ImageStyles.wrapper, { [ImageStyles.loading as string]: !isLoaded })}
    >
      {useWebp && isVisible && <Source src={imgSrc} type={IMAGE_TYPES.WEBP} />}
      {useAvif && isVisible && <Source src={imgSrc} type={IMAGE_TYPES.AVIF} />}
      {isVisible && (
        <img
          className={cn(className, { [ImageStyles.error as string]: hasError })}
          ref={imgRef}
          style={dimensionsStyle}
          itemScope
          itemProp={ITEM_PROP}
          itemType={ITEM_TYPE}
          data-src={src}
          src={imgSrc}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
        />
      )}
    </picture>
  );
};
