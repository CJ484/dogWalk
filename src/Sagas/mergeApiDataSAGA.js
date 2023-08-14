import { put, select, takeLatest } from 'redux-saga/effects';
import { sample } from 'lodash';
import nameSaga from './nameSaga';
import dogSaga from './dogSaga';
import { addDogResults, changeLoading } from '../Redux/Dog/DogRedux';

function* fetchApiData() {
  yield nameSaga();
  yield dogSaga();
}

function* workMergeApiDatas() {
  const dogsData = yield select((state) => state.reducer.dog.results);
  const namesData = yield select((state) => state.reducer.names.results);
  const combinedList = dogsData.map((dg) => {
    const Names = sample(namesData);
    return { ...dg, nameDog: Names };
  });
  yield put(addDogResults(combinedList));
  yield put(changeLoading(false));
}

function* mergeTime() {
  yield fetchApiData();
  yield workMergeApiDatas();
}

function* watchAction() {
  yield takeLatest('nameResults/fetchNameDataStart', mergeTime);
}

export default function* mergeApiSAGA() {
  yield watchAction();
}
