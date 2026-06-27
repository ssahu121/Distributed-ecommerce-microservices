import React from "react";
import Hero from "../components/Hero/Hero";
import Categories from "../components/Categories/Categories";
import ProductCard from "../components/ProductCard/ProductCard";
import products from "../data/products";
import { useSearch } from "../context/SearchContext";

function Home() {
  const { search } = useSearch();

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Hero />
      <Categories />

      <section className="container my-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-bold">Featured Products</h2>
          <button className="btn btn-primary">
            View All
          </button>
        </div>

        <div className="row">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                className="col-lg-3 col-md-4 col-sm-6 mb-4"
                key={product.id}
              >
                <ProductCard product={product} />
              </div>
            ))
          ) : (
            <h3 className="text-center mt-5">
              No Products Found 😔
            </h3>
          )}
        </div>
      </section>
    </>
  );
}

export default Home;