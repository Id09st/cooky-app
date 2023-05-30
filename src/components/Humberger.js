import React from "react";
import { Link } from "react-router-dom";

const Humberger = () => {
  return (
    <div>
      <div className="humberger__menu__overlay"></div>
      <div className="humberger__menu__wrapper">
        <div className="humberger__menu__logo">
          <a href="#">
            <img src="img/logo.png" alt="" />
          </a>
        </div>
        <div className="humberger__menu__cart">
          <ul>
            <li>
              <a href="#">
                <i className="fa fa-heart"></i> <span>1</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-shopping-bag"></i> <span>3</span>
              </a>
            </li>
          </ul>
          <div className="header__cart__price">
            item: <span>$150.00</span>
          </div>
        </div>
        <nav className="humberger__menu__nav mobile-menu">
          <ul>
            <li className="active">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop-grid">Shop</Link>
            </li>
            <li>
              <a href="#">Pages</a>
              <ul className="header__menu__dropdown">
                <li>
                  <Link to="/shop-details">Shop Details</Link>
                </li>
                <li>
                  <Link to="/shoping-cart">Shoping Cart</Link>
                </li>
                <li>
                  <Link to="/checkout">Check Out</Link>
                </li>
                <li>
                  <a href="./blog-details.html">Blog Details</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="./blog.html">Blog</a>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="header__top__right__auth">
          <a href="#">
            <i className="fa fa-user"></i> Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default Humberger;
