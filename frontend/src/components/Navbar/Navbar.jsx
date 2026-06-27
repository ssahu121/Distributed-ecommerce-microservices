import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaHeart, FaSearch } from "react-icons/fa";
import "./Navbar.css";

import { useCart } from "../../context/CartContext";
import { useSearch } from "../../context/SearchContext";
function Navbar() {
  const { cartCount } = useCart();
  const { search, setSearch } = useSearch();
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
          {/* <form className="d-flex mx-auto search-box"> */}
          <form
            className="d-flex mx-auto search-box"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              className="form-control"
              type="search"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="btn btn-warning ms-2">
              <FaSearch />
            </button>
          </form>

          {/* Menu */}
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/orders">
                My Orders
              </Link>
            </li>
            {/* AUTH BUTTONS */}
            <div className="auth-buttons">
              <Link to="/login" className="login-btn">
                Login
              </Link>

              <Link to="/signup" className="signup-btn">
                Signup
              </Link>
            </div>

            <li className="nav-item">
              <Link className="nav-link icon" to="#">
                <FaHeart />
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link position-relative" to="/cart">
                <FaShoppingCart size={22} />

                <span className="cart-badge">{cartCount}</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
