import React from 'react';

const Testimonial = ({ testimonial }) => (
  <blockquote className="col-md-8 mb-4 testimonial" tabIndex="0" aria-label={`Testimonial from ${testimonial.name}`}>
    <p className="testimonial-text">{testimonial.text}</p>
    <footer className="blockquote-footer">{testimonial.name}</footer>
  </blockquote>
);

export default Testimonial;