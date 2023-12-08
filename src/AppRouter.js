// Routes.js (now AppRouter.js)
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import SignIn from './SignIn';
import Home from './App';
import SignUp from './SignUp';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/SignUp" element={<SignUp />} /> {/* Add this line */}
            <Route path="/" element={<Home />} />
        </Routes>
    );
};

const AppRouter = () => {
    return (
        <div>
            <NavBar />
            <AppRoutes />
        </div>
    );
};

export default AppRouter;