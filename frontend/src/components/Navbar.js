import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">FoodDash</div>
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
          <i className="fa-solid fa-cart-shopping">
            <div className="cart-notification"></div>
          </i>
          <div className="counter"></div>
        </div>
        <button>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
