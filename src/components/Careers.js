import React, { useState } from 'react';
import './Careers.css';

const jobs = [
  { id: 1, title: 'Full Stack Developer', department: 'IT', description: 'Build scalable web applications using React and Node.js.' },
  { id: 2, title: 'Production Manager', department: 'Manufacturing', description: 'Oversee production efficiency and quality control.' },
  { id: 3, title: 'Registered Nurse', department: 'Healthcare', description: 'Provide high-quality patient care in a fast-paced environment.' },
];

function Careers() {
  const [formData, setFormData] = useState({ name: '', email: '', job: '', resume: null });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Application submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', job: '', resume: null });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="careers" id="careers">
      <div className="container">
        <h2>Open Positions</h2>
        <div className="jobs-grid">
          {jobs.map(job => (
            <div key={job.id} className="job-card">
              <h3>{job.title}</h3>
              <p><strong>Department:</strong> {job.department}</p>
              <p>{job.description}</p>
            </div>
          ))}
        </div>

        <div className="application-form">
          <h3>Apply for a Position</h3>
          {submitted && <p className="success">Application submitted successfully!</p>}
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Full Name" required onChange={(e) => setFormData({...formData, name: e.target.value})} />
            <input type="email" placeholder="Email Address" required onChange={(e) => setFormData({...formData, email: e.target.value})} />
            <select onChange={(e) => setFormData({...formData, job: e.target.value})} required>
              <option value="">Select Position</option>
              {jobs.map(job => <option key={job.id} value={job.title}>{job.title}</option>)}
            </select>
            <input type="file" required onChange={(e) => setFormData({...formData, resume: e.target.files[0]})} />
            <button type="submit">Submit Application</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Careers;