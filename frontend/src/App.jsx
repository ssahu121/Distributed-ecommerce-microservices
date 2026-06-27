import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./layout/Layout";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProductDetails from "./pages/ProductDetails";
import { FilterProvider } from "./context/FilterContext";
import { CartProvider } from "./context/CartContext";
import { SearchProvider } from "./context/SearchContext";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";
function App() {
  return (
    <CartProvider>
      <SearchProvider>
        <FilterProvider>
          <BrowserRouter>
            <Routes>
              {/* ALL PAGES WITH SAME HEADER + FOOTER */}
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="products" element={<Products />} />
                <Route path="cart" element={<Cart />} />
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<Signup />} />
                <Route path="product/:id" element={<ProductDetails />} />
                <Route path="checkout" element={<Checkout />} />
                <Route path="success" element={<Success />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </FilterProvider>
      </SearchProvider>
    </CartProvider>
  );
}

export default App;
