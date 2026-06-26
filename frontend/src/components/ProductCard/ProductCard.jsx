import "./ProductCard.css";
import { FaHeart, FaStar, FaShoppingCart } from "react-icons/fa";
import { useCart } from "../../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="product-card">

      <span className="discount">{product.discount}</span>

      <button className="wishlist">
        <FaHeart />
      </button>

      <img src={product.image} alt={product.name} />

      <h5>{product.name}</h5>

      <div className="rating">
        <FaStar className="text-warning" />
        {product.rating}
      </div>

      <div className="price">
        <span className="new-price">₹{product.price}</span>
        <span className="old-price">₹{product.oldPrice}</span>
      </div>

      {/* ✅ FIXED BUTTON */}
      <button
        className="cart-btn"
        onClick={() => addToCart(product)}
      >
        <FaShoppingCart />
        Add To Cart
      </button>

    </div>
  );
}

export default ProductCard;