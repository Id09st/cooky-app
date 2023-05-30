import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { AuthProvider } from "./AuthContext";
import Humberger from "./components/Humberger";
import Categories from "./components/Categories";
import ShopGrid from "./components/shop/ShopGrid";
import Hero from "./components/Hero";
import ShopDetail from "./components/shop/ShopDetail";
import ShopingCart from "./components/shop/ShopingCart";
import Contact from "./components/Contact";
import CheckOut from "./components/shop/CheckOut";




const App = () => {
  return (
    <Router>
      <AuthProvider>
        <div>
          <Humberger />
          <Header />
          <Hero />
          <Categories />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop-grid" element={<ShopGrid />} />
            <Route path="/shop-details" element={<ShopDetail />} />
            <Route path="/shoping-cart" element={<ShopingCart />} />
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
};
export default App;
