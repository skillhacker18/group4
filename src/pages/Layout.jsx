import "../assets/css/layout.css"

import { Link, NavLink, Outlet } from "react-router";


export function Layout() {
	return (
		<>
			<header className='header'>
				<span className='company-name'>Vivid Printing .</span>
				<nav className='navigation'>
					<NavLink to="/">Home</NavLink>
					<NavLink to="/collection">Upload</NavLink>
					<NavLink to="/services">Services</NavLink>
					<NavLink to="/about">About</NavLink>
					<NavLink to="/contact">Contact</NavLink>
					<NavLink to="/accounts">Account</NavLink>
				</nav>
				<div className="auth-navigation">
					<Link to="/auth/signin" className="button button-primary">Sign in</Link>
					<Link to="/auth/signup" className="button">Sign up</Link>
				</div>
			</header>

			<div className="footer">
				<div className="container">
					<div className="row">
						<div className="footer-col-1">
							<h3>Download Our Aoo</h3>
							<p>Download for Android and IOS mobile phone.</p>
							<div className="app-logo">
							<img src="https://i.ibb.co/KbPTYYQ/play-store.png" alt="" />
							<img src="https://i.ibb.co/hVM4X2p/app-store.png" alt="" />
							</div>
						</div>
						<div className="footer-col-2">
						<img src="https://i.ibb.co/j3FNGj7/logo-white.png" alt="" />
							<p>Our Purpose Is to Make Design Accessible to Many</p>
						</div>
						<div className="footer-col-3">
							<h3>Useful Links</h3>
							<ul>
								<li>Blogs</li>
								<li>Return Policy</li>
								<li>Join Affiliate</li>
							</ul>
						</div>
						<div className="footer-col-4"></div>
						<h3>Follow us</h3>
						<ul>
							<li>Facebook</li>
							<li>Twitter</li>
							<li>Instagram</li>
							<li>Tumblr</li>
						</ul>
					</div>
				</div>
				<hr />
				<p className="copyright">Copyright &copy; 2024 - Vivid Printing</p>
			</div>

			<main>
				<Outlet />
			</main>
		</>
	)
}