import { changeImageExtension } from './changeImageExtension';
import { IMAGE_TYPES } from './constants';

type SourceProps = {
  src: string;
  type: IMAGE_TYPES;
};

export const Source = ({ src, type }: SourceProps): JSX.Element => {
  const altSrc = changeImageExtension(src, type);
  return <source data-srcset={altSrc} srcSet={altSrc} type={String(type)} />;
};
