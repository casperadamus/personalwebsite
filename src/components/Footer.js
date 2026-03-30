import './Footer.css';
import React from 'react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <hr />
        <p>© {new Date().getFullYear()} Casper Adamus</p>
      </div>
    </footer>
  );
}
