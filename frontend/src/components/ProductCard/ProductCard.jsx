import "./ProductCard.css";
import { FaHeart, FaStar, FaShoppingCart } from "react-icons/fa";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <span className="discount">{product.discount}</span>

      <button className="wishlist">
        <FaHeart />
      </button>

      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.name} />
      </Link>

      <Link
        to={`/product/${product.id}`}
        style={{ textDecoration: "none", color: "#222" }}
      >
        <h5>{product.name}</h5>
      </Link>

      <div className="rating">
        <FaStar className="text-warning" />
        {product.rating}
      </div>

      <div className="price">
        <span className="new-price">₹{product.price}</span>
        <span className="old-price">₹{product.oldPrice}</span>
      </div>

      {/* ✅ FIXED BUTTON */}
      <button className="cart-btn" onClick={() => addToCart(product)}>
        <FaShoppingCart />
        Add To Cart
      </button>
    </div>
  );
}

export default ProductCard;
