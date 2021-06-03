import { all, take } from 'redux-saga/effects';
import repoSaga from '../features/repos/redux/sagas';

import { APP_STARTED } from './actions';

export default function* rootSaga() { 
  yield take(APP_STARTED);
  yield all([repoSaga()]);
}
