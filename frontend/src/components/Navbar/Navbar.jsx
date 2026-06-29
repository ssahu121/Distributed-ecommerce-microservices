import React from "react";
import { Link } from "react-router-dom";

import {
  FaShoppingCart,
  FaHeart,
  FaSearch,
  FaUserCircle,
} from "react-icons/fa";

import "./Navbar.css";

import { useCart } from "../../context/CartContext";
import { useSearch } from "../../context/SearchContext";
import { useWishlist } from "../../context/WishlistContext";
function Navbar() {
  const { cartCount } = useCart();
  const { wishlist } = useWishlist();
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

            {/* Wishlist */}

            <li className="nav-item">
              <Link className="nav-link position-relative" to="/wishlist">
                <FaHeart size={22} />

                <span className="wishlist-badge">{wishlist.length}</span>
              </Link>
            </li>

            {/* Cart */}

            <li className="nav-item">
              <Link className="nav-link position-relative" to="/cart">
                <FaShoppingCart size={22} />

                <span className="cart-badge">{cartCount}</span>
              </Link>
            </li>

            {/* Profile */}
            

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                <FaUserCircle size={24} />
              </a>

              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <Link className="dropdown-item" to="/orders">
                    My Orders
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/wishlist">
                    Wishlist
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/login">
                    Login
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/signup">
                    Signup
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
