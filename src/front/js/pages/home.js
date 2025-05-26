import React, { useContext } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Context } from "../store/appContext";
import TiltedCard from "../component/tiltedCard";
import "../../styles/home.css";
import avatarImage from "../../img/avatar.png";
import BlobBackground from "../component/blobBackground";


export const Home = () => {
	const { store } = useContext(Context);

	return (
		<div id="top" className="home-container">

			{/* HOME / WELCOME SECTION */}
			<section id="home" className="welcome-section">
				{/* BLOBS GO HERE */}
				<div className="home-blobs">
					<div className="blob blob1"></div>
					<div className="blob blob2"></div>
					<div className="blob blob3"></div>
				</div>

				{/* Your existing welcome content */}
				<div className="welcome-content">
					<div className="welcome-text">
						<h1>
							Hello There!{" "}
							<span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
						</h1>
						<h2>My name is David Shustin</h2>
					</div>
					<div className="welcome-image">
						<img src={avatarImage} alt="Cartoon character" className="hero-img" />
					</div>
				</div>
			</section>


			{/* ABOUT SECTION */}
			{/* ABOUT SECTION */}
			<section id="about" className="section about-section">
				<div className="container d-flex flex-wrap align-items-center justify-content-center row-gap-5">

					<div className="col-md-6 text-center">
						<ScrollLink to="contact" smooth={true} duration={300} offset={-50}>
							<img
								src={avatarImage}
								alt="My Avatar"
								className="img-fluid about-avatar"
								style={{ cursor: "pointer" }}
							/>
						</ScrollLink>
					</div>
					<div className="col-md-6 text-light text-start">
						<h2>About Me</h2>
						<p>
							I'm a passionate full-stack developer with a background in Information Technology.
							After completing the 4Geeks Full Stack Bootcamp, I've been building modern, responsive
							applications with a focus on clean UI and performance.
						</p>
						<p>
							I love React, Flask, and working on creative interfaces. Let’s build something great!
						</p>
					</div>
				</div>
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
