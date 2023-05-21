import React from 'react';
import { Link } from 'react-router-dom';
import recipesData from '../data/recipesData'; // Dữ liệu công thức (có thể lấy từ API)

const Recipe = () => {
  return (
    <div>
      <h1>Danh sách công thức</h1>
      <ul>
        {recipesData.map((recipe) => (
          <li key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recipe;
