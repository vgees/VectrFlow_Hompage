// import React, { useState } from "react";
// import logo from ".//public/flowise_logo.png";
// import "./Navbar.css";
// import {
//     Collapse,
//     Container,
//     Navbar,
//     NavbarToggler,
//     NavbarBrand,
//     Nav,
//     NavItem,
//     Button,
// } from "reactstrap";

// const NavBar = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const toggle = () => setIsOpen(!isOpen);

//     return (
//         <div className="nav-container">
//             <Navbar color="light" light expand="md" container={false}>
//                 <Container>
//                     <NavbarBrand>
//                         <img
//                             src={logo}
//                             alt="Your Logo"
//                             width="180"
//                             style={{ marginLeft: "-107px" }}
//                         />
//                     </NavbarBrand>

//                     <NavbarToggler onClick={toggle} />
//                     <Collapse isOpen={isOpen} navbar>
//                         <Nav className="ml-auto" navbar>
//                             {/* Remove NavLink components */}
//                         </Nav>
//                         <Nav className="d-none d-md-block" navbar>
//                             <NavItem>
//                                 <Button
//                                     id="qsLoginBtn"
//                                     color="primary"
//                                     className="btn-margin move-right"
//                                     onClick={() => console.log("Login clicked")}
//                                 >
//                                     Log in
//                                 </Button>
//                             </NavItem>
//                         </Nav>
//                         <Nav className="d-md-none" navbar>
//                             <NavItem>
//                                 <Button
//                                     id="qsLoginBtn"
//                                     color="primary"
//                                     block
//                                     onClick={() => console.log("Login clicked")}
//                                 >
//                                     Log in
//                                 </Button>
//                             </NavItem>
//                         </Nav>
//                     </Collapse>
//                 </Container>
//             </Navbar>
//         </div>
//     );
// };

// export default NavBar;
import React from "react";
import "./Navbar.css"; // Import the CSS file
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

            {/* Login button on the right */}
            <div className="login-container">
                <button className="login-button" onClick={() => console.log("Login clicked")}>
                    Login
                </button>
            </div>
        </div>
    );
};

export default Navbar;
