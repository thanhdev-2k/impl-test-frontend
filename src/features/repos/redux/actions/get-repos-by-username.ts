import {  GetReposByUsernameActionTypes, GetReposByUsernameInput, GetReposByUsernameRes, GET_REPOS_BY_USERNAME, GET_REPOS_BY_USERNAME_ERROR, GET_REPOS_BY_USERNAME_SUCCESS } from "../action-types";

  export const getReposByUsernameAction = (payload: GetReposByUsernameInput): GetReposByUsernameActionTypes => (
    {
    type: GET_REPOS_BY_USERNAME,
    payload,
  }
  );

  export const getReposByUsernameSuccessAction = (payload: GetReposByUsernameRes):GetReposByUsernameActionTypes => ({
    type: GET_REPOS_BY_USERNAME_SUCCESS,
    payload,
  });
  
  export const getReposByUsernameErrorAction = (payload: string):GetReposByUsernameActionTypes => ({
    type: GET_REPOS_BY_USERNAME_ERROR,
    payload,
  });
  