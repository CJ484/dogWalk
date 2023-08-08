import {
  call, put, select,
} from 'redux-saga/effects';
import { useDispatch } from 'react-redux';
import { fetchDogDataFailure, fetchDogDataSuccess } from '../Redux/DogResults/DogResultsRedux';
import apiDogCall from '../api/dogs/ApiDogCall';
import { updateOffset } from '../Redux/UrlConstruct/UrlConstrucRedux';

function* workFetchDog() {
  const grabParam = yield select((state) => state.reducer.urlConst.parameters);
  const grabOffSet = yield select((state) => state.reducer.urlConst.offsetAmount);
  try {
    const oldResponse = yield select((state) => state.reducer.dogResults.results);
    const newResponse = yield call(apiDogCall, { offsetAmount: grabOffSet, parameters: grabParam });
    const finalResponse = [...oldResponse, ...newResponse];
    yield put(fetchDogDataSuccess(finalResponse));
    yield useDispatch(updateOffset(grabOffSet + 20));
  } catch (error) {
    yield put(fetchDogDataFailure(error));
  }
}

export default function* DogSAGA() {
  yield workFetchDog();
}
