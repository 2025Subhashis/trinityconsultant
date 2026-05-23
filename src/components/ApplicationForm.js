import React, { useState } from 'react';
import './Careers.css';

function ApplicationForm({ job, onClose }) {
  const [formData, setFormData] = useState({ name: '', email: '', resume: null });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Applied for', job.title, formData);
    alert('Application submitted for ' + job.title);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <form className="modal-content" onClick={(e) => e.stopPropagation()} onSubmit={handleSubmit}>
        <h3>Apply for {job.title}</h3>
        <input type="text" placeholder="Full Name" required onChange={(e) => setFormData({...formData, name: e.target.value})} />
        <input type="email" placeholder="Email" required onChange={(e) => setFormData({...formData, email: e.target.value})} />
        <input type="file" required onChange={(e) => setFormData({...formData, resume: e.target.files[0]})} />
        <button type="submit">Submit Application</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
}

export default ApplicationForm;