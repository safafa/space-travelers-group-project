import { Container } from 'react-bootstrap';
import { Route, Switch, Redirect } from 'react-router-dom';
import MainNavigation from './components/MainNavigation';
import Missions from './pages/Missions';
import MyProfile from './pages/MyProfile';
import Rockets from './pages/Rockets';

function App() {
  return (
    <Container>
      <MainNavigation />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/rockets" />
        </Route>
        <Route path="/rockets">
          <Rockets />
        </Route>
        <Route path="/missions">
          <Missions />
        </Route>
        <Route path="/my-profile">
          <MyProfile />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
