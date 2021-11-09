import { IPhoto } from 'layout/contributors/ivanefimov/interfaces';
import { call, put, takeEvery } from 'redux-saga/effects';
import { galleryPageActions } from './actions';
import { apiLoadPhotos } from './api-load-photos';

export default function* ieLoadPhotosPageWatcher(): Generator {
  yield takeEvery(galleryPageActions.fetchPage, ieLoadPhotosPageFlow);
}

function* ieLoadPhotosPageFlow() {
  try {
    yield put(galleryPageActions.setIsLoading(true));
    const photos = (yield call(apiLoadPhotos)) as IPhoto[];
    if (photos.length) {
      yield put(galleryPageActions.setNextPage());
      yield put(galleryPageActions.addPage(photos));
    } else {
      yield put(galleryPageActions.setHasMore(false));
    }
  } catch (error: any) {
    yield put(galleryPageActions.setError(error as Error));
  } finally {
    yield put(galleryPageActions.setIsLoading(false));
  }
}
