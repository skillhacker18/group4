import "../assets/css/account.css"
// src/components/ProfilePage.js
import { useEffect, useState } from 'react'
import OrderHistory from './orderHistory'
import OrderTracking from './OrderTracking'

import React from 'react'

export function ProfilePage() {
  // Dummy static user data with orders
  const user = {
    username: 'john_doe123',
    email: 'johndoe@example.com',
    orders: [
      { id: 1, date: '2024-10-01', status: 'Delivered' },
      { id: 2, date: '2024-10-15', status: 'Shipped' },
    ],
  };

  // State to store orders with random tracking numbers
  const [ordersWithTracking, setOrdersWithTracking] = useState([]);

  // Function to generate a random tracking number
  const generateRandomTrackingNumber = () => {
    return 'TRK-' + Math.random().toString(36).substr(2, 9).toUpperCase();
  };

  // Assign random tracking numbers to orders when the component mounts
  useEffect(() => {
    const ordersWithTracking = user.orders.map(order => ({
      ...order,
      trackingNumber: generateRandomTrackingNumber(),
    }));
    setOrdersWithTracking(ordersWithTracking);
  }, []);

  return (
    <div className="profile-page">
      <h1>User Profile</h1>

      {/* User Details (static) */}
      <div className="user-details">
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </div>

      {/* Order History Section */}
      <section className="profile-section">
        <h2>Order History</h2>
        <OrderHistory orders={user.orders} />
      </section>

      {/* Order Tracking Section */}
      <section className="profile-section">
        <h2>Order Tracking</h2>
        <OrderTracking trackingInfo={ordersWithTracking} />
      </section>
    </div>
  );
}


