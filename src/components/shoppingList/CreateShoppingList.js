import React, { useState } from 'react';

const CreateShoppingList = ({ addToShoppingList }) => {
  const [ingredient, setIngredient] = useState('');

  const handleInputChange = (e) => {
    setIngredient(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ingredient.trim() !== '') {
      addToShoppingList(ingredient.trim());
      setIngredient('');
    }
  };

  return (
    <div>
      <h1>Tạo danh sách mua sắm</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={ingredient}
          onChange={handleInputChange}
          placeholder="Thêm nguyên liệu..."
        />
        <button type="submit">Thêm</button>
      </form>
    </div>
  );
};

export default CreateShoppingList;
