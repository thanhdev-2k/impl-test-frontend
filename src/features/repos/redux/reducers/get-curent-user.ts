import { GetCurrentUserByUsernameActionTypes, GetCurrentUserByUsernameState, GET_CURRENT_USER_BY_USERNAME, GET_CURRENT_USER_BY_USERNAME_ERROR, GET_CURRENT_USER_BY_USERNAME_SUCCESS } from "../action-types";

const initialState = {
    data:{},
    loading: false,
  };
   // eslint-disable-next-line
  export default (state = initialState, action: GetCurrentUserByUsernameActionTypes): GetCurrentUserByUsernameState => {
    switch (action.type) {
      case GET_CURRENT_USER_BY_USERNAME:

        return {
          ...state,
          loading: true,
          
        };
      case GET_CURRENT_USER_BY_USERNAME_SUCCESS:
        return {
          ...state,
          data:action.payload,
          loading: false,
        };
      case GET_CURRENT_USER_BY_USERNAME_ERROR:
        return {
          ...state,
          loading: false,
          data:[]
        };
      default:
        return state;
    }
  };
  