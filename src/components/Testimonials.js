import React from 'react';
import './Testimonials.css';

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'HR Director, TechCorp',
      comment: 'Trinity Consultant helped us find exceptional talent that perfectly fit our team culture. Their professionalism and dedication are unmatched.',
      rating: 5
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'Founder, StartUp Innovations',
      comment: 'Working with Trinity was a game-changer for our recruitment process. They understood our vision and delivered top-quality candidates.',
      rating: 5
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      position: 'Career Professional',
      comment: 'Trinity Consultant helped me transition to my dream role. Their career consulting team provided invaluable guidance throughout the process.',
      rating: 5
    }
  ];

  return (
    <section className="testimonials" id="testimonials" aria-labelledby="testimonials-title">
      <div className="container">
        <div className="section-header">
          <h2 id="testimonials-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Real success stories from companies and professionals we've helped
          </p>
        </div>

        <div className="testimonials-grid" role="list">
          {testimonials.map((testimonial) => (
            <article 
              key={testimonial.id} 
              className="testimonial-card"
              role="listitem"
            >
              <div className="rating" aria-label={`${testimonial.rating} out of 5 stars`}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} aria-hidden="true">⭐</span>
                ))}
              </div>
              <p className="testimonial-text">
                "{testimonial.comment}"
              </p>
              <div className="testimonial-author">
                <h3>{testimonial.name}</h3>
                <p className="testimonial-position">{testimonial.position}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;