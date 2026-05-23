import React from 'react';
import './Services.css';

function Services() {
  const services = [
    {
      id: 1,
      title: 'Executive Search',
      description: 'Find C-level executives and senior management professionals for your organization.',
      icon: '👔'
    },
    {
      id: 2,
      title: 'Technical Recruitment',
      description: 'Connect with skilled software engineers, developers, and IT professionals.',
      icon: '💻'
    },
    {
      id: 3,
      title: 'Contract Staffing',
      description: 'Flexible staffing solutions for short-term and project-based needs.',
      icon: '📋'
    },
    {
      id: 4,
      title: 'Career Consulting',
      description: 'Professional guidance to advance your career and achieve your goals.',
      icon: '🎯'
    },
    {
      id: 5,
      title: 'Training & Development',
      description: 'Upskill your workforce with industry-relevant training programs.',
      icon: '📚'
    },
    {
      id: 6,
      title: 'HR Solutions',
      description: 'Comprehensive HR services including payroll, compliance, and administration.',
      icon: '🤝'
    }
  ];

  return (
    <section className="services" id="services" aria-labelledby="services-title">
      <div className="container">
        <div className="section-header">
          <h2 id="services-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive recruitment and staffing solutions tailored to your needs
          </p>
        </div>
        
        <div className="services-grid" role="list">
          {services.map((service) => (
            <article 
              key={service.id} 
              className="service-card"
              role="listitem"
            >
              <div className="service-icon" aria-hidden="true">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href={`#${service.title.toLowerCase().replace(/\s+/g, '-')}`} className="service-link">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;