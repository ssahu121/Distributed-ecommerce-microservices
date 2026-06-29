import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaTruck,
  FaUndo,
  FaLock,
  FaHeadset,
} from "react-icons/fa";

function Footer() {
  return (
    <>
      {/* Features */}

      <section className="footer-top">

        <div className="container">

          <div className="row">

            <div className="col-md-3">
              <div className="feature-box">
                <FaTruck />
                <h5>Free Shipping</h5>
                <p>Orders above ₹999</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="feature-box">
                <FaUndo />
                <h5>Easy Returns</h5>
                <p>7 Days Return Policy</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="feature-box">
                <FaLock />
                <h5>Secure Payment</h5>
                <p>100% Safe Payment</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="feature-box">
                <FaHeadset />
                <h5>24×7 Support</h5>
                <p>Always Available</p>
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* Footer */}

      <footer className="footer">

        <div className="container">

          <div className="row">

            <div className="col-md-3">
              <h4>ShopEase</h4>
              <p>
                Your one-stop destination for electronics,
                fashion, beauty and much more.
              </p>
            </div>

            <div className="col-md-3">
              <h5>Quick Links</h5>

              <ul>
                <li>Home</li>
                <li>Products</li>
                <li>Cart</li>
                <li>Orders</li>
              </ul>
            </div>

            <div className="col-md-3">

              <h5>Customer Service</h5>

              <ul>
                <li>Help Center</li>
                <li>Returns</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>

            </div>

            <div className="col-md-3">

              <h5>Follow Us</h5>

              <div className="social">

                <FaFacebookF />
                <FaInstagram />
                <FaTwitter />
                <FaLinkedin />
                <FaGithub />

              </div>

              <div className="payments">

                <FaCcVisa />
                <FaCcMastercard />
                <FaCcPaypal />

              </div>

            </div>

          </div>

          <hr />

          <p className="copyright">
            © 2026 ShopEase | Designed by Shivam Sahu ❤️
          </p>

        </div>

      </footer>
    </>
  );
}

export default Footer;