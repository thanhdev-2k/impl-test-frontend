
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { Container } from './commons/styled';
import ReposPageIndex from './features/repos/pages';
import { appStart } from './redux/actions';


function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(appStart());
    // eslint-disable-next-line
  }, []);

  return (
     <Container >
       <ReposPageIndex />
       </Container>
  );
}

export default App;
