import React from "react";
import { useCart } from "../context/CartContext";

function Cart() {
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
    <div style={{ display: "flex", gap: "20px", padding: "20px" }}>

      {/* LEFT SIDE - CART ITEMS */}
      <div style={{ flex: 2 }}>

        <h2>Your Cart 🛒</h2>

        {cart.length === 0 ? (
          <h3>Cart is Empty</h3>
        ) : (
          cart.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                gap: "15px",
                padding: "10px",
                marginBottom: "10px",
                border: "1px solid #ddd",
                borderRadius: "10px",
                alignItems: "center",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{ width: "80px", height: "80px", objectFit: "contain" }}
              />

              <div style={{ flex: 1 }}>
                <h4>{item.name}</h4>
                <p>₹{item.price}</p>

                <div>
                  <button onClick={() => decreaseQty(item.id)}>-</button>
                  <span style={{ margin: "0 10px" }}>{item.quantity}</span>
                  <button onClick={() => increaseQty(item.id)}>+</button>
                </div>

                <button onClick={() => removeFromCart(item.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* RIGHT SIDE - BILL */}
      <div
        style={{
          flex: 1,
          border: "1px solid #ddd",
          padding: "20px",
          borderRadius: "10px",
          height: "fit-content",
          position: "sticky",
          top: "20px",
          background: "#fff",
        }}
      >
        <h3>PRICE DETAILS</h3>
        <hr />

        <p>Price ({cart.length} items): ₹{totalPrice}</p>
        <p>Delivery Charges: ₹{deliveryCharge}</p>

        <hr />

        <h2>Total Amount: ₹{finalAmount}</h2>

        <button
          style={{
            width: "100%",
            padding: "12px",
            background: "#2874f0",
            color: "white",
            border: "none",
            borderRadius: "8px",
            marginTop: "10px",
            cursor: "pointer",
          }}
        >
          Proceed to Payment
        </button>
      </div>

    </div>
  );
}

export default Cart;