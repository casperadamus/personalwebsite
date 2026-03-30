import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contacts.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const serviceID = 'service_v9cp7pj';
    const templateID = 'template_slnrbij';
    const userID = 'AX87zizp7a2qcvEoi';

    emailjs
      .send(serviceID, templateID, {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      }, userID)
      .then(() => {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => {
        setSubmitStatus('error');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="container">
      <h1>Contact</h1>
      <p>
        Feel free to reach out via email at{' '}
        <a href="mailto:adamus.casper@gmail.com">adamus.casper@gmail.com</a>{' '}
        or call <a href="tel:8605184081">(860) 518-4081</a>.
      </p>
      <p className="muted">Connecticut, USA · Mon–Fri 9am–5pm EST</p>

      <div className="section">
        <h2 className="section-title">send a message</h2>

        {submitStatus === 'success' && (
          <p style={{ color: '#2d7d2d' }}>
            Thank you! Your message has been sent successfully.
          </p>
        )}
        {submitStatus === 'error' && (
          <p style={{ color: '#c33' }}>
            Something went wrong. Please try again later.
          </p>
        )}

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="How can I help?"
              rows="5"
            />
          </div>
          <button type="submit" className="send-btn" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send'}
          </button>
        </form>
      </div>

      <div className="section">
        <h2 className="section-title">connect</h2>
        <ul>
          <li>
            <a href="https://github.com/casperadamus" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/casperadamus" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
