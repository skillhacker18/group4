import "../assets/css/ordertracking.css"
import React, { useEffect, useState } from "react";

export function OrderTracking() {
    const [trackingData, setTrackingData] = useState([]);

    useEffect(() => {
        const fetchTracking = async () => {
            try {
                const response = await fetch('/api/user/ordertracking/1'); // Replace with dynamic order ID
                if (response.ok) {
                    const data = await response.json();
                    setTrackingData(data.tracking);
                } else {
                    console.error('Failed to fetch tracking data');
                }
            } catch (error) {
                console.error('Error fetching tracking data:', error);
            }
        };

        fetchTracking();
    }, []);

    return (
        <div className="order-tracking">
            <h1>Order Tracking</h1>
            {trackingData.length > 0 ? (
                <ul>
                    {trackingData.map((tracking) => (
                        <li key={tracking.trackingid}>
                            <p><strong>Tracking Number:</strong> {tracking.tracking_no}</p>
                            <p><strong>Status:</strong> {tracking.status}</p>
                            <p><strong>Last Updated:</strong> {new Date(tracking.updatedat).toLocaleString()}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No tracking information available.</p>
            )}
        </div>
    );
}
