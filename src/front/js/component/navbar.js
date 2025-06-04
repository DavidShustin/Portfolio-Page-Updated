import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import "../../styles/navbar.css";

export const Navbar = () => {
	const [scrolled, setScrolled] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	// Handle scroll effect
	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Toggle collapse on mobile
	const toggleNavbar = () => setIsOpen(!isOpen);

	// Close mobile menu when a link is clicked
	const closeNavbar = () => setIsOpen(false);

	return (
		<nav className={`custom-navbar navbar navbar-expand-lg ${scrolled ? "scrolled" : "top"} fixed-top`}>
			<div className="container d-flex align-items-center justify-content-between">

				{/* Left: Logo */}
				<ScrollLink
					to="home"
					smooth={true}
					duration={200}
					className="navbar-brand"
					style={{ cursor: "pointer" }}
					onClick={closeNavbar}
				>
					Ds.
				</ScrollLink>

				{/* Hamburger Button for Mobile */}
				<button
					className="navbar-toggler"
					type="button"
					onClick={toggleNavbar}
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				{/* Collapsible Content */}
				<div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarResponsive">

					{/* Center Nav Links */}
					<div className="navbar-nav nav-center mx-lg-auto mx-0 text-center">
						<ScrollLink
							to="about"
							smooth={true}
							duration={200}
							offset={-200}
							className="nav-link"
							onClick={closeNavbar}
						>
							About
						</ScrollLink>
						<ScrollLink
							to="projects"
							smooth={true}
							duration={200}
							className="nav-link"
							onClick={closeNavbar}
						>
							Projects
						</ScrollLink>
						<ScrollLink
							to="contact"
							smooth={true}
							duration={200}
							offset={-80}
							className="nav-link"
							onClick={closeNavbar}
						>
							Contact
						</ScrollLink>
					</div>

					{/* This Repo button ONLY on small screens (inside dropdown) */}
					<div className="d-lg-none mt-3">
						<a
							href="https://github.com/your-repo"
							className="repo-button btn btn-outline-light"
							target="_blank"
							rel="noopener noreferrer"
						>
							This Repo
						</a>
					</div>

					{/* Right: Repo Button on large screens only */}
					<div className="ms-auto d-none d-lg-block nav-right">
						<a
							href="https://github.com/DavidShustin/Portfolio-Page-Updated"
							target="_blank"
							rel="noopener noreferrer"
							className="repo-button btn btn-outline-light"
						>
							This Repo
						</a>
					</div>
				</div>
			</div>
		</nav >
	);
};
