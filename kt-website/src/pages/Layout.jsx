import "../assets/css/layout.css"

import { Link, NavLink, Outlet } from "react-router";

const GOOGLE_PLAY_DOWNLOAD_IMAGE = "https://i.ibb.co/KbPTYYQ/play-store.png"
const APP_STORE_DOWNLOAD_IMAGE = "https://i.ibb.co/hVM4X2p/app-store.png"
const REDSTORE_LOGO_IMAGE = "https://i.ibb.co/j3FNGj7/logo-white.png"


export function Layout() {
	return (
		<>
			<header className='header'>
				<span className='company-name'>Vivid Printing</span>
				<nav className='navigation'>
					<NavLink to="/">Home</NavLink>
					<NavLink to="/upload">Upload</NavLink>
					<NavLink to="/services">Services</NavLink>
					<NavLink to="/about">About</NavLink>
					<NavLink to="/contact">Contact</NavLink>
					<NavLink to="/account">Account</NavLink>
					
				</nav>
				<div className="auth-navigation">
					<Link to="/auth/signin" className="button button-primary">Sign in</Link>
					<Link to="/auth/signup" className="button">Sign up</Link>
				</div>
			</header>
			<main>
				<Outlet />
			</main>
			<footer className="footer">
				<div className="container display-flex">
					<section>
						<h3>Download Our App</h3>
						<p>Download for Android and IOS mobile phone.</p>
						<div className="download">
							<img src={GOOGLE_PLAY_DOWNLOAD_IMAGE} alt="Play Store" />
							<img src={APP_STORE_DOWNLOAD_IMAGE} alt="App Store" />
						</div>
					</section>
					<section>
						<img className="margin-top-h3" src={REDSTORE_LOGO_IMAGE} alt="Logo" />
						<p>Our Purpose Is to Make Design Accessible to Many</p>
					</section>
					<section>
						<h3>Useful Links</h3>
						<ul>
							<li>Blogs</li>
							<li>Return Policy</li>
							<li>Join Affiliate</li>
						</ul>
					</section>
					<section>
						<h3>Follow us</h3>
						<ul>
							<li>Facebook</li>
							<li>Twitter</li>
							<li>Instagram</li>
							<li>Tumblr</li>
						</ul>
					</section>
				</div>
				<hr />
				<div className="container">
					<p className="copyright">Copyright &copy; 2024 - Vivid Printing</p>
				</div>
			</footer>
		</>
	)
}