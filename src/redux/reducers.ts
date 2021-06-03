import { combineReducers } from 'redux';
import reposState,{ RepoModuleState } from '../features/repos/redux/reducers';


export interface RootState {
 reposState:RepoModuleState
}

export default combineReducers<RootState>({
  reposState
});
