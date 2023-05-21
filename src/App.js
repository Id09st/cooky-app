import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Recipe from './pages/Recipe';
import RecipePage from './pages/RecipePage';
import RecipeDetail from './components/recipeComponents/RecipeDetail';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { AuthProvider } from './AuthContext';
import ShoppingList from './components/shoppingList/ShoppingList';
import Humberger from './components/Humberger';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Featured from './components/Featured';
import Banner from './components/Banner';
import Lasted from './components/Lasted';

const App = () => {
  return (
    <Router>
      <AuthProvider>
      <div>
        <Humberger />
        <Header />
        <Hero />
        <Categories />
        <Featured />
        <Banner />
        <Lasted />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe" element={<Recipe />} />
          <Route path="/recipe/:id" element={<RecipePage />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/shopping-list" element={<ShoppingList />} />
          </Routes>
        <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
};
export default App;
