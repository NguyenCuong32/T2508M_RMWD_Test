import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
// Đảm bảo bạn đã cài đặt react-bootstrap: npm install react-bootstrap bootstrap

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-white border-bottom" sticky="top">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <span className="fw-bold ms-2 text-warning">FPT Aptech</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto me-3">
            <Nav.Link as={NavLink} to="/">About Us</Nav.Link>
            <Nav.Link as={NavLink} to="/products">Products</Nav.Link>
            <Nav.Link as={NavLink} to="/booking">Booking</Nav.Link>
            <Nav.Link as={NavLink} to="/locations">Locations</Nav.Link>
          </Nav>
          <button className="btn btn-warning me-2 text-white">Sign In</button>
          <button className="btn btn-outline-primary">Sign Up</button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;