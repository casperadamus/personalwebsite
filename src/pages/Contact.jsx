import React from 'react';

function Contact() {
  return (
    <div className="container">
      <h1 className="page-title">Contact</h1>
      <p className="page-sub">The best way to reach me is by email.</p>

      <div className="section">
        <div className="contact-block">
          <div className="contact-row">
            <span className="contact-label">email</span>
            <a href="mailto:adamus.casper@gmail.com" className="contact-val">
              adamus.casper@gmail.com
            </a>
          </div>
          <div className="contact-row">
            <span className="contact-label">github</span>
            <a
              href="https://github.com/casperadamus"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-val"
            >
              github.com/casperadamus
            </a>
          </div>
          <div className="contact-row">
            <span className="contact-label">linkedin</span>
            <a
              href="https://linkedin.com/in/casperadamus"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-val"
            >
              linkedin.com/in/casperadamus
            </a>
          </div>
          <div className="contact-row">
            <span className="contact-label">location</span>
            <span className="contact-val contact-plain">Hartford, CT — U.S. Citizen</span>
          </div>
          <div className="contact-row">
            <span className="contact-label">status</span>
            <span className="contact-val contact-plain">
              <span className="status-dot"></span>
              open to opportunities
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
