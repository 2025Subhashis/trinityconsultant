import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="header" role="banner">
      <nav className="navbar" aria-label="Main navigation">
        <div className="container navbar-content">
          <div className="logo">
            <h1>
              <a href="#home" onClick={handleNavClick}>
                Trinity Consultant
              </a>
            </h1>
          </div>
          
          <button
            className="mobile-menu-btn"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="nav-menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul 
            id="nav-menu"
            className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}
          >
            <li>
              <a href="#services" onClick={handleNavClick}>
                Services
              </a>
            </li>
            <li>
              <a href="#testimonials" onClick={handleNavClick}>
                Testimonials
              </a>
            </li>
            <li>
              <a href="#contact" onClick={handleNavClick}>
                Contact
              </a>
            </li>
            <li>
              <a href="#careers" onClick={handleNavClick}>
                Careers
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;