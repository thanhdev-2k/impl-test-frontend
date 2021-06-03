

export const GET_CURRENT_USER_BY_USERNAME = 'GET_CURRENT_USER_BY_USERNAME';
export const GET_CURRENT_USER_BY_USERNAME_SUCCESS = 'GET_CURRENT_USER_BY_USERNAME_SUCCESS';
export const GET_CURRENT_USER_BY_USERNAME_ERROR = 'GET_CURRENT_USER_BY_USERNAME_ERROR';

export interface GetCurrentUserByUsernameInput{
  userName: string;
}

export interface GetCurrentUserByUsernameState {
  loading: boolean;
  data: any
 
}

export interface GetCurrentUserByUsernameRes{
    data: any
}

export interface GetCurrentUserByUsernameAction {
  type: typeof GET_CURRENT_USER_BY_USERNAME;
  payload: GetCurrentUserByUsernameInput;
}

export interface GetCurrentUserByUsernameActionSuccess {
  type: typeof GET_CURRENT_USER_BY_USERNAME_SUCCESS;
  payload: GetCurrentUserByUsernameRes;
}

export interface GetCurrentUserByUsernameActionError {
  type: typeof GET_CURRENT_USER_BY_USERNAME_ERROR;
  payload: string;
}

export type GetCurrentUserByUsernameActionTypes = GetCurrentUserByUsernameAction | GetCurrentUserByUsernameActionSuccess | GetCurrentUserByUsernameActionError;
