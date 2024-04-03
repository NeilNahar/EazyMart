const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-upper">
        <div className="footer-upper-left">
          <h2>FoodDash</h2>
          <p>
            Welcome to FoodDash, your ultimate destination for delicious meals
            delivered right to your doorstep! Explore our wide range of cuisines
            and satisfy your cravings with ease. Order now and experience
            convenience and flavor in every bite with FoodDash!
          </p>
          <div>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-twitter"></i>
          </div>
        </div>
        <div className="footer-upper-center">
          <h3>Company</h3>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-upper-right">
          <h3>Get In Touch</h3>
          <div>
            <p>+1(987)876-7654</p>
            <p>contact@fooddash.com</p>
          </div>
        </div>
      </div>
      <div className="footer-lower">
      Copyright © 2024 FoodDash. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
