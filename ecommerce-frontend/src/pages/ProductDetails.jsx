import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Navbar from "../components/Navbar";
import Layout from "../components/Layout/Layout";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    api
      .get(`/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!product) {
    return (
      <div className="container mt-5">
        <h3>Loading...</h3>
      </div>
    );
  }

  return (
    <Layout>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-5">
            <img
              src={product.image}
              alt={product.title}
              className="img-fluid"
            />
          </div>

          <div className="col-md-7">
            <h2>{product.title}</h2>

            <h3 className="text-success mt-3">₹{product.price}</h3>

            <p className="mt-3">{product.description}</p>

            <button
              className="btn btn-warning me-3"
              onClick={() => addToCart(product)}
            >
              Add To Cart
            </button>

            <button className="btn btn-dark">Buy Now</button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ProductDetails;