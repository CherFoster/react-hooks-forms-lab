import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [onSearch, setSearch] = useState('');

  function handleCategoryChange(e) {
    setSelectedCategory(e.target.value);
  }

  function onSearchChange(e){
    setSearch(e.target.value);
    // console.log('text entered:', e.target.value)
  }
 
  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") {
      return true
    } else {
      return (item.category === selectedCategory)
    }
  });

  const searchItems = itemsToDisplay.filter((item) => {
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
       value={onSearch}
       onSearchChange={onSearchChange} />
      <ul className="Items">
        {searchItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}


export default ShoppingList;
