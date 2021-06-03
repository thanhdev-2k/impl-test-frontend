import { all, takeLatest } from 'redux-saga/effects';
import { getReposByUsernameSaga } from './get-repos-by-username';
import * as actionTypes from '../action-types'
import { getCurrentUserByUsernameSaga } from './get-current-user';
import { getListStargazerSaga } from './get-list-stargazer';

export default function* repoSaga() {
  return all([
    yield takeLatest(actionTypes.GET_REPOS_BY_USERNAME, getReposByUsernameSaga) , 
    yield takeLatest(actionTypes.GET_CURRENT_USER_BY_USERNAME, getCurrentUserByUsernameSaga),
    yield takeLatest(actionTypes.GET_LIST_STARGAZERS,getListStargazerSaga) 
  ]) ;
}
