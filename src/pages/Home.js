import React from "react";

export default function Home() {
  return (
    <>
      <div className="col-lg-9">
        
        <div className="hero__item set-bg" data-setbg="img/hero/banner.jpg">
          <div className="hero__text">
            <span>FRUIT FRESH</span>
            <h2>
              Vegetable <br />
              100% Organic
            </h2>
            <p>Free Pickup and Delivery Available</p>
            <a href="#" className="primary-btn">
              SHOP NOW
            </a>
          </div>
        </div>
      </div>

      <section className="featured spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>Featured Product</h2>
              </div>
              <div className="featured__controls">
                <ul>
                  <li className="active" data-filter="*">
                    All
                  </li>
                  <li data-filter=".oranges">Oranges</li>
                  <li data-filter=".fresh-meat">Fresh Meat</li>
                  <li data-filter=".vegetables">Vegetables</li>
                  <li data-filter=".fastfood">Fastfood</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row featured__filter">
            <div className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
              <div className="featured__item">
                <div
                  className="featured__item__pic set-bg"
                  data-setbg="img/featured/feature-1.jpg"
                >
                  <ul className="featured__item__pic__hover">
                    <li>
                      <a href="#">
                        <i className="fa fa-heart"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-retweet"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-shopping-cart"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="featured__item__text">
                  <h6>
                    <a href="#">Crab Pool Security</a>
                  </h6>
                  <h5>$30.00</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="banner__pic">
                <img src="img/banner/banner-1.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="banner__pic">
                <img src="img/banner/banner-2.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="latest-product spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-6">
              <div class="latest-product__text">
                <h4>Latest Products</h4>
                <div class="latest-product__slider owl-carousel">
                  <div class="latest-prdouct__slider__item">
                    <a href="#" class="latest-product__item">
                      <div class="latest-product__item__pic">
                        <img src="img/latest-product/lp-1.jpg" alt=""></img>
                      </div>
                      <div class="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" class="latest-product__item">
                      <div class="latest-product__item__pic">
                        <img src="img/latest-product/lp-2.jpg" alt=""></img>
                      </div>
                      <div class="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" class="latest-product__item">
                      <div class="latest-product__item__pic">
                        <img src="img/latest-product/lp-3.jpg" alt=""></img>
                      </div>
                      <div class="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                  </div>
                  <div class="latest-prdouct__slider__item">
                    <a href="#" class="latest-product__item">
                      <div class="latest-product__item__pic">
                        <img src="img/latest-product/lp-1.jpg" alt=""></img>
                      </div>
                      <div class="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" class="latest-product__item">
                      <div class="latest-product__item__pic">
                        <img src="img/latest-product/lp-2.jpg" alt=""></img>
                      </div>
                      <div class="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" class="latest-product__item">
                      <div class="latest-product__item__pic">
                        <img src="img/latest-product/lp-3.jpg" alt=""></img>
                      </div>
                      <div class="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="latest-product__text">
                <h4>Top Rated Products</h4>
                <div class="latest-product__slider owl-carousel">
                  <div class="latest-prdouct__slider__item">
                    <a href="#" class="latest-product__item">
                      <div class="latest-product__item__pic">
                        <img src="img/latest-product/lp-1.jpg" alt=""></img>
                      </div>
                      <div class="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" class="latest-product__item">
                      <div class="latest-product__item__pic">
                        <img src="img/latest-product/lp-2.jpg" alt=""></img>
                      </div>
                      <div class="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" class="latest-product__item">
                      <div class="latest-product__item__pic">
                        <img src="img/latest-product/lp-3.jpg" alt=""></img>
                      </div>
                      <div class="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                  </div>
                  <div class="latest-prdouct__slider__item">
                    <a href="#" class="latest-product__item">
                      <div class="latest-product__item__pic">
                        <img src="img/latest-product/lp-1.jpg" alt=""></img>
                      </div>
                      <div class="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" class="latest-product__item">
                      <div class="latest-product__item__pic">
                        <img src="img/latest-product/lp-2.jpg" alt=""></img>
                      </div>
                      <div class="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" class="latest-product__item">
                      <div class="latest-product__item__pic">
                        <img src="img/latest-product/lp-3.jpg" alt=""></img>
                      </div>
                      <div class="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="latest-product__text">
                <h4>Review Products</h4>
                <div class="latest-product__slider owl-carousel">
                  <div class="latest-prdouct__slider__item">
                    <a href="#" class="latest-product__item">
                      <div class="latest-product__item__pic">
                        <img src="img/latest-product/lp-1.jpg" alt=""></img>
                      </div>
                      <div class="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" class="latest-product__item">
                      <div class="latest-product__item__pic">
                        <img src="img/latest-product/lp-2.jpg" alt=""></img>
                      </div>
                      <div class="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" class="latest-product__item">
                      <div class="latest-product__item__pic">
                        <img src="img/latest-product/lp-3.jpg" alt=""></img>
                      </div>
                      <div class="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                  </div>
                  <div class="latest-prdouct__slider__item">
                    <a href="#" class="latest-product__item">
                      <div class="latest-product__item__pic">
                        <img src="img/latest-product/lp-1.jpg" alt=""></img>
                      </div>
                      <div class="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" class="latest-product__item">
                      <div class="latest-product__item__pic">
                        <img src="img/latest-product/lp-2.jpg" alt=""></img>
                      </div>
                      <div class="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" class="latest-product__item">
                      <div class="latest-product__item__pic">
                        <img src="img/latest-product/lp-3.jpg" alt=""></img>
                      </div>
                      <div class="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
