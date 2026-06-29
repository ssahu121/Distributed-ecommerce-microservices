import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaTachometerAlt,
  FaBoxOpen,
  FaPlusCircle,
  FaShoppingBag,
  FaUsers,
  FaSignOutAlt,
} from "react-icons/fa";

import "../css/Admin.css";

function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const menu = [
    {
      title: "Dashboard",
      icon: <FaTachometerAlt />,
      path: "/admin",
    },
    {
      title: "Products",
      icon: <FaBoxOpen />,
      path: "/admin/products",
    },
    {
      title: "Add Product",
      icon: <FaPlusCircle />,
      path: "/admin/add-product",
    },
    {
      title: "Orders",
      icon: <FaShoppingBag />,
      path: "/admin/orders",
    },
    {
      title: "Users",
      icon: <FaUsers />,
      path: "/admin/users",
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    navigate("/login");
  };

  return (
    <div className="admin-sidebar">

      <h2 className="admin-logo">ShopEase Admin</h2>

      {menu.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={
            location.pathname === item.path
              ? "admin-link active"
              : "admin-link"
          }
        >
          {item.icon}
          <span>{item.title}</span>
        </Link>
      ))}

      <button className="logout-btn" onClick={handleLogout}>
        <FaSignOutAlt />
        Logout
      </button>

    </div>
  );
}

export default Sidebar;