import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import './Menu.css';
import './MenuFilter.css';
import MenuSection from './MenuSection';
import Testimonial from './Testimonial';
import MenuFilter from './MenuFilter';
import { menuSections, testimonials } from './menuData';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const Menu = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    vegan: false,
    vegetarian: false,
    'gluten-free': false,
    spicy: false,
    'nut-free': false
  });
  const [dropdownTag, setDropdownTag] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (filter) => {
    setFilters(prevFilters => ({ ...prevFilters, [filter]: !prevFilters[filter] }));
  };

  const handleDropdownChange = (tag) => {
    setDropdownTag(tag);
  };

  const getFilteredItems = (items) => {
    return items.filter(item => {
      const activeFilters = Object.keys(filters).filter(f => filters[f]);
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilters = activeFilters.every(f => item.tags && item.tags.includes(f));
      const matchesDropdown = dropdownTag === '' || (item.tags && item.tags.includes(dropdownTag));
      return matchesSearch && matchesFilters && matchesDropdown;
    });
  };

  const handleDownloadPDF = async () => {
    const input = document.getElementById('menu-content');
    if (!input) return;
    const canvas = await html2canvas(input, { scale: 2, backgroundColor: '#fff' });
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'pt',
      format: 'a4',
    });
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const imgProps = pdf.getImageProperties(imgData);
    const imgWidth = imgProps.width;
    const imgHeight = imgProps.height;
    const widthScale = pageWidth / imgWidth;
    const heightScale = pageHeight / imgHeight;
    const scale = Math.min(widthScale, heightScale);
    const pdfWidth = imgWidth * scale;
    const pdfHeight = imgHeight * scale;
    const x = (pageWidth - pdfWidth) / 2;
    const y = (pageHeight - pdfHeight) / 2;
    pdf.addImage(imgData, 'PNG', x, y, pdfWidth, pdfHeight);
    pdf.save('menu.pdf');
  };

  return (
    <Container as="main" role="main" className="mt-5">
      <h1 className="text-center mb-4" tabIndex="0">🍣 Sumo Sushi - 本格日本料理 & 伝統中華料理</h1>
      <div className="d-flex justify-content-end align-items-center mb-3">
        <button
          onClick={handleDownloadPDF}
          className="asian-download-btn"
          style={{
            background: 'linear-gradient(90deg, #ffd600 0%, #b71c1c 100%)',
            color: '#fffbe7',
            border: '2px solid #ffd600',
            borderRadius: '2em',
            fontWeight: 'bold',
            fontSize: '1rem',
            letterSpacing: '1px',
            boxShadow: '0 2px 8px rgba(183,28,28,0.15)',
            padding: '0.5em 1.3em',
            outline: 'none',
            transition: 'background 0.2s, box-shadow 0.2s, transform 0.2s',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5em',
          }}
        >
          <span role="img" aria-label="sushi">🍣</span> Download Menu
        </button>
      </div>
      <MenuFilter 
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        filters={filters}
        onFilterChange={handleFilterChange}
        dropdownTag={dropdownTag}
        onDropdownChange={handleDropdownChange}
      />
      <div id="menu-content">
        {menuSections.map(section => (
          <MenuSection
            key={section.title}
            id={section.title.replace(/\s+/g, '-').toLowerCase()}
            title={section.title}
            items={getFilteredItems(section.items)}
          />
        ))}
      </div>
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
