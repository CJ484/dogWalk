import mergeApiSAGA from './mergeApiDataSAGA';

export default function* rootSaga() {
  yield mergeApiSAGA();
}
