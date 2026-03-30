import './Navbar.css';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="site-nav">
      <div className="nav-inner">
        <Link to="/" className="site-title">casper adamus</Link>
        <div className="nav-links">
          <Link to="/" className={isActive('/') ? 'active' : ''}>home</Link>
          <Link to="/about" className={isActive('/about') ? 'active' : ''}>about</Link>
          <Link to="/projects" className={isActive('/projects') ? 'active' : ''}>projects</Link>
          <Link to="/contact" className={isActive('/contact') ? 'active' : ''}>contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
