import { call, put, SagaReturnType, select, takeEvery } from 'redux-saga/effects';

import { galleryPageActions } from './actions';
import { apiLoadPhotos } from './api-load-photos';
import { selectPage } from './selectors';

export default function* gpLoadPhotosPageWatcher(): Generator {
  yield takeEvery(galleryPageActions.fetchPage, gpLoadPhotosPageFlow);
}

type PhotosSagaReturn = SagaReturnType<typeof apiLoadPhotos>;
type PageSelectorReturn = SagaReturnType<typeof selectPage>;

function* gpLoadPhotosPageFlow() {
  try {
    yield put(galleryPageActions.setIsLoading(true));
    const page: PageSelectorReturn = yield select(selectPage);
    const photos: PhotosSagaReturn = yield call(apiLoadPhotos, page);
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
