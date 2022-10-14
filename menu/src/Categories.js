import React from "react";
import classNames from 'classnames';

const Categories = ({ setCategory, category }) => {

  return (
    <div className="btn-container">
      {['all', 'breakfast', 'lunch', 'shakes'].map(c => (
        <button key={c} onClick={() => setCategory(c)} className={classNames('filter-btn', { 'active': category === c })}>
          {c}
        </button>
      ))
      }

      {/* <button onClick={() => setCategory('breakfast')} className="filter-btn">
        Breakfast
      </button>
      <button onClick={() => setCategory('lunch')} className="filter-btn">
        Lunch
      </button>
      <button onClick={() => setCategory('shakes')} className="filter-btn">
        Shakes
      </button> */}
    </div >
  );
};

export default Categories;
