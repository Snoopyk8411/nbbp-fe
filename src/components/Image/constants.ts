import { enumToList } from 'tools/enum-to-list';

export enum IMAGE_TYPES {
  GIF,
  JPEG,
  JPG,
  PNG,
  SVG,
  TIFF,
  WEBP,
  AVIF,
}

export const EXTENSION_REGEXP = new RegExp(`\\.(${enumToList(IMAGE_TYPES).join('|')})`, 'i');
