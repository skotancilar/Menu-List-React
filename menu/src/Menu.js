import React from "react";

const Menu = ({ items, category }) => {
  return (
    <div className="section-center">
      {items.filter(item => category !== 'all' ? item.category === category : true
      ).map((item) => {
        const { id, title, img, desc, price } = item;
        return (
          <main key={id} className="menu-item">
            <img className="photo" src={img} alt={title} />
            <p className="item-text">{desc}</p>
            <div className="item-info">
              <h4>{title}</h4>
              <h4 className="price">{price}</h4>
            </div>
          </main>
        );
      })}
    </div>
  );
};


export default Menu;
