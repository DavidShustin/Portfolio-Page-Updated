import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Waves from "../component/Waves"; // <- Import the Waves component
import "../../styles/home.css";          // <- Import your home.css

export const Home = () => {
	const { store } = useContext(Context);

	return (
		<div className="home-container">
			<Waves lineColor="#4ade80" backgroundColor="#121212" /> {/* Customize colors here */}

			<div className="content text-center">
				<div className="alert alert-info">
					{store.message || "make sure to ask about this in the meeting on thursday"}
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