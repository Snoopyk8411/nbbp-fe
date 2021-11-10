import { createSelector } from 'reselect';
import { RootState } from 'store/reducers';

const selectGalleryPage = (state: RootState) => state.galleryPage;

export const selectIsLoading = createSelector(selectGalleryPage, gp => gp.isLoading);
export const selectError = createSelector(selectGalleryPage, gp => gp.error);
export const selectPhotos = createSelector(selectGalleryPage, gp => gp.photos);
export const selectPage = createSelector(selectGalleryPage, gp => gp.page);
export const selectHasMore = createSelector(selectGalleryPage, gp => gp.hasMore);
