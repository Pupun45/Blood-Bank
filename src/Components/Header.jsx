import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Logo from '../image/Logo.png';

const Header = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container container">
        <input type="checkbox" id="menu-toggle" />
        <label htmlFor="menu-toggle" className="hamburger-lines">
          <span className="line line1" />
          <span className="line line2" />
          <span className="line line3" />
        </label>
        <img
          src={Logo}
          alt="Logo"
          className="logo"
          style={{ height: 80, width: 80 }}
        />
        <ul className="menu-items">
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/About">About</Link></li>
          <li className="dropdown">
            <span className="dropdown-toggle">Blood</span>
            <ul className="dropdown-menu">
              <li><Link to="/Avalibality">Avalibality of Blood</Link></li>
              <li><Link to="/Doner">Donate Blood</Link></li>
              <li><Link to="/Request">Request For Blood</Link></li>
            </ul>
          </li>

          <li><Link to="/Galleary">Gallery</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
