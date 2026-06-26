import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaHeart, FaUser, FaSearch } from "react-icons/fa";
import "./Navbar.css";
import { useCart } from "../../context/CartContext";

function Navbar() {
  const { cartCount } = useCart();

  return (
    <nav className="navbar navbar-expand-lg custom-navbar sticky-top">
      <div className="container-fluid px-4">

        {/* Logo */}
        <Link className="navbar-brand logo" to="/">
          ShopEase
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">

          {/* Search */}
          <form className="d-flex mx-auto search-box">
            <input
              className="form-control"
              type="search"
              placeholder="Search products..."
            />
            <button className="btn btn-warning ms-2">
              <FaSearch />
            </button>
          </form>

          {/* Menu */}
          <ul className="navbar-nav ms-auto align-items-center">

            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/products">Products</Link>
            </li>
 {/* AUTH BUTTONS */}
      <div className="auth-buttons">
        <a href="/login" className="login-btn">Login</a>
        <a href="/signup" className="signup-btn">Signup</a>
      </div>

            <li className="nav-item">
              <Link className="nav-link icon" to="#">
                <FaHeart />
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link position-relative" to="/cart">
                <FaShoppingCart size={22} />

                <span className="cart-badge">
                  {cartCount}
                </span>
              </Link>
            </li>

          </ul>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;