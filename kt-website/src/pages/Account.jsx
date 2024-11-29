import "../assets/css/account.css"
import React from "react";
import { Link, Outlet } from "react-router" // Use Outlet for nested routes

export function Account() {
  return (
    <div className="account-page">
      <h1 className="h1">Account</h1>
      <div>
        {/* Links to navigate to the nested routes */}
        <Link to="orderhistory" className="button button-primary">View Order History</Link>
        <Link to="ordertracking" className="button button-primary">View Order Tracking</Link>
        <Link to="orderdetails" className="button button-primary">View Order Details</Link>
      </div>

      {/* This is where the nested route content will appear */}
      <Outlet />
    </div>
  );
}

