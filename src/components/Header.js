import React from "react";
import "./Header.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
<nav className="navbar navbar-expand-lg bg-white px-4">
  <a className="navbar-brand d-flex align-items-center" href="#">
        <span className="fw-semibold">FPT APTECH</span>
  </a>

  <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#mainNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

  <div className="collapse navbar-collapse" id="mainNav">
        <ul className="navbar-nav mx-auto gap-4">
          <li className="nav-item"><a className="nav-link text-second" href="#">About Us</a></li>
          <li className="nav-item"><a className="nav-link text-secondary" href="#">Products</a></li>
          <li className="nav-item"><a className="nav-link text-secondary" href="#">Booking</a></li>
          <li className="nav-item"><a className="nav-link text-secondary" href="#">Locations</a></li>
        </ul>

        {/* Buttons */}
        <div className="d-flex gap-2">
          <button className="btn btn-warning text-white px-4">Sign In</button>
          <button className="btn signup-btn px-4">Sign Up</button>
        </div>
      </div>
</nav>
    );
};
export default Header;