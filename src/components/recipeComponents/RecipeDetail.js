import React from 'react';
import { useParams } from 'react-router-dom';
import RecipeDetail from './RecipeDetail';
import recipesData from '../../data/recipesData'; // Dữ liệu công thức (có thể lấy từ API)

const RecipePage = () => {
  const { id } = useParams();
  const recipe = recipesData.find((recipe) => recipe.id === id);

  return (
    <div>
      <h1>Chi tiết công thức</h1>
      {recipe ? (
        <RecipeDetail recipe={recipe} />
      ) : (
        <p>Không tìm thấy công thức</p>
      )}
    </div>
  );
};

export default RecipePage;
