import { Link } from "react-router-dom";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const { cartItems } = useContext(CartContext);

  return (
    <>
      {/* Top Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
        <Link className="navbar-brand fw-bold fs-3" to="/">
          ShopEasy
        </Link>

        <div className="mx-auto w-50">
          <input
            type="text"
            className="form-control"
            placeholder="Search products..."
          />
        </div>

        <div className="d-flex gap-3">
          <Link className="btn btn-outline-light" to="/login">
            <FaUser /> Login
          </Link>

          <Link className="btn btn-warning" to="/register">
            Signup
          </Link>

          <Link className="btn btn-light position-relative" to="/cart">
            <FaShoppingCart />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {cartItems.length}
            </span>
          </Link>
        </div>
      </nav>

      {/* Category Navbar */}
      <div className="bg-primary text-white py-2">
        <div className="container d-flex justify-content-center gap-5">

           <Link className="text-white text-decoration-none" to="/">
            Home
          </Link>
          
          <Link className="text-white text-decoration-none" to="/">
            Electronics
          </Link>

          <Link className="text-white text-decoration-none" to="/">
            Fashion
          </Link>

          <Link className="text-white text-decoration-none" to="/">
            Mobiles
          </Link>

          <Link className="text-white text-decoration-none" to="/">
            Beauty
          </Link>

          <Link className="text-white text-decoration-none" to="/">
            Grocery
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;