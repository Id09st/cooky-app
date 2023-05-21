import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.cooky.vn',
});

export const getRecipe = async (recipeId) => {
  try {
    const response = await api.get(`/recipe/${recipeId}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
