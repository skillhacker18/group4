// src/components/OrderHistory.js

import "../assets/css/orderhistory.css"
import React from 'react';
import { Link } from 'react-router';

export function OrderHistory({ orders }) {
  return (
    <div className="order-history">
      <h2>Your Order History</h2>
      <ul>
        {orders.map((order) => (
          <li key={order.id} className="order-item">
            <p><strong>Order ID:</strong> {order.id}</p>
            <p><strong>Date:</strong> {order.date}</p>
            <p><strong>Status:</strong> {order.status}</p>
            <Link to={`/order-tracking/${order.id}`} className="button">View Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
