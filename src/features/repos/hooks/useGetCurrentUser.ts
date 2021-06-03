import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/reducers';
import { GetCurrentUserByUsernameInput } from '../redux/action-types';
import { getCurrentUserByUsernameAction } from '../redux/actions';




const useGetCurrentUserByUserName = () => {
  const loading = useSelector<RootState>((state) => state.reposState.user.loading) as boolean;
  const total_public_repos = useSelector<RootState>((state) => state.reposState.user.data.public_repos) as  number ;
  
  const dispatch = useDispatch();

  const onGetCurrentUserByUserName = useCallback((data: GetCurrentUserByUsernameInput) => {

    dispatch(getCurrentUserByUsernameAction(data));
  },
  // eslint-disable-next-line
  []);

  return {
    onGetCurrentUserByUserName,
    loading,
    total_public_repos
  };
};

export default useGetCurrentUserByUserName;
