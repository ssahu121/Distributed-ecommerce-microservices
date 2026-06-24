import { useEffect, useState } from "react";
import api from "../../services/api";
import ProductCard from "../ProductCard/ProductCard";

function FeaturedProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container my-5">
      <h2 className="mb-4">Featured Products</h2>

      <div className="row">
        {products.map((product) => (
          <div className="col-md-3 mb-4" >
            <ProductCard
            id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedProducts;