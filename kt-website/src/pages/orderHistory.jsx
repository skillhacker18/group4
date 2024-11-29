import "../assets/css/orderhistory.css"


import React, { useEffect, useState } from "react";
import { useToken } from "../hooks/useToken";  // Assuming you have a custom hook for managing the token

export function OrderHistory() {
  const { token } = useToken();    // Get token from localStorage
  const [orders, setOrders] = useState([]);

  // Fetch orders data (adjust the URL to match your API endpoint)
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('/api/user/orders', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,  // Include token in the request header for authorization
          }
        });
        if (response.ok) {
          const data = await response.json();
          setOrders(data.orders);  // Assuming your backend returns orders in the `orders` property
        } else {
          console.error('Failed to fetch orders');
        }
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, [token]); // Re-fetch when the token changes

  return (
    <div className="order-history">
      <h1>Order History</h1>
      {orders.length > 0 ? (
        <ul>
          {orders.map((order) => (
            <li key={order.orderid}>
              <p><strong>Order ID:</strong> {order.orderid}</p>
              <p><strong>Product Type:</strong> {order.product_type}</p>
              <p><strong>Order Date:</strong> {new Date(order.order_date).toLocaleDateString()}</p>
              <p><strong>Status:</strong> {order.status}</p>
              {/* Optionally, add links to view details of each order */}
              <Link to={`/account/orderdetails/${order.orderid}`}>
                <button className="button">View Order Details</button>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No orders found.</p>
      )}
    </div>
  );
}
