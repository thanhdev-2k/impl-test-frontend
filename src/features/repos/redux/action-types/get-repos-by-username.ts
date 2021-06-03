

export const GET_REPOS_BY_USERNAME = 'GET_REPOS_BY_USERNAME';
export const GET_REPOS_BY_USERNAME_SUCCESS = 'GET_REPOS_BY_USERNAME_SUCCESS';
export const GET_REPOS_BY_USERNAME_ERROR = 'GET_REPOS_BY_USERNAME_ERROR';

export enum RepoStatus{
    PUBLIC='public',
    PRIVATE='private'
}

export interface GetReposByUsernameInput{
  userName: string;
  page_index:number
}

export interface GetReposByUsernameState {
  loading: boolean;
  data: any;
  userName:string
 
}

export interface GetReposByUsernameRes{
    data: any
}

export interface GetReposByUsernameAction {
  type: typeof GET_REPOS_BY_USERNAME;
  payload: GetReposByUsernameInput;
}

export interface GetReposByUsernameActionSuccess {
  type: typeof GET_REPOS_BY_USERNAME_SUCCESS;
  payload: GetReposByUsernameRes;
}

export interface GetReposByUsernameActionError {
  type: typeof GET_REPOS_BY_USERNAME_ERROR;
  payload: string;
}

export type GetReposByUsernameActionTypes = GetReposByUsernameAction | GetReposByUsernameActionSuccess | GetReposByUsernameActionError;
