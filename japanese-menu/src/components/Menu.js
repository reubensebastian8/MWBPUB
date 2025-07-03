import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import './Menu.css';
import './MenuFilter.css';
import MenuSection from './MenuSection';
import Testimonial from './Testimonial';
import MenuFilter from './MenuFilter';
import { japaneseMenuItems, chineseMenuItems, testimonials } from './menuData';

const Menu = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    vegan: false,
    vegetarian: false,
    'gluten-free': false,
    spicy: false,
    'nut-free': false
  });

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (filter) => {
    setFilters(prevFilters => ({ ...prevFilters, [filter]: !prevFilters[filter] }));
  };

  const getFilteredItems = (items) => {
    return items.filter(item => {
      const activeFilters = Object.keys(filters).filter(f => filters[f]);
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilters = activeFilters.every(f => item.tags && item.tags.includes(f));
      return matchesSearch && matchesFilters;
    });
  };

  return (
    <Container as="main" role="main" className="mt-5">
      <h1 className="text-center mb-4" tabIndex="0">🍣 Sumo Sushi - 本格日本料理 & 伝統中華料理</h1>
      
      <MenuFilter 
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        filters={filters}
        onFilterChange={handleFilterChange}
      />

      <MenuSection 
        id="japanese-menu-heading"
        title="🍱 Japanese Menu (日本料理)"
        items={getFilteredItems(japaneseMenuItems)} 
      />
      
      <MenuSection 
        id="chinese-menu-heading"
        title="🥢 Chinese Menu (中華料理)"
        items={getFilteredItems(chineseMenuItems)} 
      />

      <section aria-labelledby="testimonials-heading" className="mt-5">
        <h2 id="testimonials-heading" className="text-center mb-4">🌸 お客様の声 (Customer Testimonials)</h2>
        <Row className="justify-content-center">
          {testimonials.map(testimonial => (
            <Testimonial key={testimonial.id} testimonial={testimonial} />
          ))}
        </Row>
      </section>
      
      <footer className="text-center mt-5">
        <p><strong>🏮 Sumo Sushi</strong></p>
        <p>123 Fake Street, Tokyo, Japan</p>
        <p>+81 123-456-7890</p>
        <p>&copy; 2025 Sumo Sushi. All Rights Reserved.</p>
      </footer>
    </Container>
  );
};

export default Menu;
