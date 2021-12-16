import { EXTENSION_REGEXP, IMAGE_TYPES } from './constants';

export const changeImageExtension = (filePath: string, newExtension: IMAGE_TYPES): string =>
  filePath.replace(EXTENSION_REGEXP, `.${newExtension}`);
