import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/reducers';
import { GetListStagazerInput } from '../redux/action-types';
import { getListStargazerAction } from '../redux/actions';




const useGetListStargazer = () => {
  const loading = useSelector<RootState>((state) => state.reposState.stargazer.loading) as boolean;
  const data = useSelector<RootState>((state) => state.reposState.stargazer.data) as  any[] ;

  const dispatch = useDispatch();

  const onGetListStargazer = useCallback((data: GetListStagazerInput) => {
    dispatch(getListStargazerAction(data));
  },
  // eslint-disable-next-line
  []);

  return {
    onGetListStargazer,
    loading,
    data,
  };
};

export default useGetListStargazer;
