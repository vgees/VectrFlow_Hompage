// Navbar.js
import React from "react";
import "./Navbar.css"; // Import the main CSS file
import logoPath from "./public/flowise_logo.png"; // Adjust the path to your logo
import GoogleIcon from "./public/google.svg"; // Adjust the path to your Google icon
import GithubIcon from "./public/github.svg"; // Adjust the path to your GitHub icon
import EmailIcon from "./public/email.svg"; // Adjust the path to your email icon
const Navbar = () => {
    return (
        <div className="navbar">
            {/* Logo on the left */}
            <div className="logo-container">
                <img src={logoPath} alt="Logo" className="logo" />
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
                <div className="dropdown">
                    <button className="login-button" onClick={() => console.log("Login clicked")}>
                        Sign in
                    </button>
                    <div className="dropdown-content">
                        <a href="#email">
                            <img src={EmailIcon} alt="Email Icon" className="icon" />
                            email
                        </a>
                        <a href="#google">
                            <img src={GoogleIcon} alt="Google Icon" className="icon" />
                            Google
                        </a>

                        <a href="#github">
                            <img src={GithubIcon} alt="GitHub Icon" className="icon" />
                            GitHub
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Navbar;
