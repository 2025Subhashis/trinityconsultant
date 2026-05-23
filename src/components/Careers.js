import React, { useState } from 'react';
import './Careers.css';

const jobs = [
  { id: 1, title: 'Full Stack Developer', domain: 'IT', experience: '3-5 years', location: 'Kolkata', description: 'Build scalable web applications using React and Node.js.' },
  { id: 2, title: 'Production Manager', domain: 'Manufacturing', experience: '5-8 years', location: 'Pune', description: 'Oversee production efficiency and quality control.' },
  { id: 3, title: 'Registered Nurse', domain: 'Healthcare', experience: '2-4 years', location: 'Mumbai', description: 'Provide high-quality patient care in a fast-paced environment.' },
  { id: 4, title: 'Data Scientist', domain: 'IT', experience: '4-6 years', location: 'Bangalore', description: 'Analyze complex datasets to derive actionable insights.' },
  { id: 5, title: 'Quality Assurance Lead', domain: 'Manufacturing', experience: '6-10 years', location: 'Chennai', description: 'Ensure quality standards across manufacturing processes.' },
];

function Careers() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDomain, setFilterDomain] = useState('');
  const [expandedJobId, setExpandedJobId] = useState(null);

  const filteredJobs = jobs.filter(job => 
    (job.title.toLowerCase().includes(searchTerm.toLowerCase()) || job.location.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (filterDomain === '' || job.domain === filterDomain)
  );

  const toggleExpand = (id) => setExpandedJobId(expandedJobId === id ? null : id);

  return (
    <section className="careers" id="careers">
      <div className="container">
        <h2>Open Positions</h2>
        
        <div className="search-filters">
          <input type="text" placeholder="Search by title or location..." onChange={(e) => setSearchTerm(e.target.value)} />
          <select onChange={(e) => setFilterDomain(e.target.value)}>
            <option value="">All Domains</option>
            <option value="IT">IT</option>
            <option value="Manufacturing">Manufacturing</option>
            <option value="Healthcare">Healthcare</option>
          </select>
        </div>

        <div className="jobs-list">
          {filteredJobs.map(job => (
            <div key={job.id} className="job-item">
              <div className="job-header" onClick={() => toggleExpand(job.id)}>
                <h3>{job.title}</h3>
                <span>{job.domain} | {job.location} | {job.experience} exp</span>
              </div>
              {expandedJobId === job.id && (
                <div className="job-details">
                  <p>{job.description}</p>
                  <button className="apply-btn">Apply Now</button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Careers;