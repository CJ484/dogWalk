import mergeApiSaga from './mergeApiData';

export default function* rootSaga() {
  yield mergeApiSaga();
}
