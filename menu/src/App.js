import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  return (
    <div className="container">
      <h2 className="title">Our Menu</h2>
      <div className="underline"></div>
      <Categories />
      <Menu items={items} />
    </div>
  );
}

export default App;
