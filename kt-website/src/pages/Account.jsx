import "../assets/css/account.css";
import { Link, Route, Routes } from "react-router"; // Ensure you're importing from react-router-dom
import { OrderDetails } from "../pages/OrderDetails";
import { OrderHistory } from "../pages/OrderHistory";
import { OrderTracking } from "../pages/OrderTracking";

export function Account() {
	return (
		<div className="account-page">
			<h1 className="h1">Account</h1>
			<div>
				<Link to="/orderhistory" className="button button-primary">View order history</Link>
				<Link to="/ordertracking" className="button button-primary">View order tracking</Link>
				<Link to="/orderdetails" className="button button-primary">View order details</Link>
			</div>
			<Routes>
				{/* Here, ensure you're passing JSX components */}
				<Route path='/orderhistory' element={<OrderHistory />} />
				<Route path='/ordertracking' element={<OrderTracking />} />
				<Route path='/orderdetails' element={<OrderDetails />} />
			</Routes>
		</div>
	);
}
