import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm fixed-top">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi4HabYtf6IDKmXBcXiGGNDHepQdpt9vu7YA&s"
            width="35"
            className="me-2"
            alt=""
          />
          FPT Aptech
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item"><a className="nav-link" href="#">About Us</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Products</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Booking</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Locations</a></li>
          </ul>

          <div className="ms-3">
            <button className="btn btn-outline-primary me-2">Sign In</button>
            <button className="btn btn-primary">Sign Up</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
