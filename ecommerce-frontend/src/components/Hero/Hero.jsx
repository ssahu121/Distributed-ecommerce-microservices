function Hero() {
  return (
    <div
      id="heroCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">

        <div className="carousel-item active">
          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
            className="d-block w-100"
            alt="banner"
            style={{ height: "450px", objectFit: "cover" }}
          />
        </div>

        <div className="carousel-item">
          <img
            src="https://images.unsplash.com/photo-1498049794561-7780e7231661"
            className="d-block w-100"
            alt="banner"
            style={{ height: "450px", objectFit: "cover" }}
          />
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