import { combineReducers } from "@reduxjs/toolkit";
import { GetCurrentUserByUsernameState, GetListStargazerState, GetReposByUsernameState } from "../action-types";
import listRepo from './get-repos-by-username'
import user from './get-curent-user'
import stargazer from './get-list-stargazer'
export interface RepoModuleState {
    listRepo:GetReposByUsernameState;
    user:GetCurrentUserByUsernameState;
    stargazer:GetListStargazerState;
  }
  
  export default combineReducers<RepoModuleState>({
    listRepo: listRepo,
    user:user,
    stargazer:stargazer
  });