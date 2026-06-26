import React from "react";
import { Link } from "react-router-dom";

function ProductDetails() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>Product Details</h1>

      <img
        src="https://via.placeholder.com/300"
        alt="Product"
      />

      <h2>iPhone 16</h2>

      <h3>₹79,999</h3>

      <p>
        Apple iPhone 16 with A18 Chip, Super Retina Display,
        48MP Camera and Long Battery Life.
      </p>

      <Link to="/cart">
        <button>Add To Cart</button>
      </Link>
    </div>
  );
}

export default ProductDetails;