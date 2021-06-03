



import { put } from 'redux-saga/effects';
import { GetReposByUsernameAction, GetReposByUsernameRes } from "../action-types";
import *  as apis from '../../../services/apis'
import { getReposByUsernameErrorAction, getReposByUsernameSuccessAction } from '../actions';

export function* getReposByUsernameSaga(action: GetReposByUsernameAction) {
  try {
    const res: GetReposByUsernameRes = yield apis.getRepoByUserNameApi(action.payload);
    yield put(getReposByUsernameSuccessAction(res));
  } catch (error) {
    yield put(getReposByUsernameErrorAction(error?.message));
  }
}

