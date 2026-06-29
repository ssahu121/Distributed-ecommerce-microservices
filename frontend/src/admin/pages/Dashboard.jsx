import React from "react";
import "../css/Admin.css";
import {
  FaBoxOpen,
  FaShoppingCart,
  FaUsers,
  FaRupeeSign,
} from "react-icons/fa";


function Dashboard() {
  const cards = [
    {
      title: "Total Products",
      value: 120,
      icon: <FaBoxOpen />,
    },
    {
      title: "Orders",
      value: 56,
      icon: <FaShoppingCart />,
    },
    {
      title: "Users",
      value: 18,
      icon: <FaUsers />,
    },
    {
      title: "Revenue",
      value: "₹2,45,000",
      icon: <FaRupeeSign />,
    },
  ];

  return (
    <div className="dashboard">

      <div className="dashboard-top">
        <h1>Dashboard</h1>
        <p>Welcome Back Admin 👋</p>
      </div>

      <div className="cards">

        {cards.map((item, index) => (

          <div className="card" key={index}>

            <div>
              <h3>{item.title}</h3>
              <h2>{item.value}</h2>
            </div>

            <div className="icon">
              {item.icon}
            </div>

          </div>

        ))}

      </div>

      <div className="recent-orders">

        <h2>Recent Orders</h2>

        <table>

          <thead>

            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>

          </thead>

          <tbody>

            <tr>
              <td>#1001</td>
              <td>Rahul</td>
              <td>₹1500</td>
              <td>Delivered</td>
            </tr>

            <tr>
              <td>#1002</td>
              <td>Shivam</td>
              <td>₹2300</td>
              <td>Pending</td>
            </tr>

            <tr>
              <td>#1003</td>
              <td>Aman</td>
              <td>₹870</td>
              <td>Cancelled</td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Dashboard;