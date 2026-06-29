import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

function Cart() {
  const navigate = useNavigate();

  const {
    cart,
    increaseQty,
    decreaseQty,
    removeFromCart,
    totalPrice,
  } = useCart();

  const deliveryCharge = cart.length > 0 ? 40 : 0;
  const finalAmount = totalPrice + deliveryCharge;

  return (
    <div className="cart-page">

      {/* LEFT SIDE */}
      <div className="cart-left">

        <h2 className="title">🛒 My Cart</h2>

        {cart.length === 0 ? (
          <div className="empty">
            <h3>Your cart is empty 😢</h3>
          </div>
        ) : (
          cart.map((item) => (
            <div className="cart-card" key={item.id}>

              <img src={item.image} alt={item.name} />

              <div className="cart-info">
                <h4>{item.name}</h4>
                <p className="price">₹{item.price}</p>

                <div className="qty-box">
                  <button onClick={() => decreaseQty(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQty(item.id)}>+</button>
                </div>

                <button
                  className="remove"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>

            </div>
          ))
        )}
      </div>

      {/* RIGHT SIDE - BILL */}
      <div className="cart-right">

        <h3>PRICE DETAILS</h3>

        <div className="bill">
          <div>
            <span>Price ({cart.length} items)</span>
            <span>₹{totalPrice.toLocaleString("en-IN")}</span>
          </div>

          <div>
            <span>Delivery Charges</span>
            <span>₹{deliveryCharge.toLocaleString("en-IN")}</span>
          </div>

          <hr />

          <div className="total">
            <span>Total Amount</span>
            <span>₹{finalAmount.toLocaleString("en-IN")}</span>
          </div>
        </div>

        <button
          className="checkout-btn"
          onClick={() => navigate("/checkout")}
        >
          Proceed to Checkout
        </button>

      </div>

    </div>
  );
}

export default Cart;