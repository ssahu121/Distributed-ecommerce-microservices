import React, { useEffect, useState } from "react";
import "./OrderHistory.css";

function OrderHistory() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(data.reverse());
  }, []);

  // STATUS COLOR FUNCTION
  const getStatusClass = (status) => {
    switch (status) {
      case "Placed":
        return "placed";
      case "Processing":
        return "processing";
      case "Shipped":
        return "shipped";
      default:
        return "placed";
    }
  };

  return (
    <div className="orders-page">

      <h2 className="title">📦 My Orders</h2>

      {orders.length === 0 ? (
        <div className="empty">
          <h3>No orders found</h3>
        </div>
      ) : (
        orders.map((order) => (
          <div className="order-card" key={order.id}>

            {/* HEADER */}
            <div className="order-header">
              <div>
                <h4>Order #{order.id}</h4>
                <p>{order.date}</p>
              </div>

              {/* 🔥 REAL STATUS */}
              <span className={`status ${getStatusClass(order.status)}`}>
                {order.status}
              </span>
            </div>

            {/* CUSTOMER */}
            <div className="customer">
              <p><b>Name:</b> {order.customer.name}</p>
              <p><b>Phone:</b> {order.customer.phone}</p>
              <p><b>Address:</b> {order.customer.address}</p>
            </div>

            <hr />

            {/* ITEMS */}
            <div className="items">
              {order.items.map((item) => (
                <div className="item" key={item.id}>
                  <img src={item.image} alt={item.name} />

                  <div>
                    <p className="name">{item.name}</p>
                    <p className="qty">
                      {item.quantity} × ₹{item.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* TOTAL */}
            <div className="total">
              <h3>Total Paid: ₹{order.total}</h3>
            </div>

          </div>
        ))
      )}
    </div>
  );
}

export default OrderHistory;