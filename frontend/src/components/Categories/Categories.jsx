import React from "react";
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
    { name: "Mobiles", icon: <FaMobileAlt /> },
    { name: "Laptops", icon: <FaLaptop /> },
    { name: "Fashion", icon: <FaTshirt /> },
    { name: "Beauty", icon: <FaHeart /> },
    { name: "Electronics", icon: <FaTv /> },
    { name: "Home", icon: <FaHome /> },
    { name: "Watches", icon: <FaClock /> },
    { name: "Gaming", icon: <FaGamepad /> },
  ];

  return (
    <section className="categories">
      <div className="container">
        <h2 className="category-heading">Shop by Category</h2>

        <div className="row g-4 justify-content-center">
          {categories.map((item, index) => (
            <div className="col-6 col-sm-4 col-md-3 col-lg-2" key={index}>
              <div className="category-card">
                <div className="icon-circle">{item.icon}</div>

                <h6>{item.name}</h6>

                <small>Explore</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;