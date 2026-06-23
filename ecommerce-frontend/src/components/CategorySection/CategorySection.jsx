function CategorySection() {
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Shop By Category</h2>

      <div className="row g-4">

        <div className="col-md-3">
          <div className="card shadow text-center p-3">
            <h4>Electronics</h4>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow text-center p-3">
            <h4>Fashion</h4>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow text-center p-3">
            <h4>Mobiles</h4>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow text-center p-3">
            <h4>Beauty</h4>
          </div>
        </div>

      </div>
    </div>
  );
}

export default CategorySection;