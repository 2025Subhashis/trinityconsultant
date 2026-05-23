import React, { useState } from 'react';
import './ApplicationForm.css';

function ApplicationForm({ job, onClose }) {
  const [formData, setFormData] = useState({ name: '', email: '', resume: null });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      console.log('Application submitted for', job.title, formData);
      alert('Application submitted successfully for ' + job.title);
      setLoading(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <form className="modal-content" onClick={(e) => e.stopPropagation()} onSubmit={handleSubmit}>
        <h3>Apply for {job.title}</h3>
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" required onChange={(e) => setFormData({...formData, name: e.target.value})} />
        </div>
        <div className="form-group">
          <label>Email Address</label>
          <input type="email" required onChange={(e) => setFormData({...formData, email: e.target.value})} />
        </div>
        <div className="form-group">
          <label>Upload Resume (PDF/DOCX)</label>
          <input type="file" accept=".pdf,.docx" required onChange={(e) => setFormData({...formData, resume: e.target.files[0]})} />
        </div>
        <div className="form-actions">
          <button type="submit" disabled={loading}>{loading ? 'Submitting...' : 'Submit Application'}</button>
          <button type="button" onClick={onClose} className="cancel-btn">Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default ApplicationForm;