import { call, put, SagaReturnType, select, takeEvery } from 'redux-saga/effects';

import { galleryPageActions } from './actions';
import { apiGetPhotos } from './api-get-photos';
import { selectPage } from './selectors';

export default function* gpFetchPageWatcher(): Generator {
  yield takeEvery(galleryPageActions.fetchPage, gpFetchPageFlow);
}

type PhotosSagaReturn = SagaReturnType<typeof apiGetPhotos>;
type PageSelectorReturn = SagaReturnType<typeof selectPage>;

function* gpFetchPageFlow() {
  try {
    yield put(galleryPageActions.setIsLoading(true));
    const page: PageSelectorReturn = yield select(selectPage);
    const photos: PhotosSagaReturn = yield call(apiGetPhotos, page);
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
