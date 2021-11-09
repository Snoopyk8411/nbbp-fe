import { IPhoto } from 'layout/contributors/ivanefimov/interfaces';
import { RootState } from 'store/reducers';

export const isLoadingSelector = (state: RootState): boolean => state.galleryPage.isLoading;
export const errorSelector = (state: RootState): Error | undefined => state.galleryPage.error;
export const photosSelector = (state: RootState): IPhoto[] => state.galleryPage.photos;
export const pageSelector = (state: RootState): number => state.galleryPage.page;
export const hasMoreSelector = (state: RootState): boolean => state.galleryPage.hasMore;
