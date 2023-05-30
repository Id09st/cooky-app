import React from "react";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="hero__categories">
              <div className="hero__categories__all">
                <i className="fa fa-bars"></i>
                <span>All departments</span>
              </div>
              <ul>
                <li>
                  <a href="#">Fresh Meat</a>
                </li>
                <li>
                  <a href="#">Vegetables</a>
                </li>
                <li>
                  <a href="#">Fruit & Nut Gifts</a>
                </li>
                <li>
                  <a href="#">Fresh Berries</a>
                </li>
                <li>
                  <a href="#">Ocean Foods</a>
                </li>
                <li>
                  <a href="#">Butter & Eggs</a>
                </li>
                <li>
                  <a href="#">Fastfood</a>
                </li>
                <li>
                  <a href="#">Fresh Onion</a>
                </li>
                <li>
                  <a href="#">Papayaya & Crisps</a>
                </li>
                <li>
                  <a href="#">Oatmeal</a>
                </li>
                <li>
                  <a href="#">Fresh Bananas</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="hero__search">
              <div className="hero__search__form">
                <form action="#">
                  <div className="hero__search__categories">
                    All Categories
                    <span className="arrow_carrot-down"></span>
                  </div>
                  <input type="text" placeholder="What do you need?" />
                  <button type="submit" className="site-btn">
                    SEARCH
                  </button>
                </form>
              </div>
              <div className="hero__search__phone">
                <div className="hero__search__phone__text">
                  <div className="header__cart">
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
                </div>
              </div>
            </div>
            
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
