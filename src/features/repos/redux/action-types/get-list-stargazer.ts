

export const GET_LIST_STARGAZERS = 'GET_LIST_STARGAZERS';
export const GET_LIST_STARGAZERS_SUCCESS = 'GET_LIST_STARGAZERS_SUCCESS';
export const GET_LIST_STARGAZERS_ERROR = 'GET_LIST_STARGAZERS_ERROR';


export interface GetListStagazerInput{
    url:string
}

export interface GetListStargazerState {
  loading: boolean;
  data: any;
  url:string
}

export interface GetListStargazerRes{
    data: any
}

export interface GetListStargazerAction {
  type: typeof GET_LIST_STARGAZERS;
  payload:GetListStagazerInput
}

export interface GetListStargazerSuccessAction {
  type: typeof GET_LIST_STARGAZERS_SUCCESS;
  payload: GetListStargazerRes;
}

export interface GetListStargazerActionError {
  type: typeof GET_LIST_STARGAZERS_ERROR;
  payload: string;
}

export type GetListStargazerActionTypes = GetListStargazerAction | GetListStargazerSuccessAction | GetListStargazerActionError;
