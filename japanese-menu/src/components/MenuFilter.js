import React from 'react';
import { Form, InputGroup, Row, Col } from 'react-bootstrap';

const dietaryTags = ["vegan", "vegetarian", "gluten-free", "spicy", "nut-free"];

const MenuFilter = ({ searchTerm, onSearchChange, filters, onFilterChange, dropdownTag, onDropdownChange }) => {
  return (
    <div className="mb-4 p-3 bg-light rounded">
      <Row className="align-items-center mb-2">
        <Col md={6} className="mb-3 mb-md-0">
          <InputGroup>
            <InputGroup.Text>🔍</InputGroup.Text>
            <Form.Control 
              type="text"
              placeholder="Search menu..."
              value={searchTerm}
              onChange={onSearchChange}
            />
          </InputGroup>
        </Col>
        <Col md={6} className="mb-3 mb-md-0">
          <Form.Select
            aria-label="Filter by tag"
            value={dropdownTag}
            onChange={e => onDropdownChange(e.target.value)}
            className="mb-2"
          >
            <option value="">Filter by tag...</option>
            {dietaryTags.map(tag => (
              <option key={tag} value={tag}>{tag.charAt(0).toUpperCase() + tag.slice(1)}</option>
            ))}
          </Form.Select>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="d-flex flex-wrap justify-content-center">
            {dietaryTags.map(tag => (
              <Form.Check 
                key={tag}
                type="checkbox"
                id={`filter-${tag}`}
                label={tag}
                checked={filters[tag]}
                onChange={() => onFilterChange(tag)}
                className="me-3"
              />
            ))}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default MenuFilter;