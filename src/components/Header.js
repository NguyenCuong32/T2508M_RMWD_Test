import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold">
          FPT Aptech
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/About">About us</Nav.Link>
            <Nav.Link as={Link} to="/Product">Products</Nav.Link>
             <Nav.Link as={Link} to="/Booking">Booking</Nav.Link>
              <Nav.Link as={Link} to="/Location">Location</Nav.Link>
          </Nav>
          <Nav>
            <Button variant="warning" className="me-2 px-4">Sign In</Button>
            <Button variant="outline-light" className="px-4">Sign up</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
