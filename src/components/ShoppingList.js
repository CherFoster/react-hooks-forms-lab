import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [onSearch, setSearch] = useState('');

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function onSearchChange(event){
    setSearch(event.target.value);
    // console.log('text entered:', event.target.value)
  }
 
  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") {
      return true
    } else {
      return (item.category === selectedCategory)
    }
  });

  const searchItems = items.filter((item) => {
    if (item.name.toLowerCase().includes(onSearch.toLowerCase())){
      return true;
    } else {
      return false;
    }
  })

  //  console.log('searched:', searchItems)

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} 
       search={onSearch}
       onSearchChange={onSearchChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
