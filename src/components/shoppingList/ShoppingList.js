import React, { useState } from 'react';
import recipesData from '../../data/recipesData';

const ShoppingList = () => {
  const [shoppingList, setShoppingList] = useState([]);

  // Thêm nguyên liệu vào danh sách mua sắm
  const addToShoppingList = (ingredients) => {
    const updatedList = ingredients.map((ingredient) => ({
      name: ingredient,
      quantity: 1,
    }));
    setShoppingList((prevList) => [...prevList, ...updatedList]);
  };

  // Xóa nguyên liệu khỏi danh sách mua sắm
  const removeFromShoppingList = (index) => {
    setShoppingList((prevList) => prevList.filter((item, i) => i !== index));
  };

  // Tạo danh sách mua sắm
  const createShoppingList = () => {
    // Logic để tạo danh sách mua sắm
    console.log('Tạo danh sách mua sắm:', shoppingList);
  };

  // Chia sẻ danh sách mua sắm
  const shareShoppingList = () => {
    // Logic để chia sẻ danh sách mua sắm
    console.log('Chia sẻ danh sách mua sắm:', shoppingList);
  };

  const handleQuantityChange = (index, newQuantity) => {
    setShoppingList((prevList) =>
      prevList.map((item, i) =>
        i === index ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <div>
      <h1>Danh sách mua sắm</h1>
      <ul>
        {shoppingList.map((item, index) => (
          <li key={index}>
            {item.name} - Quantity:
            <input
              type="number"
              value={item.quantity}
              onChange={(e) =>
                handleQuantityChange(index, parseInt(e.target.value))
              }
            />
            <button onClick={() => removeFromShoppingList(index)}>Xóa</button>
          </li>
        ))}
      </ul>
      <h2>Danh sách công thức</h2>
      <ul>
        {recipesData.map((recipe) => (
          <li key={recipe.id}>
            <h3>{recipe.title}</h3>
            <button onClick={() => addToShoppingList(recipe.ingredients)}>
              Thêm vào danh sách mua sắm
            </button>
          </li>
        ))}
      </ul>
      <button onClick={createShoppingList}>Tạo danh sách mua sắm</button>
      <button onClick={shareShoppingList}>Chia sẻ danh sách mua sắm</button>
    </div>
  );
};

export default ShoppingList;
