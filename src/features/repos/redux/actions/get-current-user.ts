import { GetCurrentUserByUsernameActionTypes, GetCurrentUserByUsernameInput, GetCurrentUserByUsernameRes, GET_CURRENT_USER_BY_USERNAME, GET_CURRENT_USER_BY_USERNAME_ERROR, GET_CURRENT_USER_BY_USERNAME_SUCCESS } from "../action-types";


  export const getCurrentUserByUsernameAction = (payload: GetCurrentUserByUsernameInput): GetCurrentUserByUsernameActionTypes => (
    {
    type: GET_CURRENT_USER_BY_USERNAME,
    payload,
  }
  );

  export const getCurrentUserByUsernameSuccessAction = (payload: GetCurrentUserByUsernameRes):GetCurrentUserByUsernameActionTypes => ({
    type: GET_CURRENT_USER_BY_USERNAME_SUCCESS,
    payload,
  });
  
  export const getCurrentUserByUsernameErrorAction = (payload: string):GetCurrentUserByUsernameActionTypes => ({
    type: GET_CURRENT_USER_BY_USERNAME_ERROR,
    payload,
  });
  