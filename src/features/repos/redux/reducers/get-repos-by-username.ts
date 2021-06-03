import { GetReposByUsernameActionTypes, GetReposByUsernameState, GET_REPOS_BY_USERNAME, GET_REPOS_BY_USERNAME_ERROR, GET_REPOS_BY_USERNAME_SUCCESS } from "../action-types";

  const initialState = {
    data:[],
    loading: false,
    userName:''
  };
   // eslint-disable-next-line
  export default (state = initialState, action: GetReposByUsernameActionTypes): GetReposByUsernameState => {
    switch (action.type) {
      case GET_REPOS_BY_USERNAME:
      
      if(action.payload.userName !== state.userName){
        return {
          ...state,
          data:[],
          loading:true,
          userName:action.payload.userName
        }
      }
       return {
        ...state,
        loading: true,
        userName:action.payload.userName
       }
        
      case GET_REPOS_BY_USERNAME_SUCCESS:
        const _data= [...state.data]
        return {
          ...state,
          data:[..._data, ...action.payload as any],
          loading: false,
        };
      case GET_REPOS_BY_USERNAME_ERROR:
        return {
          ...state,
          loading: false,
          data:[]
        };
      default:
        return state;
    }
  };
  