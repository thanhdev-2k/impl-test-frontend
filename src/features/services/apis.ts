import { apiGet } from '../../services/api-base';
import { GetReposByUsernameInput } from '../repos/redux/action-types';
import { GetCurrentUserByUsernameInput } from '../repos/redux/action-types/get-current-user';

import * as apiUrl from './url';


export const getRepoByUserNameApi = async (data:GetReposByUsernameInput ) => {
    return apiGet(apiUrl.API_GET_REPOS_BY_USERNAME+`${data.userName}/repos?page=${data.page_index}`)
}

export const  getCurrentUserByNameApi = async (data: GetCurrentUserByUsernameInput)=>{
    return apiGet(apiUrl.API_GET_REPOS_BY_USERNAME+`${data.userName}`)
}

export const getListStargazerApi =async(url:string)=>{
    return apiGet(url)
}