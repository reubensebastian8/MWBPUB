import React from 'react';
import { Col } from 'react-bootstrap';

const Testimonial = ({ testimonial }) => (
  <Col as="blockquote" md={8} className="mb-4 testimonial" tabIndex="0" aria-label={`Testimonial from ${testimonial.name}`}>
    <p className="testimonial-text">{testimonial.text}</p>
    <footer className="blockquote-footer">{testimonial.name}</footer>
  </Col>
);

export default Testimonial;