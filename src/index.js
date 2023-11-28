import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import NavBar from './NavBar';
import './Navbar.css'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
