import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <nav className="header__menu">
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
                  </ul>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-lg-2">
            <nav className="header__menu">
              <ul>
                <li>
                  <a href="#">
                    <i className="fa fa-user"></i> Login
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="humberger__open">
          <i className="fa fa-bars"></i>
        </div>
      </div>
    </header>
  );
};

export default Header;
