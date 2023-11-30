// Navbar.js
import React from "react";
import "./Navbar.css"; // Import the main CSS file
import logoPath from "./public/flowise_logo.png"; // Adjust the path to your logo


const Navbar = () => {
    return (
        <div className="navbar">
            {/* Logo on the left */}
            <div className="logo-container">
                <img
                    src={logoPath}
                    alt="Logo"
                    className="logo"
                />
            </div>

            {/* Links beside the logo */}
            <div className="links-container">
                <a href="/about" className="navbar-link">
                    About Us
                </a>
                <a href="/documentation" className="navbar-link">
                    Documentation
                </a>
            </div>

            {/* Buttons on the right */}
            <div className="buttons-container">
                <button className="login-button" onClick={() => console.log("Login clicked")}>
                    Sign in
                </button>
                <button className="signup-button" onClick={() => console.log("Signup clicked")}>
                    Sign up
                </button>
            </div>
        </div>
    );
};

export default Navbar;
