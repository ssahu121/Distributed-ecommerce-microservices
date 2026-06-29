import React from "react";
import { Link } from "react-router-dom";
import "../css/Admin.css";
import {
  FaEdit,
  FaTrash,
  FaPlus,
  FaSearch
} from "react-icons/fa";

function Products() {

  const products = [
    {
      id: 1,
      name: "iPhone 16 Pro",
      category: "Mobiles",
      price: "129999",
      stock: 25
    },
    {
      id: 2,
      name: "MacBook Air M4",
      category: "Laptop",
      price: "99999",
      stock: 15
    },
    {
      id: 3,
      name: "Nike Shoes",
      category: "Shoes",
      price: "5999",
      stock: 40
    }
  ];

  return (

    <div className="products-page">

      <div className="product-header">

        <h1>Manage Products</h1>

        <Link to="/admin/add-product" className="add-btn">
          <FaPlus />
          Add Product
        </Link>

      </div>

      <div className="search-box">

        <FaSearch />

        <input
          type="text"
          placeholder="Search Product..."
        />

      </div>

      <table className="product-table">

        <thead>

          <tr>

            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Action</th>

          </tr>

        </thead>

        <tbody>

          {products.map(product => (

            <tr key={product.id}>

              <td>{product.id}</td>

              <td>{product.name}</td>

              <td>{product.category}</td>

              <td>₹ {product.price}</td>

              <td>{product.stock}</td>

              <td>

                <button className="edit-btn">
                  <FaEdit />
                </button>

                <button className="delete-btn">
                  <FaTrash />
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}

export default Products;