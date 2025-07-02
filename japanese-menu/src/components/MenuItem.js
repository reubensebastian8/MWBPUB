import React from 'react';

const MenuItem = ({ item }) => (
  <article className="col-lg-4 col-md-6 mb-4" tabIndex="0" aria-label={item.name}>
    <div className="card h-100">
      <div className="card-body">
        <h3 className="card-title">
          {item.name} {item.recommended && <span className="badge bg-danger">Chef's Rec</span>}
        </h3>
        <p className="card-text">{item.description}</p>
        <p className="card-text"><strong>{item.price}</strong></p>
      </div>
    </div>
  </article>
);

export default MenuItem;