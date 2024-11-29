import "../assets/css/home.css"

const HERO_IMAGE = "https://i.ibb.co/48H9YLS/PHOTO-2024-11-26-20-09-52-removebg-preview.png"

export function Home() {
	return (
		<div className="homepage">
			<div className="call-to-action col">
				<h1 className="h1">Give Your Design A New Style!</h1>
				<p>Success isn't always about greatness. It's about consistency. Consistent hard work gains success. Greatness will come. </p>
				<a href="#" target="_blank" rel="noopener noreferrer" className="button">Shop Now →</a>
			</div>
			<img className="hero-image col" src={HERO_IMAGE} alt="" />
		</div>
	)
}