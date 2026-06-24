function Footer() {
  return (
    <>
      <footer className="bg-dark text-light mt-5 pt-5">
        <div className="container">
          <div className="row">

            <div className="col-lg-3 col-md-6 mb-4">
              <h5 className="fw-bold">ShopEase</h5>
              <p className="text-secondary">
                India's trusted online shopping destination for Electronics,
                Fashion, Home & Lifestyle products.
              </p>
            </div>

            <div className="col-lg-3 col-md-6 mb-4">
              <h5 className="fw-bold">Get To Know Us</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-secondary text-decoration-none">About Us</a></li>
                <li><a href="#" className="text-secondary text-decoration-none">Careers</a></li>
                <li><a href="#" className="text-secondary text-decoration-none">Press Releases</a></li>
                <li><a href="#" className="text-secondary text-decoration-none">Investor Relations</a></li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4">
              <h5 className="fw-bold">Customer Service</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-secondary text-decoration-none">Contact Us</a></li>
                <li><a href="#" className="text-secondary text-decoration-none">Returns</a></li>
                <li><a href="#" className="text-secondary text-decoration-none">Order Tracking</a></li>
                <li><a href="#" className="text-secondary text-decoration-none">Help Center</a></li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4">
              <h5 className="fw-bold">Follow Us</h5>

              <div className="d-flex gap-3 mt-3">
                <i className="bi bi-facebook fs-4"></i>
                <i className="bi bi-instagram fs-4"></i>
                <i className="bi bi-twitter-x fs-4"></i>
                <i className="bi bi-linkedin fs-4"></i>
              </div>

              <div className="mt-3">
                <p className="mb-1">📧 support@shopease.com</p>
                <p>📞 +91 9876543210</p>
              </div>
            </div>

          </div>
        </div>

        <hr className="border-secondary" />

        <div className="text-center py-3">
          <p className="mb-0 text-secondary">
            © 2026 ShopEase. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;