import React from 'react';
import './Menu.css';

const menuItems = [
  {
    name: "Omakase Mystery Sushi Platter",
    description: "Let our chef surprise you with a selection of the freshest seasonal fish, artfully prepared in true omakase style. For the adventurous spirit!",
    price: "¥2,500"
  },
  {
    name: "Kara-Kara Ramen",
    description: "Fiery miso ramen with house-made noodles, tender chashu pork, and a secret blend of Japanese spices. Only for the brave!",
    price: "¥1,200"
  },
  {
    name: "Godzilla Matcha",
    description: "A towering pot of ceremonial-grade matcha green tea. Invigorating, earthy, and perfect for sharing with friends.",
    price: "¥800"
  },
  {
    name: "Shizuka Tofu (静か豆腐)",
    description: "Silky chilled tofu served with a delicate soy-ginger sauce. Pure, simple, and deeply satisfying.",
    price: "¥600"
  },
  {
    name: "Kawaii Tempura",
    description: "Crispy tempura shrimp and seasonal vegetables, fried to golden perfection. Served with a light tentsuyu dip.",
    price: "¥1,500"
  }
];

const testimonials = [
  {
    name: "Hiroshi Tanaka",
    text: "まるで日本にいるような気分になりました！料理は本当に美味しくて、スタッフもとても親切でした。 (I felt like I was in Japan! The food was truly delicious and the staff were so kind.)"
  },
  {
    name: "Sakura Watanabe",
    text: "おまかせ寿司は最高でした。新鮮な魚と美しい盛り付けに感動しました。 (The omakase sushi was amazing. I was impressed by the fresh fish and beautiful presentation.)"
  },
  {
    name: "David Smith",
    text: "The ramen had the perfect level of spice and depth of flavor. I can't wait to come back!"
  }
];

const Menu = () => {
  return (
    <main role="main" className="container mt-5">
      <h1 className="text-center mb-4" tabIndex="0">Sumo Sushi - 本格日本料理</h1>
      <section aria-labelledby="menu-heading">
        <h2 id="menu-heading" className="sr-only">Menu</h2>
        <div className="row">
          {menuItems.map((item, index) => (
            <article className="col-lg-4 col-md-6 mb-4" key={index} tabIndex="0" aria-label={item.name}>
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="card-title">{item.name}</h3>
                  <p className="card-text">{item.description}</p>
                  <p className="card-text"><strong>{item.price}</strong></p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section aria-labelledby="testimonials-heading" className="mt-5">
        <h2 id="testimonials-heading" className="text-center mb-4">お客様の声 (Customer Testimonials)</h2>
        <div className="row justify-content-center">
          {testimonials.map((testimonial, idx) => (
            <blockquote className="col-md-8 mb-4" key={idx} tabIndex="0" aria-label={`Testimonial from ${testimonial.name}`} style={{borderLeft: '4px solid #343a40', paddingLeft: '1rem'}}>
              <p style={{fontStyle: 'italic'}}>{testimonial.text}</p>
              <footer className="blockquote-footer">{testimonial.name}</footer>
            </blockquote>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Menu;
