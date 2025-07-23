import React from 'react';
import './Footer.css'; // Assuming you have a CSS file for styling
export default function Footer() {
  return <footer>© {new Date().getFullYear()} Casper Adamus</footer>;
}