import {
  call, put, select,
} from 'redux-saga/effects';
import { useDispatch } from 'react-redux';
import {
  fetchDogDataFailure, addDogResults, updateOffset, changeLoading,
} from '../Redux/Dog/DogRedux';
import apiDogCall from '../api/dogs/apiDogCall';
import formatDogApiParams from '../api/dogs/helpers';

function* workFetchDog() {
  const getFilterValue = yield select((state) => state.reducer.dog.filters);
  const grabParam = yield formatDogApiParams({ filters: getFilterValue });
  const grabOffSet = yield select((state) => state.reducer.dog.offsetAmount);
  try {
    const oldResponse = yield select((state) => state.reducer.dog.results);
    const newResponse = yield call(apiDogCall, { offsetAmount: grabOffSet, parameters: grabParam });
    const finalResponse = [...oldResponse, ...newResponse];
    yield put(addDogResults(finalResponse));
    yield useDispatch(updateOffset(grabOffSet + 20));
    yield put(changeLoading(false));
  } catch (error) {
    yield put(fetchDogDataFailure(error));
    yield put(changeLoading(false));
  }
}

export default function* dogSaga() {
  yield workFetchDog();
}
