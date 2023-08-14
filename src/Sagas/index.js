import mergeApiSaga from './mergeApiDataSaga';

export default function* rootSaga() {
  yield mergeApiSaga();
}
