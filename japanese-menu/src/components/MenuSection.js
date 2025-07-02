import React from 'react';
import MenuItem from './MenuItem';

const MenuSection = ({ title, items, id }) => (
  <section aria-labelledby={id} className="menu-section">
    <h2 id={id} className="text-center mb-4">{title}</h2>
    <div className="row">
      {items.map(item => <MenuItem key={item.id} item={item} />)}
    </div>
  </section>
);

export default MenuSection;