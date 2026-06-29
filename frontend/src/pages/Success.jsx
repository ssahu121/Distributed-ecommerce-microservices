import React from "react";
import { Link } from "react-router-dom";
import "./Success.css";

const recommended = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 1999,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 2999,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Gaming Mouse",
    price: 999,
    image: "https://via.placeholder.com/150",
  },
];

function Success() {
return (
  <div className="success-page">

    <div className="success-container">

      <div className="success-card">
        <div className="check">✔</div>

        <h1>Order Placed Successfully!</h1>
        <p>Thank you for shopping with us 💖</p>

        <Link className="btn" to="/products">
          Continue Shopping
        </Link>
      </div>

      <h2 className="rec-title">Recommended for you</h2>

      <div className="rec-grid">
        {recommended.map((item) => (
          <div key={item.id} className="rec-card">
            <img src={item.image} alt={item.name} />
            <h4>{item.name}</h4>
            <p>₹{item.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>

    </div>

  </div>
);
}

export default Success;