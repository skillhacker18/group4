import "../assets/css/profi.orderTracking.css"
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';


export default function OrderTracking() {
  const { orderId } = useParams();  // Get order ID from URL
  const [orderDetails, setOrderDetails] = useState(null);

  // Dummy data for order tracking
  const fetchOrderDetails = (orderId) => {
    // In a real application, you would fetch this from an API
    const orders = [
      {
        id: 1,
        trackingNumber: 'TRK-123ABC',
        status: 'Delivered',
        shippingDate: '2024-10-01',
        deliveryDate: '2024-10-03',
      },
      {
        id: 2,
        trackingNumber: 'TRK-987XYZ',
        status: 'In Transit',
        shippingDate: '2024-10-15',
        deliveryDate: null,
      },
    ];

    const order = orders.find(order => order.id === parseInt(orderId));
    setOrderDetails(order);
  };

  useEffect(() => {
    fetchOrderDetails(orderId);
  }, [orderId]);

  if (!orderDetails) {
    return <p>Loading...</p>;
  }

  return (
    <div className="order-tracking">
      <h2>Order Tracking Details</h2>
      <p><strong>Order ID:</strong> {orderDetails.id}</p>
      <p><strong>Tracking Number:</strong> {orderDetails.trackingNumber}</p>
      <p><strong>Status:</strong> {orderDetails.status}</p>
      <p><strong>Shipping Date:</strong> {orderDetails.shippingDate}</p>
      <p><strong>Delivery Date:</strong> {orderDetails.deliveryDate || 'Pending'}</p>
    </div>
  );
}
