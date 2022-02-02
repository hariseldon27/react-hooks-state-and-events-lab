import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const categoryToDisplay = items.filter((item) => {
    if ( selectedCategory === "All"){
      return "All"
    } else {
      return item.category === selectedCategory;
    }
  })

  function handleFilter( {target} ){
    setSelectedCategory(target.value)
    console.log(`the target val is: ${target.value}`)
  }
  console.log(` selected cat is: ${selectedCategory}`)
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleFilter} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {categoryToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
