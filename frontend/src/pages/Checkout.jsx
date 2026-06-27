import { useCart } from "../context/CartContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    address: "",
    phone: "",
  });

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleOrder = () => {
    if (!form.name || !form.address || !form.phone) {
      alert("Please fill all details");
      return;
    }

    clearCart();
    navigate("/success");
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>

      <input
        name="name"
        placeholder="Name"
        onChange={handleChange}
      />
      <input
        name="address"
        placeholder="Address"
        onChange={handleChange}
      />
      <input
        name="phone"
        placeholder="Phone"
        onChange={handleChange}
      />

      <h3>Total: ₹{total}</h3>

      <button onClick={handleOrder}>
        Place Order
      </button>
    </div>
  );
}

export default Checkout;