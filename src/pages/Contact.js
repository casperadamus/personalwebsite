// src/pages/Contact.js
import React, { useState } from 'react';


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
    alert('Thank you for your message!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-page">
      <h1>Contact Me</h1>
      
      <div className="contact-methods">
        <section className="contact-form">
          <h2>Send a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </section>
        
        <section className="direct-contact">
          <h2>Direct Contact</h2>
          <p>Email: <a href="mailto:adamus.casper@gmail.com">adamus.casper@gmail.com</a></p>
          <p>Phone: [860-518-4081]</p>
          <div className="social-media">
            {/* Add your social media links here */}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contact;