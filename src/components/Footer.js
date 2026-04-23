import './Footer.css';
import React from 'react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <hr />
        <div className="footer-row">
          <div className="footer-phi">
            <span className="footer-phi-sym">φ</span>
            <span className="footer-phi-eq"> = 1.618…</span>
          </div>
          <p className="footer-copy">© {new Date().getFullYear()} Casper Adamus</p>
          <p className="footer-stack">React · GitHub Pages</p>
        </div>
      </div>
    </footer>
  );
}
