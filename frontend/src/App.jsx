import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./layout/Layout";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>

        <Routes>

          {/* ALL PAGES WITH SAME HEADER + FOOTER */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="cart" element={<Cart />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route>

        </Routes>

      </BrowserRouter>
    </CartProvider>
  );
}

export default App;