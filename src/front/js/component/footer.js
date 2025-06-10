import React, { Component } from "react";
import "../../styles/footer.css"


export const Footer = () => (
	<footer id="footer">
		<p className="footer-text-left">
			Made with <i className="fa fa-heart text-danger"></i> by{" "}
			<a href="https://github.com/DavidShustin?tab=repositories">David Shustin</a>
		</p>
		<div className="copyright-area">
			Copyright
			<img
				src="https://1000logos.net/wp-content/uploads/2021/07/Copyright-Symbol.png"
				alt="Copyright Symbol"
				style={{ verticalAlign: "middle" }}
			/>
			2025 DS
		</div>
		<div className="social-icons">
			<a href="https://github.com/DavidShustin" target="_blank" rel="noopener noreferrer">
				<i className="fab fa-github"></i>
			</a>
			<a href="https://linkedin.com/in/david-shustin-51948434b/" target="_blank" rel="noopener noreferrer">
				<i className="fab fa-linkedin"></i>
			</a>
			<a href="https://x.com/ItsLowkeyDavid" target="_blank" rel="noopener noreferrer">
				<i className="fab fa-twitter"></i>
			</a>
			<a href="https://4geeksacademy.slack.com/team/U06UZ5Y36AW" target="_blank" rel="noopener noreferrer">
				<i className="fab fa-slack"></i>
			</a>
			{/* Add more as needed */}
		</div>
	</footer>
);