import React from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard/ProductCard";
import Sidebar from "../components/Sidebar/Sidebar";

import { useSearch } from "../context/SearchContext";
import { useFilter } from "../context/FilterContext";

import "./Products.css";


function Products() {

  const { search } = useSearch();
  const { category } = useFilter();

  let filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  if (category !== "all") {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === category
    );
  }

  return (
    <div className="products-layout">

      <Sidebar />

      <div className="products-content">

        <h2>All Products</h2>

        <p>{filteredProducts.length} Products Found</p>

        <div className="products-grid">

          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </div>

    </div>
  );
}

export default Products;