import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [category, setCategory] = useState("All")

  function newCategory (event) {
    setCategory(event.target.value)
  }

  const displayItems = items.filter(item => {
    if(category === "All") return true

    return item.category === category
  })

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={newCategory} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {displayItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
