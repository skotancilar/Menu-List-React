import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";



function App() {
  const [category, setCategory] = useState('all')

  return (
    <div className="container">
      <h2 className="title">Our Menu</h2>
      <div className="underline"></div>
      <Categories setCategory={setCategory} category={category} />
      <Menu items={items} category={category} />
    </div>
  );
}

export default App;
