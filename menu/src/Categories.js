import React, { useState } from "react";

const Categories = () => {
  // const [Categories, setCategories] = useState;

  // const handleCategories = (e) => {};

  return (
    <div className="btn-container">
      <button onClick={handleCategories} className="filter-btn">
        All
      </button>
      <button onlick={handleCategories} className="filter-btn">
        Breakfast
      </button>
      <button onlick={handleCategories} className="filter-btn">
        Lunch
      </button>
      <button onlick={handleCategories} className="filter-btn">
        Shakes
      </button>
    </div>
  );
};

export default Categories;
