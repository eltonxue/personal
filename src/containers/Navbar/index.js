import React from 'react';
import logo from '../../assets/logo.svg';
import './styles.css';

const Navbar = props => {
  return (
    <div className="navbar">
      <div className="navbar-logo-container">
        <img className="navbar-logo" src={logo} />
      </div>
      <div className="navbar-items-container">
        <div className="navbar-item">Portfolio</div>
        <div className="navbar-item">About</div>
        <div className="navbar-item">Resume</div>
      </div>
    </div>
  );
};

export default Navbar;
