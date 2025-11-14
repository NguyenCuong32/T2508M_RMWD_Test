import React, { useEffect } from "react";
import "../assets/auth-modal.css";

export default function AuthModal({ open, mode, onClose }) {
  useEffect(() => {
    if (!open) return;
    const handleEsc = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [open, onClose]);

  if (!open) return null;

  const isSignIn = mode === "signin";
  const title = isSignIn ? "Sign In" : "Create Account";

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`${title} form submitted`);
    onClose();
  };

  return (
    <div className="auth-modal-backdrop" onClick={onClose}>
      <div
        className="auth-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="auth-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button className="auth-modal-close" onClick={onClose} aria-label="Close">
          ×
        </button>
        <h3 id="auth-modal-title">{title}</h3>
        <p className="auth-modal-subtitle">
          {isSignIn ? "Welcome back! Please sign in." : "Join us in a few quick steps."}
        </p>
        <form className="auth-modal-form" onSubmit={handleSubmit}>
          {!isSignIn && (
            <label className="auth-modal-field">
              <span>Full Name</span>
              <input type="text" name="fullName" required />
            </label>
          )}
          <label className="auth-modal-field">
            <span>Email</span>
            <input type="email" name="email" required />
          </label>
          <label className="auth-modal-field">
            <span>Password</span>
            <input type="password" name="password" required minLength={6} />
          </label>
          {!isSignIn && (
            <label className="auth-modal-field">
              <span>Confirm Password</span>
              <input type="password" name="confirmPassword" required minLength={6} />
            </label>
          )}
          <button type="submit" className="auth-modal-submit">
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
}
