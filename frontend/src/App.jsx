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
import OrderHistory from "./pages/OrderHistory";
import ProtectedRoute from "./routes/ProtectedRoute";
import { WishlistProvider } from "./context/WishlistContext";
import Wishlist from "./pages/Wishlist";

// ===================== ADMIN IMPORTS =====================
import AdminLayout from "./admin/layout/AdminLayout";
import Dashboard from "./admin/pages/Dashboard";
import AdminProducts from "./admin/pages/Products";
import AddProduct from "./admin/pages/AddProduct";
import Orders from "./admin/pages/Orders";
import Users from "./admin/pages/Users";
// ========================================================

function App() {
  return (
    <WishlistProvider>
      <CartProvider>
        <SearchProvider>
          <FilterProvider>
            <BrowserRouter>
              <Routes>

                {/* USER PAGES */}
                <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="products" element={<Products />} />
                  <Route path="cart" element={<Cart />} />
                  <Route path="login" element={<Login />} />
                  <Route path="signup" element={<Signup />} />
                  <Route path="product/:id" element={<ProductDetails />} />
                  <Route path="checkout" element={<Checkout />} />
                  <Route path="success" element={<Success />} />
                  <Route path="orders" element={<OrderHistory />} />
                  <Route path="wishlist" element={<Wishlist />} />
                </Route>

                {/* ADMIN PANEL */}
                <Route path="/admin" element={<AdminLayout />}>
                  <Route index element={<Dashboard />} />
                  <Route path="products" element={<AdminProducts />} />
                  <Route path="add-product" element={<AddProduct />} />
                  <Route path="orders" element={<Orders />} />
                  <Route path="users" element={<Users />} />
                </Route>

              </Routes>
            </BrowserRouter>
          </FilterProvider>
        </SearchProvider>
      </CartProvider>
    </WishlistProvider>
  );
}

export default App;