import './Navbar.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="nav-container">
      <div className="nav-inner">
        <Link to="/" className="nav-logo" onClick={() => setMenuOpen(false)}>
          Casper Adamus
        </Link>

        <button 
          className="mobile-menu-btn" 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <Link 
            to="/" 
            className="nav-link" 
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="nav-link" 
            onClick={() => setMenuOpen(false)}
          >
            Journey
          </Link>
        
          <Link 
            to="/contact" 
            className="nav-link" 
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;