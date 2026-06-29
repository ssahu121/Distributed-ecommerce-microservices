import React from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaTrash } from "react-icons/fa";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";
import "./Wishlist.css";

function Wishlist() {
  const {
    wishlist,
    removeFromWishlist,
  } = useWishlist();

  const { addToCart } = useCart();

  return (
    <div className="wishlist-page">

      <div className="container">

        <h2 className="wishlist-title">
          <FaHeart /> My Wishlist
        </h2>

        {wishlist.length === 0 ? (

          <div className="empty-wishlist">

            <img
              src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
              alt=""
            />

            <h3>Your Wishlist is Empty</h3>

            <p>
              Save your favourite products here.
            </p>

            <Link to="/products" className="shop-btn">
              Continue Shopping
            </Link>

          </div>

        ) : (

          <div className="wishlist-grid">

            {wishlist.map((product) => (

              <div
                className="wishlist-card"
                key={product.id}
              >

                <img
                  src={product.image}
                  alt={product.name}
                />

                <h4>{product.name}</h4>

                <p className="price">
                  ₹{product.price}
                </p>

                <div className="wishlist-buttons">

                  <button
                    className="cart-btn"
                    onClick={() => addToCart(product)}
                  >
                    <FaShoppingCart />
                    Add to Cart
                  </button>

                  <button
                    className="remove-btn"
                    onClick={() =>
                      removeFromWishlist(product.id)
                    }
                  >
                    <FaTrash />
                  </button>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>
  );
}

export default Wishlist;