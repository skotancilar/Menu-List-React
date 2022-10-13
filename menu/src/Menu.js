import React from "react";

const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((items) => {
        const { id, title, img, desc, price } = items;
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
