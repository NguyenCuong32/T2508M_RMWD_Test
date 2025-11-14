import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="https://aptech.fpt.edu.vn/wp-content/uploads/2025/01/logo-aptech26-nam_759x480.png" alt="FPT Aptech Logo" />
      </div>
      <nav className="nav-menu">
        <ul>
          <li><a href="#about">About Us</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#booking">Booking</a></li>
          <li><a href="#locations">Locations</a></li>
        </ul>
      </nav>
      <div className="auth-buttons">
        <button className="btn-signin">Sign In</button>
        <button className="btn-signup">Sign Up</button>
      </div>
    </header>
  );
}

export default Header;