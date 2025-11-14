import React from "react";
import "../assets/header.css";

function Header() {
  return (
    <header className="main-header">
      <div className="header-inner">
        {/* Logo */}
        <div className="header-logo">
          <img
            className="logo-image"
            src={process.env.PUBLIC_URL + "/images/Aptech.png"}
            alt="FPT Aptech Logo"
          />
          <img
            className="logo-image"
            src={process.env.PUBLIC_URL + "/images/FPT.png"}
            alt="FPT Aptech Logo"
          />
        </div>

        {/* Menu */}
        <nav className="header-nav">
          <a href="#about">About Us</a>
          <a href="#products">Products</a>
          <a href="#booking">Booking</a>
          <a href="#locations">Locations</a>
        </nav>

        {/* Buttons */}
        <div className="header-actions">
          <button className="btn btn-signin">Sign In</button>
          <button className="btn btn-signup">Sign Up</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
