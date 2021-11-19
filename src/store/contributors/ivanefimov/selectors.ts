import { createSelector } from 'reselect';
import { RootState } from 'store/reducers';
import { IGalleryPageData } from './slice';

const selectGalleryPage = (state: RootState): IGalleryPageData => state.galleryPage;

export const selectIsLoading = createSelector(selectGalleryPage, galleryPage => galleryPage.isLoading);
export const selectError = createSelector(selectGalleryPage, galleryPage => galleryPage.error);
export const selectPhotos = createSelector(selectGalleryPage, galleryPage => galleryPage.photos);
export const selectPage = createSelector(selectGalleryPage, galleryPage => galleryPage.page);
export const selectHasMore = createSelector(selectGalleryPage, galleryPage => galleryPage.hasMore);
