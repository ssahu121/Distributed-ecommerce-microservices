import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div
      id="heroCarousel"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
      data-bs-interval="3500"
    >
      {/* Indicators */}
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide-to="0"
          className="active"
        ></button>

        <button
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide-to="1"
        ></button>

        <button
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide-to="2"
        ></button>
      </div>

      <div className="carousel-inner">

        {/* Slide 1 */}
        <div className="carousel-item active">
          <img
            src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1600"
            className="d-block w-100 hero-img"
            alt=""
          />

          <div className="hero-overlay"></div>

          <div className="carousel-caption hero-content">
            <span className="offer-tag">UP TO 70% OFF</span>

            <h1>Big Shopping Festival</h1>

            <p>Mobiles, Laptops, Fashion & Electronics</p>

            <button className="shop-btn">
              Shop Now
            </button>
          </div>
        </div>

        {/* Slide 2 */}

        <div className="carousel-item">
          <img
            src="https://images.unsplash.com/photo-1498049794561-7780e7231661?w=1600"
            className="d-block w-100 hero-img"
            alt=""
          />

          <div className="hero-overlay"></div>

          <div className="carousel-caption hero-content">
            <span className="offer-tag">NEW ARRIVALS</span>

            <h1>Laptop Mega Sale</h1>

            <p>Starting from ₹39,999</p>

            <button className="shop-btn">
              Buy Now
            </button>
          </div>
        </div>

        {/* Slide 3 */}

        <div className="carousel-item">
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1600"
            className="d-block w-100 hero-img"
            alt=""
          />

          <div className="hero-overlay"></div>

          <div className="carousel-caption hero-content">
            <span className="offer-tag">FASHION SALE</span>

            <h1>Flat 60% OFF</h1>

            <p>Top Brands at Best Price</p>

            <button className="shop-btn">
              Explore
            </button>
          </div>
        </div>

      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
}

export default Hero;