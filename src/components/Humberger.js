import React from 'react';


const Humberger = () => {
  return (
      <div>
        <div className="humberger__menu__overlay"></div>
        <div className="humberger__menu__wrapper">
          <div className="humberger__menu__logo">
            <a href="#"><img src="img/logo.png" alt="" /></a>
          </div>
          <div className="humberger__menu__cart">
            <ul>
              <li><a href="#"><i className="fa fa-heart"></i> <span>1</span></a></li>
              <li><a href="#"><i className="fa fa-shopping-bag"></i> <span>3</span></a></li>
            </ul>
            <div className="header__cart__price">item: <span>$150.00</span></div>
          </div>
          <nav className="humberger__menu__nav mobile-menu">
            <ul>
              <li className="active"><a href="./index.html">Home</a></li>
              <li><a href="./shop-grid.html">Shop</a></li>
              <li><a href="#">Pages</a>
                <ul className="header__menu__dropdown">
                  <li><a href="./shop-details.html">Shop Details</a></li>
                  <li><a href="./shoping-cart.html">Shoping Cart</a></li>
                  <li><a href="./checkout.html">Check Out</a></li>
                  <li><a href="./blog-details.html">Blog Details</a></li>
                </ul>
              </li>
              <li><a href="./blog.html">Blog</a></li>
              <li><a href="./contact.html">Contact</a></li>
            </ul>
          </nav>
          <div className="header__top__right__auth">
            <a href="#"><i className="fa fa-user"></i> Login</a>
          </div>
        </div>
      </div>
    );
}

export default Humberger;