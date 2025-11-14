import { useState, useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import logo from "../img/logo.jpg";

export default function Header() {
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShrink(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      bg="white"
      className={`shadow-sm ${shrink ? "navbar-shrink" : ""}`}
    >
      <Container>

        {/* Logo */}
        <Navbar.Brand>
          <NavLink to="/" className="nav-link-custom d-flex align-items-center">
            <img
              src={logo}
              height={shrink ? 26 : 32}
              className="me-2 logo-transition"
              alt="logo"
            />
            FPT Aptech
          </NavLink>
        </Navbar.Brand>

        {/* Toggle button */}
        <Navbar.Toggle aria-controls="main-navbar" />

        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto me-3">
            <NavLink to="/about" className="nav-link fw-bold mx-2">
              About Us
            </NavLink>
            <NavLink to="/products" className="nav-link fw-bold mx-2">
              Products
            </NavLink>
            <NavLink to="/booking" className="nav-link fw-bold mx-2">
              Booking
            </NavLink>
            <NavLink to="/locations" className="nav-link fw-bold mx-2">
              Locations
            </NavLink>
          </Nav>

          {/* Right buttons */}
          <button className="btn btn-outline-primary me-2">Sign In</button>
          <button className="btn btn-primary">Sign Up</button>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}
