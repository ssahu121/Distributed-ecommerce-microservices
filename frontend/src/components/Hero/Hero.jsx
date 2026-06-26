import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div
      id="heroCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">

        
        <div className="carousel-item">
          <img
            src="https://images.unsplash.com/photo-1498049794561-7780e7231661?w=1600"
            className="d-block w-100 hero-img"
            alt="Slide 2"
          />
          <div className="carousel-caption">
            <h2>Laptop Festival</h2>
            <p>Starting from ₹39,999</p>
          </div>
        </div>

        
        <div className="carousel-item">
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1600"
            className="d-block w-100 hero-img"
            alt="Slide 3"
          />
          <div className="carousel-caption">
            <h2>Fashion Sale</h2>
            <p>Flat 60% OFF</p>
          </div>
        </div>

        <div className="carousel-item active">
          <img
            src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1600"
            className="d-block w-100 hero-img"
            alt="Slide 1"
          />
          <div className="carousel-caption">
            <h2>Big Sale 2026</h2>
            <p>Up to 70% OFF on Mobiles</p>
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