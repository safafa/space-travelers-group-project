import {
  Navbar, Container, Nav, Image,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../assets/logo.png';
import '../css/MainNavigation.css';

const MainNavigation = () => (
  <Navbar bg="light">
    <Container>
      <Navbar.Brand href="#home">
        <Image src={logo} width="30" height="30" alt="Space Travelers' logo" />
        <span className>Space Travelers&apos; Hub</span>
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
