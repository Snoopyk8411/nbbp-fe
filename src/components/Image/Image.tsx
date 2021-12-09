import { useEffect, useRef, useState } from 'react';
import cn from 'classnames';

import { useIntersectionObserver } from 'hooks/use-intersection-observer';
import { Loader } from 'components/Loader';

import ImageStyles from './image.module.css';

type ImageProps = {
  src: string;
  alt: string;
  width?: string;
  height?: string;
};

export const Image = ({ src, alt, width = 'auto', height = 'auto' }: ImageProps): JSX.Element => {
  const dimensionsStyle = {
    width,
    height,
  };
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgWrapperRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const imgRef = useRef() as React.MutableRefObject<HTMLImageElement>;
  const isVisible = useIntersectionObserver(imgWrapperRef);
  const [imgSrc, setImgSrc] = useState(src);
  const handleLoad = (): void => {
    setIsLoaded(true);
  };
  const handleError = (): void => {
    setHasError(true);
    setImgSrc('assets/error.png');
  };
  useEffect(() => {
    setIsLoaded(imgRef.current?.complete);
    setHasError(Boolean(imgRef.current?.complete && !imgRef.current?.naturalWidth));
  }, [src]);
  useEffect(() => {
    console.log('set haserror');
    console.log(hasError);
    if (hasError) {
      imgRef.current.onerror = (): void => {
        return;
      };
      setImgSrc('assets/error.png');
    }
  }, [hasError]);
  console.log(isVisible);
  console.log(hasError);
  return (
    <div ref={imgWrapperRef} style={dimensionsStyle}>
      {!isLoaded && <Loader />}
      {isVisible && (
        <img
          className={cn({ [ImageStyles.error as string]: hasError })}
          ref={imgRef}
          style={dimensionsStyle}
          src={imgSrc}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
        />
      )}
    </div>
  );
};
