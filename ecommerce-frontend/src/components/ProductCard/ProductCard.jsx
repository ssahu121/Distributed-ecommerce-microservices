import { FaStar } from "react-icons/fa";

function ProductCard({ title, price, image }) {
  return (
    <div className="card border-0 shadow-sm h-100">

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

        <h6 className="card-title">
          {title}
        </h6>

        <div className="mb-2 text-warning">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>

        <h5 className="text-success">
          ₹{price}
        </h5>

        <button className="btn btn-warning w-100 mb-2">
          Add To Cart
        </button>

        <button className="btn btn-dark w-100">
          Buy Now
        </button>

      </div>

    </div>
  );
}

export default ProductCard;