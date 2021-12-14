import { enumToList } from 'tools/enum-to-list';

export enum IMAGE_TYPES {
  GIF = 'gif',
  JPEG = 'jpeg',
  JPG = 'jpg',
  PNG = 'png',
  SVG = 'svg',
  TIFF = 'tiff',
  WEBP = 'webp',
  AVIF = 'avif',
}

export const EXTENSION_REGEXP = new RegExp(`\\.(${enumToList(IMAGE_TYPES).join('|')})`, 'i');

export const FALLBACK_URL = 'assets/error.png';

export const THUMBNAIL_SUFFIX = '_thumb';
