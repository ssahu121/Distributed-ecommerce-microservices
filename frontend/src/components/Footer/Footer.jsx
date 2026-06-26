import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-box">
          <h2 className="logo">ShopX</h2>
          <p>
            Your one-stop destination for mobiles, gadgets,
            fashion & lifestyle products at best prices.
          </p>
        </div>

        {/* Links */}
        <div className="footer-box">
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="/products">Products</a>
          <a href="/cart">Cart</a>
          <a href="/login">Login</a>
        </div>

        {/* Support */}
        <div className="footer-box">
          <h3>Support</h3>
          <a href="#">Contact Us</a>
          <a href="#">Help Center</a>
          <a href="#">Shipping Info</a>
          <a href="#">Returns</a>
        </div>

        {/* Contact */}
        <div className="footer-box">
          <h3>Contact</h3>
          <p>Email: support@shopx.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>India</p>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} ShopX. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;