import React from 'react';
import { Col } from 'react-bootstrap';

const MenuItem = ({ item }) => (
  <Col as="article" lg={4} md={6} className="mb-4" tabIndex="0" aria-label={item.name}>
    <div className="card h-100">
      <div className="card-body d-flex flex-column">
        <div>
          <h3 className="card-title">
            {item.name} {item.recommended && <span className="badge bg-danger">Chef's Rec</span>}
          </h3>
          <p className="card-text">{item.description}</p>
        </div>
        <p className="card-text mt-auto text-end"><strong>{item.price}</strong></p>
      </div>
    </div>
  </Col>
);

export default MenuItem;