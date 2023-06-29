import { Navbar, Nav, Button } from 'react-bootstrap';

export default function MyNavbar() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Button onClick="#" variant="link" href="#home">Movies</Button>
            <a>             |           </a>
            <Button onClick="#" variant="link" href="#features">TVPrograms</Button>
            <Button onClick="#" variant="link" href="#pricing">Populars</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
};
