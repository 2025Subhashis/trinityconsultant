import React from 'react';
import { useParams } from 'react-router-dom';
import './Services.css';

const serviceDetails = {
  'executive-search': { title: 'Executive Search', content: 'Our executive search service connects your organization with top-tier leadership talent...' },
  'technical-recruitment': { title: 'Technical Recruitment', content: 'We specialize in sourcing skilled software developers, data scientists, and IT professionals...' },
  'contract-staffing': { title: 'Contract Staffing', content: 'Get flexible talent solutions for your short-term and project-based requirements...' },
  'career-consulting': { title: 'Career Consulting', content: 'Empowering professionals with personalized career guidance and resume optimization...' },
  'training-development': { title: 'Training & Development', content: 'Customized training programs to upskill your workforce and drive innovation...' },
  'hr-solutions': { title: 'HR Solutions', content: 'Comprehensive HR management including payroll, compliance, and employee engagement...' },
};

function ServiceDetail() {
  const { slug } = useParams();
  const service = serviceDetails[slug];

  if (!service) return <div className="container"><h2>Service not found</h2></div>;

  return (
    <section className="service-detail container">
      <h2>{service.title}</h2>
      <p>{service.content}</p>
      <a href="/contact" className="btn btn-primary">Inquire About This Service</a>
    </section>
  );
}

export default ServiceDetail;