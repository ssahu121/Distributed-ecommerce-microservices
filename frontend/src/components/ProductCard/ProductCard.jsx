import "./ProductCard.css";
import { FaHeart, FaStar, FaShoppingCart } from "react-icons/fa";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { useWishlist } from "../../context/WishlistContext";
import { useNavigate } from "react-router-dom";
function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { addToWishlist, isInWishlist } = useWishlist();
  const navigate = useNavigate();
  return (
    <div className="product-card">
      <span className="discount">{product.discount}</span>

      <button
        className={`wishlist ${isInWishlist(product.id) ? "active" : ""}`}
        onClick={(e) => {
          e.preventDefault(); // Link par click hone se bachayega
          e.stopPropagation();
          addToWishlist(product);
        }}
      >
        <FaHeart />
      </button>

      <Link to={`/product/${product.id}`} className="product-image">
        <img
          src={
            product.image || "https://via.placeholder.com/250x250?text=No+Image"
          }
          alt={product.name}
        />
      </Link>
      <Link
        to={`/product/${product.id}`}
        style={{ textDecoration: "none", color: "#222" }}
      >
        <h5>{product.name}</h5>
      </Link>

      <div className="rating">
        <FaStar />
        <span>{product.rating || "4.5"}</span>
      </div>

      <div className="price">
        <span className="new-price">
          ₹{product.price.toLocaleString("en-IN")}
        </span>

        <span className="old-price">
          ₹{(product.oldPrice || product.price).toLocaleString("en-IN")}
        </span>
      </div>

      <div className="discount-badge">
        <span className="discount">
          {product.discount ? `${product.discount}% OFF` : "NEW"}
        </span>
      </div>

      {/* ✅ FIXED BUTTON */}
      <button className="cart-btn" onClick={() => addToCart(product)}>
        <FaShoppingCart />
        <span>ADD TO CART</span>
      </button>

      <button
        className="buy-btn"
        onClick={() => {
          addToCart(product);
          navigate("/checkout");
        }}
      >
        BUY NOW
      </button>
    </div>
  );
}

export default ProductCard;
