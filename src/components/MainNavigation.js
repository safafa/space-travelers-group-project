import {
  Navbar, Container, Nav, Image,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../assets/logo.png';
import '../css/MainNavigation.css';

const MainNavigation = () => (
  <Navbar bg="white">
    <Container>
      <Navbar.Brand href="/rockets">
        <Image src={logo} width="40" height="40" alt="Space Travelers' logo" />
        <span className="fs-2">Space Travelers&apos; Hub</span>
      </Navbar.Brand>
      <Nav className="ms-auto">
        <LinkContainer to="/rockets" activeClassName="active"><span className="nav-link me-3">Rockets</span></LinkContainer>
        <LinkContainer to="/missions" activeClassName="active"><span className="nav-link me-3">Missions</span></LinkContainer>
        <LinkContainer to="/my-profile" activeClassName="active"><span className="nav-link me-3">My Profile</span></LinkContainer>
      </Nav>
    </Container>
  </Navbar>
);

export default MainNavigation;
