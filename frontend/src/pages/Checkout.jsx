import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";
import myQR from "../assets/myqr.png";
function Checkout() {
  const { cart, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    address: "",
    phone: "",
  });

  const [payment, setPayment] = useState("upi");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleOrder = () => {
    if (!form.name || !form.address || !form.phone) {
      alert("Please fill all details");
      return;
    }

    const order = {
      id: Date.now(),
      items: cart,
      total: totalPrice,
      payment,
      customer: form,
      date: new Date().toLocaleString(),
    };

    const old = JSON.parse(localStorage.getItem("orders")) || [];
    localStorage.setItem("orders", JSON.stringify([...old, order]));

    clearCart();
    navigate("/success");
  };

  return (
    <div className="checkout-bg">
      <h1 className="title">Secure Checkout</h1>

      <div className="checkout-container">
        {/* LEFT SIDE */}
        <div className="card left">
          <h2>Delivery Details</h2>

          <input name="name" placeholder="Full Name" onChange={handleChange} />
          <input
            name="address"
            placeholder="Full Address"
            onChange={handleChange}
          />
          <input
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
          />

          <h3>Payment Method</h3>

          <div className="payment-box">
            <label>
              <input
                type="radio"
                checked={payment === "upi"}
                onChange={() => setPayment("upi")}
              />
              UPI / QR Scan
            </label>

            <label>
              <input
                type="radio"
                checked={payment === "card"}
                onChange={() => setPayment("card")}
              />
              Card
            </label>

            <label>
              <input
                type="radio"
                checked={payment === "cod"}
                onChange={() => setPayment("cod")}
              />
              Cash on Delivery
            </label>
          </div>

          {/* UPI QR */}
          {payment === "upi" && (
            <div className="qr-box">
              <h4>Scan & Pay</h4>

              {/* 🔥 PLACEHOLDER QR (you will replace later) */}
              <img src={myQR} alt="UPI QR" className="upi-qr" />

              <p>Scan using any UPI app (PhonePe, GPay, Paytm)</p>
            </div>
          )}

          {/* CARD */}
          {payment === "card" && (
            <div className="card-box">
              <input placeholder="Card Number" />
              <input placeholder="MM/YY" />
              <input placeholder="CVV" />
            </div>
          )}

          {/* COD */}
          {payment === "cod" && (
            <div className="cod">You will pay after delivery 🚚</div>
          )}

          <button className="pay-btn" onClick={handleOrder}>
            Place Order ₹{totalPrice.toLocaleString("en-IN")}
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="card right">
          <h2>Order Summary</h2>

          <div className="items">
            {cart.map((item) => (
              <div className="item" key={item.id}>
                <span>{item.name}</span>
                <span>
                  ₹{item.price.toLocaleString("en-IN")} × {item.quantity}
                </span>
              </div>
            ))}
          </div>

          <hr />

          <div className="total">
            <h2>Total: ₹{totalPrice.toLocaleString("en-IN")}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
