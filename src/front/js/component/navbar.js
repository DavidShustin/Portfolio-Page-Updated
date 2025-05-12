import React from "react";
import { Link } from "react-router-dom";
import '../../styles/navbar.css';

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/" className="navbar-brand mb-0 h1">
					Welcome to my Portfolio!
				</Link>

				<div className="dropdown ms-auto">
					<button
						className="btn btn-secondary dropdown-toggle"
						type="button"
						id="dropdownButton"
						data-bs-toggle="dropdown"
						aria-expanded="false"
					>
						<span className="shiny-text">Here are my links</span>
					</button>
					<ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownButton">
						<li><Link className="dropdown-item" to="/about">About</Link></li>
						<li><Link className="dropdown-item" to="/projects">Projects</Link></li>
						<li><Link className="dropdown-item" to="/contact">Contact</Link></li>
					</ul>

				</div>
			</div>
		</nav>
	);
};