import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

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
                <li><Link to="/services">Executive Search</Link></li>
                <li><Link to="/services">Technical Recruitment</Link></li>
                <li><Link to="/services">Contract Staffing</Link></li>
                <li><Link to="/services">Career Consulting</Link></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Company</h4>
              <ul>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/careers">Careers</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Legal</h4>
              <ul>
                <li><Link to="/privacy">Privacy Policy</Link></li>
                <li><Link to="/terms">Terms of Service</Link></li>
                <li><Link to="/cookie">Cookie Policy</Link></li>
                <li><Link to="/sitemap">Sitemap</Link></li>
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