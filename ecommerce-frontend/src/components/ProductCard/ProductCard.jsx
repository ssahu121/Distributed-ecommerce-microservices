import { Link } from "react-router-dom";

function ProductCard({ id, title, price, image }) {
  return (
    <div className="card h-100 shadow-sm">

      <img
        src={image}
        alt={title}
        className="card-img-top p-3"
        style={{
          height: "250px",
          objectFit: "contain"
        }}
      />

      <div className="card-body">

        <h6>{title.substring(0, 40)}...</h6>

        <h5 className="text-success">₹{price}</h5>

        <Link
          to={`/product/${id}`}
          className="btn btn-dark w-100"
        >
          View Details
        </Link>

      </div>

    </div>
  );
}

export default ProductCard;