import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [itemName, setItemName] = useState('');
  const [price, setPrice] = useState(0);
  const [cart, setCart] = useState([]);

  const addItem = () => {
    const newItem = {
      name: itemName,
      price: price
    };
    setCart([...cart, newItem]);
    setItemName("");
    setPrice('');
  };

  const removeItem = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <label>Item Name :</label><input type="text" onChange={(e) => setItemName(e.target.value)} value={itemName} />
      <label>Item Price:</label><input type="number" onChange={(e) => setPrice(e.target.value)} value={price} />
      <button onClick={addItem}>Add Item</button>
      <div className="child">
        <h2>Child Component</h2>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              <span id="itemName">{item.name}</span>-
              <span id="itemPrice">${item.price}</span>
              <button onClick={() => removeItem(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
