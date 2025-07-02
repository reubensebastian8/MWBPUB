import React from 'react';
import './Menu.css';
import MenuSection from './MenuSection';
import Testimonial from './Testimonial';
import { japaneseMenuItems, chineseMenuItems, testimonials } from './menuData';

const Menu = () => {
  return (
    <main role="main" className="container mt-5">
      <h1 className="text-center mb-4" tabIndex="0">🍣 Sumo Sushi - 本格日本料理 & 伝統中華料理</h1>
      
      <MenuSection 
        id="japanese-menu-heading"
        title="🍱 Japanese Menu (日本料理)"
        items={japaneseMenuItems} 
      />
      
      <MenuSection 
        id="chinese-menu-heading"
        title="🥢 Chinese Menu (中華料理)"
        items={chineseMenuItems} 
      />

      <section aria-labelledby="testimonials-heading" className="mt-5">
        <h2 id="testimonials-heading" className="text-center mb-4">🌸 お客様の声 (Customer Testimonials)</h2>
        <div className="row justify-content-center">
          {testimonials.map(testimonial => (
            <Testimonial key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </section>
      
      <footer className="text-center mt-5">
        <p><strong>🏮 Sumo Sushi</strong></p>
        <p>123 Fake Street, Tokyo, Japan</p>
        <p>+81 123-456-7890</p>
        <p>&copy; 2025 Sumo Sushi. All Rights Reserved.</p>
      </footer>
    </main>
  );
};

export default Menu;
