import React, { useState } from 'react';
import { Col, Badge } from 'react-bootstrap';

const tagColors = {
  vegan: 'success',
  vegetarian: 'info',
  'gluten-free': 'warning',
  spicy: 'danger',
  'nut-free': 'primary',
};

const MenuItem = ({ item }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Col as="article" lg={4} md={6} className="mb-4" tabIndex="0" aria-label={item.name}>
      <div className="card h-100" style={{ cursor: 'pointer', transition: 'box-shadow 0.2s' }}>
        <div
          className="card-body d-flex flex-column"
          onClick={() => setExpanded(e => !e)}
          onKeyPress={e => { if (e.key === 'Enter' || e.key === ' ') setExpanded(exp => !exp); }}
          tabIndex={0}
          role="button"
          aria-expanded={expanded}
          style={{ outline: 'none' }}
        >
          <div className="d-flex align-items-center justify-content-between">
            <div className="item-header">
              <h3 className="card-title mb-0">
                {item.name} {item.recommended && <span className="badge bg-danger">Chef's Rec</span>}
              </h3>
              {item.nameJP && <div className="item-name-jp">{item.nameJP}</div>}
            </div>
            <span style={{ marginLeft: '0.5em', transition: 'transform 0.3s', display: 'inline-block', transform: expanded ? 'rotate(90deg)' : 'rotate(0deg)' }}>
              ▶
            </span>
          </div>
          {expanded && (
            <>
              <p className="card-text mt-2">{item.description}</p>
              {item.tags && item.tags.length > 0 && (
                <div className="mb-2">
                  {item.tags.map(tag => (
                    <Badge key={tag} bg={tagColors[tag] || 'secondary'} className="me-1 text-capitalize">{tag}</Badge>
                  ))}
                </div>
              )}
            </>
          )}
          <p className="card-text mt-auto text-end"><strong>{item.price}</strong></p>
        </div>
      </div>
    </Col>
  );
};

export default MenuItem;