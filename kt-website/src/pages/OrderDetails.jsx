import "../assets/css/orderDetails.css"
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useToken } from "../hooks/useToken"; // Assuming you have a custom hook for managing the token

export function OrderDetails() {
  const { orderid } = useParams(); // Get the orderid from the URL
  const { token } = useToken(); // Get token from localStorage
  const [orderDetails, setOrderDetails] = useState(null);

  // Fetch order details data (adjust API URL as needed)
  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const response = await fetch(`/api/user/orderdetails/${orderid}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,  // Include token for authentication
          }
        });
        if (response.ok) {
          const data = await response.json();
          setOrderDetails(data);  // Assuming the response contains the order details
        } else {
          console.error("Failed to fetch order details");
        }
      } catch (error) {
        console.error("Error fetching order details:", error);
      }
    };

    fetchOrderDetails();
  }, [orderid, token]); // Re-fetch when either orderid or token changes

  return (
    <div className="order-details">
      <h1>Order Details</h1>
      {orderDetails ? (
        <div>
          <p><strong>Order ID:</strong> {orderDetails.orderid}</p>
          <p><strong>Product Type:</strong> {orderDetails.product_type}</p>
          <p><strong>Order Size:</strong> {orderDetails.order_size}</p>
          <p><strong>Order Date:</strong> {new Date(orderDetails.order_date).toLocaleDateString()}</p>
          <p><strong>Due Date:</strong> {new Date(orderDetails.due_date).toLocaleDateString()}</p>
          <p><strong>Status:</strong> {orderDetails.status}</p>
          <p><strong>Total Price:</strong> ${orderDetails.total_price}</p>
        </div>
      ) : (
        <p>Loading order details...</p>
      )}
    </div>
  );
}
