// Navbar.js
import React from "react";
import "./Navbar.css"; // Import the main CSS file
import logoPath from "./public/flowise_logo.png";
import GoogleIcon from "./public/google.svg";
import GithubIcon from "./public/github.svg";
import EmailIcon from "./public/email.svg";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
const Navbar = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyDfFQfoNTzlnPlKfQD6APfBAeuFqBxbxvA",
        authDomain: "vectrflow-405411.firebaseapp.com",
      };
    
      // Initialize Firebase
      if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
      }
    
      const handleLoginGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
    
        firebase
          .auth()
          .signInWithPopup(provider)
          .then((result) => {
            const user = result.user;
            console.log("User signed in:", user);
            window.location.href = "https://beta.vectrflow.com/";
          })
          .catch((error) => {
            console.error("Error during sign in:", error);
          });
      }
      const handleLoginEmail = () => {
        const provider = new firebase.auth.EmailAuthProvider();
    
        firebase
          .auth()
          .signInWithPopup(provider)
          .then((result) => {
            const user = result.user;
            console.log("User signed in:", user);
            window.location.href = "https://beta.vectrflow.com/";
          })
          .catch((error) => {
            console.error("Error during sign in:", error);
          });
      }
      const handleLoginGithub = () => {
        const provider = new firebase.auth.GithubAuthProvider();
    
        firebase
          .auth()
          .signInWithPopup(provider)
          .then((result) => {
            const user = result.user;
            console.log("User signed in:", user);
            window.location.href = "https://beta.vectrflow.com/";
          })
          .catch((error) => {
            console.error("Error during sign in:", error);
          });
      }
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
                        <a href="#email" onClick={handleLoginEmail}>
                            <img src={EmailIcon} alt="Email Icon" className="icon" />
                            email
                        </a>
                        <a href="#google"  onClick={handleLoginGoogle}>
                            <img src={GoogleIcon} alt="Google Icon" className="icon"/>
                            Google
                        </a>

                        <a href="#github" onClick={handleLoginGithub}>
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
