import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import recipesData from '../data/recipesData';

const RecipePage = () => {
  const { id } = useParams();
  const [liked, setLiked] = useState(false);
  const [shared, setShared] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState([]);

  const handleLike = () => {
    setLiked(true);
  };

  const handleShare = () => {
    setShared(true);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleRatingChange = (event) => {
    setRating(parseInt(event.target.value));
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    const newReview = {
      comment,
      rating,
    };
    setReviews([...reviews, newReview]);
    setComment('');
    setRating(0);
  };

  const recipe = recipesData.find((recipe) => recipe.id === parseInt(id));

  if (!recipe) {
    return <div>Công thức không tồn tại</div>;
  }

  // Tìm kiếm công thức
  const filteredRecipes = recipesData.filter((recipe) => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    const lowerCaseTitle = recipe.title.toLowerCase();
    const lowerCaseIngredients = recipe.ingredients?.map((ingredient) => ingredient.toLowerCase()) || [];
    const lowerCaseTags = recipe.tags?.map((tag) => tag.toLowerCase()) || [];

    return (
      lowerCaseTitle.includes(lowerCaseQuery) ||
      lowerCaseIngredients.some((ingredient) => ingredient.includes(lowerCaseQuery)) ||
      lowerCaseTags.some((tag) => tag.includes(lowerCaseQuery))
    );
  });


  return (
    
    <div>
      <h2>{recipe.title}</h2>
      <img src={recipe.image} alt={recipe.title} />
      <h3>Nguyên liệu:</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Hướng dẫn:</h3>
      <ol>
        {recipe.instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>
      <p>Thời gian nấu nướng: {recipe.cookingTime}</p>
      <button onClick={handleLike} disabled={liked}>
        {liked ? 'Đã thích' : 'Thích'}
      </button>
      <button onClick={handleShare} disabled={shared}>
        {shared ? 'Đã chia sẻ' : 'Chia sẻ'}
      </button>
      <hr />
      <h3>Tìm kiếm công thức:</h3>
      <input type="text" value={searchQuery} onChange={handleSearchChange} />
      <ul>
        {filteredRecipes.map((recipe) => (
          <li key={recipe.id}>{recipe.title}</li>
        ))}
      </ul>
      <hr />
      <h3>Bình luận và đánh giá:</h3>
      <form onSubmit={handleCommentSubmit}>
        <label>
          Bình luận:
          <textarea value={comment} onChange={handleCommentChange} />
          </label>
        <label>
          Đánh giá:
          <select value={rating} onChange={handleRatingChange}>
            <option value={0}>Chọn đánh giá</option>
            <option value={1}>1 sao</option>
            <option value={2}>2 sao</option>
            <option value={3}>3 sao</option>
            <option value={4}>4 sao</option>
            <option value={5}>5 sao</option>
          </select>
        </label>
        <button type="submit">Gửi đánh giá</button>
      </form>
      <h3>Đánh giá:</h3>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map((review, index) => (
            <li key={index}>
              <p>{review.comment}</p>
              <p>Đánh giá: {review.rating}/5</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Chưa có đánh giá nào.</p>
      )}
    </div>
  );
};

export default RecipePage;