import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import "../../styles/navbar.css";

export const Navbar = () => {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<nav className={`custom-navbar ${scrolled ? "scrolled" : "top"}`}>
			<div className="navbar-content">
				<div className="nav-left">
					<ScrollLink
						to="home"
						smooth={true}
						duration={500}
						className="navbar-brand"
						style={{ cursor: "pointer" }}
					>
						Ds.
					</ScrollLink>
				</div>

				<div className="nav-center">
					<ScrollLink
						to="about"
						smooth={true}
						duration={500}
						className="nav-link"
						onClick={() => console.log("Scrolling to about...")}
					>
						About
					</ScrollLink>
					<ScrollLink
						to="projects"
						smooth={true}
						duration={500}
						// offset={-80}
						className="nav-link"
					>
						Projects
					</ScrollLink>
					<ScrollLink
						to="contact"
						smooth={true}
						duration={500}
						offset={-80}
						className="nav-link"
					>
						Contact
					</ScrollLink>
				</div>

				<div className="nav-right">
					<a
						href="https://github.com/DavidShustin/Portfolio-Page-Updated"
						target="_blank"
						rel="noopener noreferrer"
						className="repo-button"
					>
						This Repo
					</a>
				</div>
			</div>
		</nav>
	);
};
