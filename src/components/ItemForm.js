import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm(props) {
  const [addItem, setNewItem] = useState({
    name: '',
    category: 'Produce'
  });

 function handleChange(e){
  setNewItem({
    ...addItem,
    [e.target.name]: e.target.value
  })
 }

 function handleSumbit(e){
  e.preventDefault();

  const newItem = {
    id: uuid(), 
    name: addItem.name,
    category: addItem.category
  }
  props.onItemFormSubmit(newItem)
}

  return (
    <form className="NewItem" onSubmit={handleSumbit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleChange} value={addItem.name}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleChange}>
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
