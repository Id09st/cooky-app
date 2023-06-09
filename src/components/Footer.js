import React from "react";

const Footer = () => {
  return (
    <footer className="footer spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="footer__about">
              <ul>
                <li>Address: 60-49 Road 11378 New York</li>
                <li>Phone: +65 11.188.888</li>
                <li>Email: hello@colorlib.com</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="footer__widget">
              <h6>Join Our Newsletter Now</h6>
              <p>
                Get E-mail updates about our latest shop and special offers.
              </p>
              <form action="#">
                <input type="text" placeholder="Enter your mail"></input>
                <button type="submit" className="site-btn">
                  Subscribe
                </button>
              </form>
              <div className="footer__widget__social">
                <a href="#">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="#">
                  <i className="fa fa-google-plus"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container text-center">
        <div className="footer__copyright">
          <div className="footer__copyright__text__center">
            <p>
              Copyright &copy;
              <script>document.write(new Date().getFullYear());</script>
              All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
