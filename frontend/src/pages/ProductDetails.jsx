import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/ProductCard/ProductCard";
import { useCart } from "../context/CartContext";
import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { addToCart } = useCart();

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return <h2 className="not-found">Product Not Found</h2>;
  }

  const recommended = products
    .filter(
      (item) => item.category === product.category && item.id !== product.id,
    )
    .slice(0, 4);

  const handleBuyNow = () => {
    addToCart(product);
    navigate("/checkout");
  };

  return (
    <>
      <div className="details-container">
        {/* LEFT */}

        <div className="details-left">
          <div className="image-box">
            <img src={product.image} alt={product.name} />
          </div>

          <div className="details-buttons">
            <button className="add-btn" onClick={() => addToCart(product)}>
              🛒 ADD TO CART
            </button>

            <button className="buy-btn" onClick={handleBuyNow}>
              ⚡ BUY NOW
            </button>
          </div>
        </div>

        {/* RIGHT */}

        <div className="details-right">
          <h1>{product.name}</h1>

          <div className="rating-box">
            <span className="rating">★ {product.rating}</span>

            <span className="rating-text">1,245 Ratings & 198 Reviews</span>
          </div>

          <div className="price-section">
            <h2>₹{product.price.toLocaleString("en-IN")}</h2>

            <span className="old-price">
              ₹{product.oldPrice.toLocaleString("en-IN")}
            </span>

            <span className="discount-text">{product.discount}</span>
          </div>

          <div className="offer-box">
            <h3>Available Offers</h3>

            <p>🏷 10% Instant Discount on HDFC Credit Card</p>

            <p>💳 No Cost EMI Available</p>

            <p>🚚 Free Delivery</p>

            <p>🔄 7 Days Replacement Policy</p>

            <p>✔ Cash On Delivery Available</p>
          </div>

          <div className="delivery-box">
            <h3>Delivery</h3>

            <div className="delivery-input">
              <input type="text" placeholder="Enter PIN Code" />

              <button>Check</button>
            </div>

            <p className="delivery-date">Delivery by Tomorrow</p>
          </div>

          <div className="description">
            <h3>Description</h3>

            <p>
              Premium quality product with excellent build quality, latest
              technology, high performance, and manufacturer warranty. Enjoy
              fast delivery, secure payment, and hassle-free returns.
            </p>
          </div>

          <div className="highlights">
            <h3>Highlights</h3>

            <ul>
              <li>✔ Original Brand Product</li>

              <li>✔ 1 Year Brand Warranty</li>

              <li>✔ Cash On Delivery Available</li>

              <li>✔ Secure Payment</li>

              <li>✔ Easy Return</li>

              <li>✔ Fast Delivery</li>
            </ul>
          </div>

          <div className="specifications">
            <h3>Specifications</h3>

            <table>
              <tbody>
                <tr>
                  <td>Brand</td>
                  <td>Premium Brand</td>
                </tr>

                <tr>
                  <td>Category</td>
                  <td>{product.category}</td>
                </tr>

                <tr>
                  <td>Warranty</td>
                  <td>1 Year</td>
                </tr>

                <tr>
                  <td>Return</td>
                  <td>7 Days</td>
                </tr>

                <tr>
                  <td>Delivery</td>
                  <td>Free</td>
                </tr>

                <tr>
                  <td>Payment</td>
                  <td>UPI / Card / COD</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="reviews">
            <h3>Customer Reviews</h3>

            <div className="review-card">
              <h4>⭐⭐⭐⭐⭐ Rahul Sharma</h4>

              <p>Excellent quality. Worth every rupee.</p>
            </div>

            <div className="review-card">
              <h4>⭐⭐⭐⭐ Amit Kumar</h4>

              <p>Nice product with fast delivery.</p>
            </div>

            <div className="review-card">
              <h4>⭐⭐⭐⭐⭐ Priya Singh</h4>

              <p>Amazing product. Highly Recommended.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}

      <section className="recommended-section">
        <h2>Related Products</h2>

        <div className="row">
          {recommended.map((item) => (
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={item.id}>
              <ProductCard product={item} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default ProductDetails;
