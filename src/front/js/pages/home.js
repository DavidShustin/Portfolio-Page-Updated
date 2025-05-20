import React, { useContext } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Context } from "../store/appContext";
import TiltedCard from "../component/tiltedCard";
import "../../styles/home.css";
import avatarImage from "../../img/avatar.png";

export const Home = () => {
	const { store } = useContext(Context);

	return (
		<div id="top" className="home-container">

			{/* HOME / WELCOME SECTION */}
			<section id="home" className="welcome-section">
				<div className="welcome-content">
					<div className="welcome-text">
						<h1>
							Welcome to My Portfolio{" "}
							<span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
						</h1>
						<p>Scroll down to see more</p>
					</div>

					<div className="welcome-image">
						<img src={avatarImage} alt="Cartoon character" className="hero-img" />
					</div>
				</div>
			</section>

			{/* ABOUT SECTION */}
			<section id="about" className="section text-center">
				<h2>About Me</h2>
				<p>This is the About section. Add your bio or background here.</p>
			</section>

			{/* PROJECTS SECTION */}
			<section id="projects" className="section text-center">
				<h2>Projects</h2>
				<div className="card-wrapper">
					<TiltedCard
						imageSrc="https://wadsworthbruin.com/wp-content/uploads/2024/12/kendrick-900x1200.png"
						altText="Kendric Lamar GNX"
						captionText="Kendric Lamar GNX"
						containerHeight="250px"
						containerWidth="300px"
					/>
					<TiltedCard
						imageSrc="https://i.ytimg.com/vi/D7RHwt3vXSk/maxresdefault.jpg"
						altText="Kendric Lamar GNX"
						captionText="Ya Feel Me by La Reezy (ft. Samara Cyn)"
						containerHeight="250px"
						containerWidth="300px"
					/>
				</div>
			</section>

			{/* CONTACT SECTION */}
			<section id="contact" className="section text-center">
				<h2>Contact</h2>
				<p>Put your email, contact form, or links here.</p>
			</section>

			{/* OPTIONAL FOOTER / EXTRAS */}
			<div className="below-cards">
				<div className="alert alert-info">
					{store.message || "make sure to ask about the navbar and sidebars in the meeting on thursday."}
				</div>
				<p>
					This will be the link to the ReactBits Website{" "}
					<a href="https://www.reactbits.dev/backgrounds/waves" target="_blank" rel="noopener noreferrer">
						The ReactBits Site
					</a>
				</p>
			</div>
		</div>
	);
};
