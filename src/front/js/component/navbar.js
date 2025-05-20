import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

export const Navbar = () => {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			console.log("🔍 ScrollY:", window.scrollY, "Scrolled State:", window.scrollY > 50);
			setScrolled(window.scrollY > 50);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);


	return (
		<nav className={`custom-navbar ${scrolled ? "scrolled" : "top"}`}>
			<div className="navbar-content">
				<div className="nav-left">
					<Link to="/" className="navbar-brand">Ds.</Link>
				</div>

				<div className="nav-center">
					<Link to="/about">About</Link>
					<Link to="/projects">Projects</Link>
					<Link to="/contact">Contact</Link>
				</div>

				<div className="nav-right">
					<a
						href="https://github.com/DavidShustin/Portfolio-Page-Updated"
						target="_blank"
						rel="noopener noreferrer"
						className="repo-button"
					>
						Repo
					</a>
				</div>
			</div>
		</nav>

	);
};
