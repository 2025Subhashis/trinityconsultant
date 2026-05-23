import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about" id="home" aria-labelledby="about-title">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 id="about-title">Welcome to Trinity Consultant</h2>
            <p className="lead">
              Connecting Top Talent with Innovative Companies Across Industries.
            </p>
            <p>
              At Trinity Consultant, we specialize in bridging the gap between exceptional 
              professionals and forward-thinking organizations. Our dedicated team of 
              recruiters leverages deep industry knowledge to ensure the perfect match 
              for every role, fostering growth and long-term success.
            </p>
            <a href="#contact" className="btn btn-primary">Get In Touch</a>
          </div>
          <div className="about-graphic">
            <div className="graphic-shape shape-1"></div>
            <div className="graphic-shape shape-2"></div>
            <div className="graphic-shape shape-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;