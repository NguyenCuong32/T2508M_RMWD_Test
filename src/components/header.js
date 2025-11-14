import React, { useState, useCallback } from "react";
import "../assets/header.css";
import AuthModal from "./auth-modal";

function Header() {
  const [authModal, setAuthModal] = useState({ open: false, mode: "signin" });

  const openModal = useCallback((mode) => {
    setAuthModal({ open: true, mode });
  }, []);

  const closeModal = useCallback(() => {
    setAuthModal((prev) => ({ ...prev, open: false }));
  }, []);

  return (
    <>
      <header className="main-header">
        <div className="header-inner">
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
          <nav className="header-nav">
            <a href="#about">About Us</a>
            <a href="#products">Products</a>
            <a href="#booking">Booking</a>
            <a href="#locations">Locations</a>
          </nav>

          <div className="header-actions">
            <button className="btn btn-signin" onClick={() => openModal("signin")}>
              Sign In
            </button>
            <button className="btn btn-signup" onClick={() => openModal("signup")}>
              Sign Up
            </button>
          </div>
        </div>
      </header>

      <AuthModal open={authModal.open} mode={authModal.mode} onClose={closeModal} />
    </>
  );
}

export default Header;
