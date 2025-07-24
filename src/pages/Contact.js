import React, { useState } from 'react';
import './Contact.css'; // Make sure to create this CSS file

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-page">
      <h1>Get in Touch</h1>
      
      <div className="contact-methods">
        <section className="contact-form">
          <h2>Send a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
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
                placeholder="your.email@example.com"
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
                placeholder="How can I help you?"
              />
            </div>
            
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </section>
        
        <section className="direct-contact">
          <h2>Direct Contact</h2>
          <div className="contact-info">
            <p>
              <span>📧</span>
              <a href="mailto:adamus.casper@gmail.com">adamus.casper@gmail.com</a>
            </p>
            <p>
              <span>📞</span>
              <a href="tel:8605184081">(860) 518-4081</a>
            </p>
            <p>
              <span>📍</span>
              Connecticut, USA
            </p>
          </div>
          
          <div className="availability">
            <h3>Availability</h3>
            <p>Monday-Friday: 9am - 5pm EST</p>
            <p>Weekends: Limited availability</p>
          </div>
          
          <div className="social-links">
            <h3>Connect</h3>
            <div className="social-icons">
              <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
                <span>GitHub</span>
              </a>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contact;