import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">FoodDash</Link>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a href="#menu">Menu</a>
        </li>
        <li>
          <a href="#mobile-app">MobileAPP</a>
        </li>
        <li>
          <a href="#footer">Contact Us</a>
        </li>
      </ul>
      <div className="navbar-search">
        <input type="text" />
        <div>
          <Link to="/cart">
            <i className="fa-solid fa-cart-shopping">
              <div className="cart-notification"></div>
            </i>
          </Link>
          <div className="counter"></div>
        </div>
        <button
          onClick={() => {
            props.setShowSignInSignUp((prev) => {
              return !prev;
            });
          }}
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
