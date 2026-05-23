import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

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
              <Link to="/" onClick={handleNavClick}>
                Trinity Consultant
              </Link>
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
              <Link to="/" onClick={handleNavClick}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={handleNavClick}>
                About
              </Link>
            </li>
            <li>
              <Link to="/services" onClick={handleNavClick}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/team" onClick={handleNavClick}>
                Team
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={handleNavClick}>
                Contact
              </Link>
            </li>
            <li>
              <Link to="/careers" onClick={handleNavClick}>
                Careers
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;