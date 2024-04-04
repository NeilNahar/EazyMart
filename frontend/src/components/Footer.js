const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-upper">
        <div className="footer-upper-left">
          <h2>EazyMart</h2>
          <p>
          Welcome to EazyMart, your one-stop shop for all your needs! Discover a
  diverse selection of products and enjoy the convenience of doorstep
  delivery. With our user-friendly interface and secure payment options, shopping
  has never been easier. 
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
            <p>contact@easzymart.com</p>
          </div>
        </div>
      </div>
      <div className="footer-lower">
      Copyright © 2024 EazyMart. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
