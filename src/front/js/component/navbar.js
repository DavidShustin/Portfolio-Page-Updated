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
				<span className="navbar-brand">Ds.</span>
				<div className="nav-links">
					<ScrollLink to="about" smooth={true} duration={500} offset={-80}>
						About
					</ScrollLink>
					<ScrollLink to="projects" smooth={true} duration={500} offset={-80}>
						Projects
					</ScrollLink>
					<ScrollLink to="contact" smooth={true} duration={500} offset={-80}>
						Contact
					</ScrollLink>
				</div>
			</div>
		</nav>
	);
};
