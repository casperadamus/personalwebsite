import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contacts.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Replace these with your actual EmailJS credentials
    const serviceID = 'service_v9cp7pj';
    const templateID = 'template_slnrbij';
    const userID = 'AX87zizp7a2qcvEoi';

    emailjs.send(serviceID, templateID, {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message
    }, userID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((err) => {
        console.error('FAILED...', err);
        setSubmitStatus('error');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="contact-page">
      <h1>Get in Touch</h1>
      
      <div className="contact-methods">
        <section className="contact-form">
          <h2>Send a Message</h2>
          {submitStatus === 'success' && (
            <div className="alert success">
              Thank you! Your message has been sent successfully.
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="alert error">
              Oops! Something went wrong. Please try again later.
            </div>
          )}
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
                rows="5"
              />
            </div>
            
            <button 
              type="submit" 
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
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