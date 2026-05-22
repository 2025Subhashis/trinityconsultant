import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="container hero-content">
        <div className="hero-text">
          <h1 id="hero-title">
            Find Your Perfect Talent
          </h1>
          <p className="hero-subtitle">
            Trinity Consultant connects top-tier professionals with innovative companies. 
            Your success is our mission.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" aria-label="Find job opportunities">
              Browse Jobs
            </button>
            <button className="btn btn-secondary" aria-label="Post a job opening">
              Post a Job
            </button>
          </div>
        </div>
        <div className="hero-image" aria-hidden="true">
          <div className="hero-placeholder">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="60" r="30" fill="#2563eb" opacity="0.1"/>
              <path d="M70 100 Q100 120 130 100" stroke="#2563eb" strokeWidth="2" fill="none" opacity="0.3"/>
              <rect x="60" y="130" width="80" height="50" rx="5" fill="#2563eb" opacity="0.05" stroke="#2563eb" strokeWidth="2"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;