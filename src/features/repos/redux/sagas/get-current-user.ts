

import { message } from 'antd';
import { put } from 'redux-saga/effects';
import * as apis from '../../../services/apis';
import { GetCurrentUserByUsernameAction, GetCurrentUserByUsernameRes } from "../action-types";
import { getCurrentUserByUsernameErrorAction, getCurrentUserByUsernameSuccessAction } from '../actions';

export function* getCurrentUserByUsernameSaga(action: GetCurrentUserByUsernameAction) {
  try {
    const res: GetCurrentUserByUsernameRes = yield apis.getCurrentUserByNameApi(action.payload);
    yield put(getCurrentUserByUsernameSuccessAction(res));
  } catch (error) {
    yield put(getCurrentUserByUsernameErrorAction(error?.message));
    message.error(`Lỗi: ${error?.message}`, 3)
  }
}
