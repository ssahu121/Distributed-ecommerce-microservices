import { useParams } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../context/CartContext";
import "./ProductDetails.css";

function ProductDetails() {

  const { id } = useParams();

  const { addToCart } = useCart();

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return <h2 style={{ textAlign: "center" }}>Product Not Found</h2>;
  }

  return (
    <div className="details-container">

      <div className="details-left">

        <img src={product.image} alt={product.name} />

      </div>

      <div className="details-right">

        <h2>{product.name}</h2>

        <div className="rating">
          ⭐ {product.rating}
        </div>

        <h1>₹{product.price}</h1>

        <p className="old-price">
          ₹{product.oldPrice}
        </p>

        <span className="discount">
          {product.discount}
        </span>

        <hr />

        <h4>Description</h4>

        <p>
          Premium quality product with excellent performance and
          one year brand warranty. Fast delivery and easy returns.
        </p>

        <h4>Highlights</h4>

        <ul>
          <li>Original Brand Product</li>
          <li>1 Year Warranty</li>
          <li>Cash on Delivery Available</li>
          <li>7 Days Easy Return</li>
        </ul>

        <div className="btn-group">

          <button
            className="add-btn"
            onClick={() => addToCart(product)}
          >
            Add To Cart
          </button>

          <button className="buy-btn">
            Buy Now
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductDetails;