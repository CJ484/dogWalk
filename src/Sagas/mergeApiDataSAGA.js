import { put, select, takeLatest } from 'redux-saga/effects';
import { sample } from 'lodash';
import nameSAGA from './nameSAGA';
import DogSAGA from './DogSAGA';
import { addDogResults, changeLoading } from '../Redux/Dog/DogResultsRedux';

function* grabData() {
  yield nameSAGA();
  yield DogSAGA();
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
  yield grabData();
  yield workMergeApiDatas();
}

function* watchAction() {
  yield takeLatest('nameResults/fetchNameDataStart', mergeTime);
}

export default function* mergeApiSAGA() {
  yield watchAction();
}
