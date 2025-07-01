import React from 'react';
import './Menu.css';

const japaneseMenuItems = [
  {
    name: "Emperor's Omakase Platter",
    description: "A majestic platter of our chef's finest creations. A culinary journey for the discerning palate. We promise it's not a mystery, just pure art.",
    price: "$38",
    recommended: true
  },
  {
    name: "Volcano Ramen",
    description: "A ramen so spicy, it's said to have been forged in the heart of Mount Fuji. Eat it if you dare, and feel the eruption of flavor.",
    price: "$15"
  },
  {
    name: "Samurai's Sip Matcha",
    description: "A potent pot of matcha, guaranteed to sharpen your senses and prepare you for any battle. Or, you know, a busy afternoon.",
    price: "$5"
  },
  {
    name: "Zen Garden Tofu",
    description: "A serene block of tofu, so peaceful it meditates on your plate. Served with a whisper of soy and a sprinkle of enlightenment.",
    price: "$7"
  },
  {
    name: "Sumo Sized Tempura",
    description: "A mountain of crispy, golden tempura. So big, you might need a tag team partner to finish it. Challenge accepted?",
    price: "$18",
    recommended: true
  }
];

const chineseMenuItems = [
  { name: "Peking Duck (北京烤鸭)", description: "Crispy roasted duck served with pancakes, scallions, and hoisin sauce.", price: "$36" },
  { name: "Xiao Long Bao (小笼包)", description: "Steamed soup dumplings filled with juicy pork and rich broth.", price: "$8" },
  { name: "Mapo Tofu (麻婆豆腐)", description: "Silky tofu in a spicy, numbing Sichuan pepper sauce with minced pork.", price: "$12" },
  { name: "Kung Pao Chicken (宫保鸡丁)", description: "Stir-fried chicken with peanuts, dried chilies, and a sweet-spicy sauce.", price: "$13" },
  { name: "Char Siu (叉烧)", description: "Cantonese-style barbecued pork with a sweet, savory glaze.", price: "$11" },
  { name: "Sweet and Sour Pork (咕噜肉)", description: "Crispy pork in a tangy sweet and sour sauce with pineapple and peppers.", price: "$13" },
  { name: "Hot Pot (火锅)", description: "A bubbling pot of broth with assorted meats, seafood, and vegetables for dipping.", price: "$28" },
  { name: "Egg Fried Rice (蛋炒饭)", description: "Classic fried rice with egg, scallions, and a touch of soy sauce.", price: "$7" },
  { name: "Spring Rolls (春卷)", description: "Crispy rolls filled with vegetables and pork, served with dipping sauce.", price: "$6" },
  { name: "Sichuan Spicy Noodles (四川担担面)", description: "Noodles tossed in a spicy, numbing Sichuan sauce with minced pork.", price: "$10" },
  { name: "Steamed Fish with Ginger and Scallion (清蒸鱼)", description: "Whole fish steamed with ginger, scallions, and soy sauce.", price: "$22" },
  { name: "Lion's Head Meatballs (狮子头)", description: "Large, tender pork meatballs braised in a savory sauce.", price: "$14" },
  { name: "Twice-Cooked Pork (回锅肉)", description: "Pork belly slices stir-fried with leeks and spicy bean paste.", price: "$13" },
  { name: "Beef Chow Fun (干炒牛河)", description: "Stir-fried wide rice noodles with beef, bean sprouts, and soy sauce.", price: "$12" },
  { name: "Salt and Pepper Shrimp (椒盐虾)", description: "Crispy shrimp tossed with salt, pepper, and fresh chilies.", price: "$16" },
  { name: "Century Egg and Pork Congee (皮蛋瘦肉粥)", description: "Rice porridge with preserved egg and tender pork.", price: "$8" },
  { name: "Stir-Fried Bok Choy (清炒白菜)", description: "Fresh bok choy stir-fried with garlic.", price: "$7" },
  { name: "Dan Dan Noodles (担担面)", description: "Spicy Sichuan noodles with minced pork and pickled vegetables.", price: "$10" },
  { name: "Lotus Leaf Sticky Rice (荷叶饭)", description: "Sticky rice with chicken, mushrooms, and sausage, steamed in a lotus leaf.", price: "$11" },
  { name: "Red Bean Buns (豆沙包)", description: "Steamed buns filled with sweet red bean paste.", price: "$6" }
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
      <h1 className="text-center mb-4" tabIndex="0">Sumo Sushi - 本格日本料理 & 伝統中華料理</h1>
      <section aria-labelledby="japanese-menu-heading" className="menu-section">
        <h2 id="japanese-menu-heading" className="text-center mb-4">Japanese Menu (日本料理)</h2>
        <div className="row">
          {japaneseMenuItems.map((item, index) => (
            <article className="col-lg-4 col-md-6 mb-4" key={index} tabIndex="0" aria-label={item.name}>
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="card-title">{item.name} {item.recommended && <span className="badge bg-danger">Chef's Rec</span>}</h3>
                  <p className="card-text">{item.description}</p>
                  <p className="card-text"><strong>{item.price}</strong></p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section aria-labelledby="chinese-menu-heading" className="menu-section">
        <h2 id="chinese-menu-heading" className="text-center mb-4">Chinese Menu (中華料理)</h2>
        <div className="row">
          {chineseMenuItems.map((item, index) => (
            <article className="col-lg-4 col-md-6 mb-4" key={index} tabIndex="0" aria-label={item.name}>
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="card-title">{item.name} {item.recommended && <span className="badge bg-danger">Chef's Rec</span>}</h3>
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
      <footer className="text-center mt-5">
        <p><strong>Sumo Sushi</strong></p>
        <p>123 Fake Street, Tokyo, Japan</p>
        <p>+81 123-456-7890</p>
        <p>&copy; 2025 Sumo Sushi. All Rights Reserved.</p>
      </footer>
    </main>
  );
};

export default Menu;
