import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <div className="section-header">
          <h2 id="contact-title">Get In Touch</h2>
          <p className="section-subtitle">
            Have a question or ready to find your next opportunity? Contact us today.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            
            <div className="info-item">
              <h4>Address</h4>
              <p>
                Trinity Consultant<br />
                123 Business Avenue<br />
                New York, NY 10001<br />
                United States
              </p>
            </div>

            <div className="info-item">
              <h4>Email</h4>
              <p>
                <a href="mailto:info@trinityconsultant.com">
                  info@trinityconsultant.com
                </a>
              </p>
            </div>

            <div className="info-item">
              <h4>Phone</h4>
              <p>
                <a href="tel:+12125551234">
                  +1 (212) 555-1234
                </a>
              </p>
            </div>

            <div className="info-item">
              <h4>Business Hours</h4>
              <p>
                Monday - Friday: 9:00 AM - 6:00 PM<br />
                Saturday: 10:00 AM - 4:00 PM<br />
                Sunday: Closed
              </p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} aria-label="Contact form">
            {submitted && (
              <div className="success-message" role="alert">
                ✓ Thank you! We'll get back to you soon.
              </div>
            )}

            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                aria-required="true"
                placeholder="Your Name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                aria-required="true"
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 000-0000"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                aria-required="true"
                placeholder="How can we help?"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                aria-required="true"
                placeholder="Your message here..."
                rows="5"
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary" aria-label="Send contact form">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;