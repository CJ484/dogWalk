import { call, put } from 'redux-saga/effects';
import apiNameCall from '../api/name/apiNameCall';
import { fetchNameError, fetchNameSuccess } from '../Redux/Names/NamesRedux';

function* workNameFetch() {
  try {
    const response = yield call(apiNameCall);
    yield put(fetchNameSuccess(response));
  } catch (error) {
    yield put(fetchNameError(error));
  }
}

export default function* nameSAGA() {
  yield workNameFetch();
}
