import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-section">
              <h3>Trinity Consultant</h3>
              <p>
                Leading recruitment firm connecting top talent with innovative companies 
                across industries.
              </p>
              <div className="social-links">
                <a href="#linkedin" aria-label="Follow us on LinkedIn">LinkedIn</a>
                <a href="#twitter" aria-label="Follow us on Twitter">Twitter</a>
                <a href="#facebook" aria-label="Follow us on Facebook">Facebook</a>
              </div>
            </div>

            <div className="footer-section">
              <h4>Services</h4>
              <ul>
                <li><a href="#executive-search">Executive Search</a></li>
                <li><a href="#technical-recruitment">Technical Recruitment</a></li>
                <li><a href="#contract-staffing">Contract Staffing</a></li>
                <li><a href="#career-consulting">Career Consulting</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Company</h4>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#careers">Careers</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Legal</h4>
              <ul>
                <li><a href="#privacy">Privacy Policy</a></li>
                <li><a href="#terms">Terms of Service</a></li>
                <li><a href="#cookie-policy">Cookie Policy</a></li>
                <li><a href="#sitemap">Sitemap</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {currentYear} Trinity Consultant. All rights reserved.</p>
          <p className="made-with">
            Made with ❤️ by Trinity Consultant Team
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;