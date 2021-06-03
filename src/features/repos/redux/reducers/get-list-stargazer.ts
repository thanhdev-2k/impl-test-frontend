import { GetListStargazerActionTypes, GetListStargazerState, GET_LIST_STARGAZERS, GET_LIST_STARGAZERS_ERROR, GET_LIST_STARGAZERS_SUCCESS } from "../action-types";

  const initialState = {
    data:[],
    loading: false,
    url:'',
  };
   // eslint-disable-next-line
  export default (state = initialState, action: GetListStargazerActionTypes): GetListStargazerState => {
    switch (action.type) {
      case GET_LIST_STARGAZERS: 
      if(action.payload.url !== state.url){
        return {
          ...state,
          data:[],
          loading:true,
          url:action.payload.url
        }
      }
       return {
        ...state,
        loading: true,
        url:action.payload.url
       }
      
      case GET_LIST_STARGAZERS_SUCCESS:
        const _data= [...state.data]
        return {
          ...state,
          data:[..._data , ...action.payload as any],
          loading: false,
        };
      case GET_LIST_STARGAZERS_ERROR:
        return {
          ...state,
          loading: false,
          data:[]
        };
      default:
        return state;
    }
  };
  