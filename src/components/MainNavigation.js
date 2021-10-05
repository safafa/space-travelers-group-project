import {
  Navbar, Container, Nav, Image,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../assets/logo.png';

const MainNavigation = () => (
  <Navbar bg="light">
    <Container>
      <Navbar.Brand href="#home">
        <Image src={logo} width="30" height="30" alt="Space Travelers' logo" />
        <span className>Space Travelers&apos; Hub</span>
      </Navbar.Brand>
      <Nav className="ms-auto">
        <LinkContainer to="/rockets"><span className="me-3">Rockets</span></LinkContainer>
        <LinkContainer to="/missions"><span className="me-3">Missions</span></LinkContainer>
        <LinkContainer to="/my-profile"><span className="me-3">My Profile</span></LinkContainer>
      </Nav>
    </Container>
  </Navbar>
);

export default MainNavigation;
