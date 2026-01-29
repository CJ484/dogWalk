import {
  call, put, select,
} from 'redux-saga/effects';
import {
  fetchDogDataFailure, addDogResults, updateOffset, changeLoading,
} from '@/Redux/dog/index';
import apiDogCall from '@/api/dogs';
import formatDogApiParams from '@/api/dogs/helpers';
import { RootState } from '@/Redux/MiddleWare/index';

function* workFetchDog() {
  const getFilterValue: ReturnType<typeof select> = yield select((state: RootState) => state.reducer.dog.filters);
  const grabParam: string = yield formatDogApiParams({ filters: getFilterValue });
  const grabOffSet: number = yield select((state: RootState) => state.reducer.dog.offsetAmount);
  try {
    const oldResponse: any[] = yield select((state: RootState) => state.reducer.dog.results);
    const newResponse: any[] = yield call(apiDogCall, { offsetAmount: grabOffSet, parameters: grabParam });
    const finalResponse = [...oldResponse, ...newResponse];
    yield put(addDogResults(finalResponse));
    yield put(updateOffset(grabOffSet + 20));
    yield put(changeLoading(false));
  } catch (error) {
    yield put(fetchDogDataFailure(error as string));
    yield put(changeLoading(false));
  }
}

export default function* dogSaga() {
  yield workFetchDog();
}
