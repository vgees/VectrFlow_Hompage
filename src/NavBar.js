// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logoPath from "./public/flowise_logo.png";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/firestore';

const Navbar = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyDfFQfoNTzlnPlKfQD6APfBAeuFqBxbxvA",
    authDomain: "vectrflow-405411.firebaseapp.com",
  };

  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  return (
    <div className="navbar">
      {/* Logo on the left */}
      <div className="logo-container">
        <img src={logoPath} alt="Logo" className="logo" />
      </div>

      {/* Links beside the logo */}
      <div className="links-container">
        <Link to="/about" className="navbar-link">
          About Us
        </Link>
        <Link to="/documentation" className="navbar-link">
          Documentation
        </Link>
        <Link to="/pricing" className="navbar-link">
          Pricing
        </Link>
      </div>

      {/* Buttons on the right */}
      <div className="buttons-container">
        <Link to="/SignIn" className="login-button">
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
