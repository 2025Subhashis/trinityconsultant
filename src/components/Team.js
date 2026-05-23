import React from 'react';
import './Team.css';

const teamMembers = [
  { name: 'John Doe', role: 'CEO', bio: 'Visionary leader with 15 years of experience.' },
  { name: 'Jane Smith', role: 'Lead Recruiter', bio: 'Expert at finding the perfect talent match.' },
  { name: 'Alex Johnson', role: 'Technical Lead', bio: 'Ensuring our tech stack is top-notch.' },
];

function Team() {
  return (
    <section className="team" id="team" aria-labelledby="team-title">
      <div className="container">
        <h2 id="team-title">Our Team</h2>
        <p className="section-subtitle">Meet the professionals dedicated to your success.</p>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="member-avatar"></div>
              <h3>{member.name}</h3>
              <p className="role">{member.role}</p>
              <p>{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;