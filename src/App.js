import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getRockets } from './redux/Rockets/rockets';
import MainNavigation from './components/MainNavigation';
import Missions from './pages/Missions';
import MyProfile from './pages/MyProfile';
import Rockets from './pages/Rockets';

function App() {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rocketsReducer);

  useEffect(() => {
    dispatch(getRockets());
  }, []);

  return (
    <Container>
      <MainNavigation />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/rockets" />
        </Route>
        <Route path="/rockets">
          <Rockets rockets={rockets} />
        </Route>
        <Route path="/missions">
          <Missions />
        </Route>
        <Route path="/my-profile">
          <MyProfile rockets={rockets} />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
