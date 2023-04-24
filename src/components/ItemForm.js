import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm(props) {
  const [addItem, setNewItem] = useState({
    name: '',
    category: 'Produce'
  });

 function handleSumbit(e){
  e.preventDefault();
 }

 function handleChange(e){
  setNewItem()
  
 }

  const newItem = {
    id: uuid(), 
    name: addItem.name,
    category: addItem.category
  };

  return (
    <form className="NewItem" onSubmit={handleSumbit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleChange} />
      </label>

      <label>
        Category:
        <select name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
