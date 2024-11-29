import "../assets/css/about.css";

const FEATURE_IMAGE = "https://th.bing.com/th/id/OIP.Tdgs2RMBdQvx2-4uc8HHfwAAAA?rs=1&pid=ImgDetMain"

export function About() {
	return (
		<div className="aboutpage">
			<img src={FEATURE_IMAGE} alt="Vivid Printing Company Logo" className="company-logo" />
			<div className="content">
				<h1 className="h1">About us</h1>
				<p>
					Vivid Printing is a dynamic printery based in Spanish Town, St. Catherine.
					Founded by Ricardo Anderson in 2021, the company was created out of his enthusiasm for printing,
					with a mission to enhance communication, marketing, and personal expression.
				</p>
				<p>We cater to both corporate clients and individuals.</p>
				<h2 className="h2">Our Mission Statement</h2>
				<p>Where quality is our priority.</p>
			</div>
		</div>
	)
}