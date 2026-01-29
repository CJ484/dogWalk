import { put, select, takeLatest } from 'redux-saga/effects';
import { sample } from 'lodash';
import nameSaga from '../name';
import dogSaga from '../dog';
import { addDogResults, changeLoading } from '@/Redux/dog/index';
import { RootState } from '@/Redux/MiddleWare/index';

function* fetchApiData() {
  yield nameSaga();
  yield dogSaga();
}

// *Since I am combining the data from API this is to serve as the combiner

function* workMergeApiDatas() {
  const dogsData: any[] = yield select((state: RootState) => state.reducer.dog.results);
  const namesData: string[] = yield select((state: RootState) => state.reducer.names.results);
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
