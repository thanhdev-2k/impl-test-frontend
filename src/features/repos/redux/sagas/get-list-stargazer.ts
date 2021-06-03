
import { put } from 'redux-saga/effects';
import * as apis from '../../../services/apis';
import { GetListStargazerAction, GetListStargazerRes } from "../action-types";
import { getListStargazerErrorAction, getListStargazerSuccessAction } from '../actions';

export function* getListStargazerSaga(action: GetListStargazerAction) {
  try {
    const res: GetListStargazerRes = yield apis.getListStargazerApi(action.payload.url);
    yield put(getListStargazerSuccessAction(res));
  } catch (error) {
    yield put(getListStargazerErrorAction(error?.message));
  }
}
