import { GetListStagazerInput, GetListStargazerActionTypes, GetListStargazerRes, GET_LIST_STARGAZERS, GET_LIST_STARGAZERS_ERROR, GET_LIST_STARGAZERS_SUCCESS } from "../action-types";

  export const getListStargazerAction = (payload:GetListStagazerInput): GetListStargazerActionTypes => (
    {
    type: GET_LIST_STARGAZERS,
    payload
  }
  );

  export const getListStargazerSuccessAction = (payload: GetListStargazerRes):GetListStargazerActionTypes => ({
    type: GET_LIST_STARGAZERS_SUCCESS,
    payload,
  });
  
  export const getListStargazerErrorAction = (payload: string):GetListStargazerActionTypes => ({
    type: GET_LIST_STARGAZERS_ERROR,
    payload,
  });
  