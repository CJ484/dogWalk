import { call, put } from 'redux-saga/effects';
import apiNameCall from '@/api/name';
import { fetchNameError, fetchNameSuccess } from '@/Redux/names/index';

function* workNameFetch() {
  try {
    const response: string[] = yield call(apiNameCall);
    yield put(fetchNameSuccess(response));
  } catch (error) {
    yield put(fetchNameError(error as string));
  }
}

export default function* nameSaga() {
  yield workNameFetch();
}
