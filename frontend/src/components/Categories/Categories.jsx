import React from "react";
import { Link } from "react-router-dom";
import {
  FaMobileAlt,
  FaLaptop,
  FaTshirt,
  FaTv,
  FaHome,
  FaHeart,
  FaClock,
  FaGamepad,
} from "react-icons/fa";

import "./Categories.css";

function Categories() {
  const categories = [
    { name: "Mobiles", value: "mobile", icon: <FaMobileAlt /> },
    { name: "Laptops", value: "laptop", icon: <FaLaptop /> },
    { name: "Fashion", value: "fashion", icon: <FaTshirt /> },
    { name: "Beauty", value: "beauty", icon: <FaHeart /> },
    { name: "Electronics", value: "tv", icon: <FaTv /> },
    { name: "Home", value: "home", icon: <FaHome /> },
    { name: "Watches", value: "watch", icon: <FaClock /> },
    { name: "Gaming", value: "gaming", icon: <FaGamepad /> },
  ];

  return (
    <section className="categories">
      <div className="container">

        <h2 className="category-heading">
          Shop by Category
        </h2>

        <div className="row g-4 justify-content-center">

          {categories.map((item, index) => (
            <div
              className="col-6 col-sm-4 col-md-3 col-lg-2"
              key={index}
            >
              <Link
                to={`/products?category=${item.value}`}
                className="category-card"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div className="icon-circle">
                  {item.icon}
                </div>

                <h6>{item.name}</h6>

                <small>Explore</small>
              </Link>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Categories;