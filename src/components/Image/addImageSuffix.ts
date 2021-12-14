import { EXTENSION_REGEXP } from './constants';

export const addImageSuffix = (filePath: string, suffix: string): string => {
  const parsedValues = EXTENSION_REGEXP.exec(filePath);
  if (parsedValues) {
    return filePath.slice(0, parsedValues.index).concat(suffix).concat(filePath.slice(parsedValues.index));
  }
  return filePath;
};
