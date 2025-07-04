import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import MenuItem from './MenuItem';

const MenuSection = ({ title, items, id }) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <section aria-labelledby={id} className="menu-section">
      <button
        id={id}
        className="menu-section-header text-center mb-4 d-flex align-items-center justify-content-center w-100"
        aria-expanded={expanded}
        onClick={() => setExpanded(e => !e)}
        style={{
          background: 'none',
          border: 'none',
          fontSize: '1.5rem',
          width: '100%',
          padding: '1rem',
          cursor: 'pointer',
          outline: 'none',
          userSelect: 'none',
        }}
      >
        <span style={{ marginRight: '0.5em', transition: 'transform 0.3s', display: 'inline-block', transform: expanded ? 'rotate(90deg)' : 'rotate(0deg)' }}>
          ▶
        </span>
        {title}
      </button>
      {expanded && (
        <Row>
          {items.map(item => <MenuItem key={item.id} item={item} />)}
        </Row>
      )}
    </section>
  );
};

export default MenuSection;