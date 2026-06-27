import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        <div className="footer-box">
          <h2 className="footer-logo">ShopEase</h2>
          <p>
            ShopEase is your one-stop destination for Electronics, Fashion,
            Beauty, Home Appliances and much more. Quality products at the best
            prices with fast delivery.
          </p>

          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>

        <div className="footer-box">
          <h4>Quick Links</h4>

          <a href="/">Home</a>
          <a href="/products">Products</a>
          <a href="/cart">Cart</a>
          <a href="/login">Login</a>
          <a href="/signup">Signup</a>
        </div>

        <div className="footer-box">
          <h4>Categories</h4>

          <a href="#">Mobiles</a>
          <a href="#">Laptops</a>
          <a href="#">Fashion</a>
          <a href="#">Beauty</a>
          <a href="#">Electronics</a>
        </div>

        <div className="footer-box">
          <h4>Customer Support</h4>

          <a href="#">Help Center</a>
          <a href="#">Shipping</a>
          <a href="#">Returns</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>

        <div className="footer-box">
          <h4>Contact Us</h4>

          <p><FaMapMarkerAlt /> Noida, Uttar Pradesh, India</p>
          <p><FaPhoneAlt /> +91 9876543210</p>
          <p><FaEnvelope /> support@shopease.com</p>

          <div className="newsletter">
            <input
              type="email"
              placeholder="Enter your email"
            />
            <button>Subscribe</button>
          </div>

        </div>

      </div>

      <hr />

      <div className="footer-bottom">

        <p>
          © 2026 <strong>ShopEase</strong>. All Rights Reserved.
        </p>

        <p>
          Designed with ❤️ using React & Bootstrap
        </p>

      </div>

    </footer>
  );
}

export default Footer;