import React from "react";
import { Link } from "react-router-dom";

function Products() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>Products</h1>

      <div
        style={{
          width: "250px",
          border: "1px solid #ccc",
          borderRadius: "10px",
          padding: "20px",
        }}
      >
        <img
          src="https://via.placeholder.com/200"
          alt="Product"
          style={{ width: "100%" }}
        />

        <h3>iPhone 16</h3>

        <p>₹79,999</p>

        <Link to="/product/1">
          <button>View Details</button>
        </Link>
      </div>
    </div>
  );
}

export default Products;