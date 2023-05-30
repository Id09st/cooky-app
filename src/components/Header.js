import React, { Component } from 'react'
import Modal from "react-responsive-modal";


export default class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
        sign: false,
        login: false,

    }
}

onOpenModal = () => {
    this.setState({ sign: true });
};

onOpenModalLogin = () => {
    this.setState({ login: true });
};

onCloseModal = () => {
    this.setState({ sign: false });
};

onCloseModalclose = () => {
    this.setState({ login: false });
};

  render() {
    const { login, sign } = this.state;
    return (
      <>
      <header className="header">
        <div className="container">
          <div className="row">
            <div class="col-lg-3">
                      <div class="header__logo">
                          <a href="./index.html"><img src="img/logo.png" alt="" /></a>
                      </div>
                  </div>
            <div className="col-lg-7">
              <nav className="header__menu">
                <ul>
                  <li className="active"><a href="./index.html">Home</a></li>
                  <li><a href="./shop-grid.html">Shop</a></li>
                  <li>
                    <a href="#">Pages</a>
                    <ul className="header__menu__dropdown">
                      <li><a href="./shop-details.html">Shop Details</a></li>
                      <li><a href="./shoping-cart.html">Shopping Cart</a></li>
                      <li><a href="./checkout.html">Check Out</a></li>
                    </ul>
                  </li>
                  <li><a href="./contact.html">Contact</a></li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-2">
              <nav className="header__menu">
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <button className="btn btn-primary-outline" id="signup" onClick={this.onOpenModal}>SignUp</button>
                </li>
                <li>
                  <button className="btn btn-primary-outline" id="login" onClick={this.onOpenModalLogin}>Login</button>
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
      <Modal open={sign} onClose={this.onCloseModal}>
        <div className="modal-body">
          <h2>Get Started Absolutely<span> Free!</span></h2>
              <span className="subtitle">No credit card needed</span>
                <form className="contact-form form-validate3" novalidate="novalidate">
                <div className="form-group">
                  <input className="form-control" type="text" name="name" id="name" placeholder="First Name" required="" autocomplete="off" aria-required="true" />
                </div>

        <div className="form-group">
          <input className="form-control" type="email" name="email" placeholder="E-mail" required="" autocomplete="off" aria-required="true" />
        </div>
                            <div className="form-group">
                                <input type="password" name="pass" className="form-control" placeholder="Password" required="" autocomplete="off" aria-required="true" />
                            </div>
                            <input className="btn btn-md btn-primary btn-center" id="sign_up" type="button" value="Sign Up" />
                        </form>
                    </div>
                </Modal>

                {/* <!-- signUp End -->
                  <!-- login --> */}

                <Modal open={login} onClose={this.onCloseModalclose}>
                
                    <div className="modal-body">
                        <h2>Login and Get <span>Started</span></h2>
                        <span className="subtitle">Just fill in the form below</span>
                        <form className="contact-form form-validate4" novalidate="novalidate">
                            <div className="form-group">
                                <input className="form-control" type="email" name="email" placeholder="E-mail" required="" autocomplete="off" aria-required="true" />
                            </div>
                            <div className="form-group">
                                <input type="password" name="pass" className="form-control" placeholder="Password" required="" autocomplete="off" aria-required="true" />
                            </div>
                            <input className="btn btn-md btn-primary btn-center" id="login_btn" type="button" value="Login" />
                        </form>
                    </div>
                </Modal>
      </>
    );
  }
}
