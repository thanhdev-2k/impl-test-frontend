import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/reducers';
import { GetReposByUsernameInput } from '../redux/action-types';
import { getReposByUsernameAction } from '../redux/actions';




const useGetRepoByUserName = () => {
  const loading = useSelector<RootState>((state) => state.reposState.listRepo.loading) as boolean;
  const data = useSelector<RootState>((state) => state.reposState.listRepo.data) as  any[] ;
  const userName = useSelector<RootState>((state) => state.reposState.listRepo.userName) as  string ;
  const dispatch = useDispatch();

  const onGetRepoByUserName = useCallback((data: GetReposByUsernameInput) => {

    dispatch(getReposByUsernameAction(data));
  },
  // eslint-disable-next-line
  []);

  return {
    onGetRepoByUserName,
    loading,
    data,
    userName
  };
};

export default useGetRepoByUserName;
