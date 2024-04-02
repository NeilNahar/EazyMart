import React from "react";

const Navbar = () => {
  return (
    <div className="header">
      <div className="navbar">
        <div className="logo">FoodDash</div>
        <ul>
          <li>Home</li>
          <li>Menu</li>
          <li>MobileAPP</li>
          <li>Contact Us</li>
        </ul>
        <div className="navbar-search">
          <input type="text" />
          <div>
            <i class="fa-solid fa-cart-shopping"></i>
            <div className="counter"></div>
          </div>
          <button>Sign In</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
