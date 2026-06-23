import Navbar from "../components/Navbar";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts";

function Products() {
  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <h2>All Products</h2>
      </div>

      <FeaturedProducts />
    </>
  );
}

export default Products;