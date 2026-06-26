import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Cart() {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } =
    useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <>
      <Navbar />

      <div className="container my-5">
  <div className="row">

    {/* Left Side */}
    <div className="col-lg-8">
      <h2 className="fw-bold mb-4">Shopping Cart</h2>

      {cartItems.map((item) => (
        <div className="card shadow-sm border-0 mb-4 p-3" key={item.id}>
          <div className="row align-items-center">

            <div className="col-md-3 text-center">
              <img
                src={item.image}
                alt={item.title}
                className="img-fluid"
                style={{ height: "180px", objectFit: "contain" }}
              />
            </div>

            <div className="col-md-5">
              <h5>{item.title}</h5>
              <h4 className="text-success">
                ₹{item.price}
              </h4>
            </div>

            <div className="col-md-4">

              <div className="d-flex align-items-center mb-3">
                <button
                  className="btn btn-outline-dark"
                  onClick={() => decreaseQuantity(item.id)}
                >
                  -
                </button>

                <span className="mx-3 fw-bold">
                  {item.quantity}
                </span>

                <button
                  className="btn btn-outline-dark"
                  onClick={() => increaseQuantity(item.id)}
                >
                  +
                </button>
              </div>

              <button
                className="btn btn-danger"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>

            </div>

          </div>
        </div>
      ))}
    </div>

    {/* Right Side Summary */}

    <div className="col-lg-4">

      <div
        className="card shadow border-0 p-4 sticky-top"
        style={{ top: "100px" }}
      >
        <h4 className="fw-bold mb-3">
          Order Summary
        </h4>

        <div className="d-flex justify-content-between">
          <span>Subtotal</span>
          <span>₹{totalPrice.toFixed(2)}</span>
        </div>

        <div className="d-flex justify-content-between mt-2">
          <span>Delivery</span>
          <span className="text-success">
            FREE
          </span>
        </div>

        <hr />

        <div className="d-flex justify-content-between">
          <h5>Total</h5>
          <h5>₹{totalPrice.toFixed(2)}</h5>
        </div>

        <button className="btn btn-warning w-100 mt-4">
          Proceed To Checkout
        </button>

      </div>

    </div>

  </div>
</div>
      <Footer />
    </>
  );
}

export default Cart;