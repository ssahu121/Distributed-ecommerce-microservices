import React, { useEffect, useState } from "react";
import Hero from "../components/Hero/Hero";
import Categories from "../components/Categories/Categories";
import ProductCard from "../components/ProductCard/ProductCard";
import { useSearch } from "../context/SearchContext";
import { getProducts } from "../services/productService";
import "./Home.css";

function Home() {
 
  const [products, setProducts] = useState([]);

const { search } = useSearch();

useEffect(() => {
  fetchProducts();
}, []);

const fetchProducts = async () => {
  try {
    const response = await getProducts();
    setProducts(response.data);
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

 const filteredProducts = products;

  return (
    <>
      <Hero />

      <Categories />

      {/* Today's Deals */}
      <section className="home-banner container my-5">
        <div className="banner-card">
          <div>
            <h2>🔥 Today's Mega Deals</h2>
            <p>Up to 70% OFF on Electronics, Fashion & Accessories</p>
            <button className="btn btn-warning">
              Shop Now
            </button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container my-5">

        <div className="section-heading">
          <h4>Total Products: {products.length}</h4>
          <h2>Featured Products</h2>

          <button className="btn btn-primary">
            View All
          </button>
        </div>

        <div className="row">

          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                className="col-lg-3 col-md-4 col-sm-6 mb-4"
                key={product.id}
              >
                <ProductCard product={product} />
              </div>
            ))
          ) : (
            <h3 className="text-center mt-5">
              No Products Found 😔
            </h3>
          )}

        </div>

      </section>

      {/* Why Choose Us */}

      <section className="container my-5">

        <h2 className="text-center mb-5">
          Why Choose Us?
        </h2>

        <div className="row">

          <div className="col-md-3">
            <div className="feature-card">
              🚚
              <h5>Free Shipping</h5>
              <p>Free delivery on orders above ₹999.</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="feature-card">
              🔄
              <h5>Easy Returns</h5>
              <p>7 Days hassle-free return policy.</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="feature-card">
              🔒
              <h5>Secure Payment</h5>
              <p>100% Safe & Secure Payments.</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="feature-card">
              🎧
              <h5>24×7 Support</h5>
              <p>Customer support anytime.</p>
            </div>
          </div>

        </div>

      </section>

      {/* Reviews */}

      <section className="review-section">

        <div className="container">

          <h2 className="text-center mb-5">
            Customer Reviews
          </h2>

          <div className="row">

            <div className="col-md-4">
              <div className="review-card">
                ⭐⭐⭐⭐⭐
                <p>
                  Amazing shopping experience. Fast delivery.
                </p>
                <h6>- Rahul</h6>
              </div>
            </div>

            <div className="col-md-4">
              <div className="review-card">
                ⭐⭐⭐⭐⭐
                <p>
                  Best quality products with affordable price.
                </p>
                <h6>- Priya</h6>
              </div>
            </div>

            <div className="col-md-4">
              <div className="review-card">
                ⭐⭐⭐⭐⭐
                <p>
                  Very smooth checkout and secure payment.
                </p>
                <h6>- Aman</h6>
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* Newsletter */}

      <section className="newsletter">

        <h2>Stay Updated</h2>

        <p>
          Subscribe to get latest offers & discounts.
        </p>

        <input
          type="email"
          placeholder="Enter your email"
        />

        <button>
          Subscribe
        </button>

      </section>
    </>
  );
}

export default Home;