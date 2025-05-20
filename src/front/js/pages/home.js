import React, { useContext } from "react";
import { Context } from "../store/appContext";
import TiltedCard from "../component/tiltedCard";
import "../../styles/home.css";          // <- Import your home.css

export const Home = () => {
	const { store } = useContext(Context);

	return (
		<div className="home-container">

			<div style={{ height: "200vh", background: "transparent" }}></div>
			<div className="content text-center">
				<div style={{ paddingTop: "6rem" }}>
					<h1>Home Page</h1>
					<p>Scroll down to trigger navbar effect</p>

					{/* TEMP SCROLL TEST BLOCK */}
					<div style={{ height: "200vh", background: "transparent" }}></div>
				</div>
				{/* <div className="card-wrapper mb-5 pb-5"> */}
				{/* <TiltedCard
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
				<div className="below-cards">
					<div className="alert alert-info">
						{store.message || "make sure to ask about the navbar and sidebars in the meeting on thursday. Also ask about different websites like ReactBit."}
					</div>
					<p>
						This will be the link to the ReactBits Website{" "}
						<a href="https://www.reactbits.dev/backgrounds/waves" target="_blank" rel="noopener noreferrer">
							The ReactBits Site
						</a>
					</p>
					<p>
						This will be the link to the ReactBits Website{" "}
						<a href="https://www.reactbits.dev/backgrounds/waves" target="_blank" rel="noopener noreferrer">
							The ReactBits Site
						</a>
					</p>
					<p>
						This will be the link to the ReactBits Website{" "}
						<a href="https://www.reactbits.dev/backgrounds/waves" target="_blank" rel="noopener noreferrer">
							The ReactBits Site
						</a>
					</p>
					<p>
						This will be the link to the ReactBits Website{" "}
						<a href="https://www.reactbits.dev/backgrounds/waves" target="_blank" rel="noopener noreferrer">
							The ReactBits Site
						</a>
					</p>
					<p>
						This will be the link to the ReactBits Website{" "}
						<a href="https://www.reactbits.dev/backgrounds/waves" target="_blank" rel="noopener noreferrer">
							The ReactBits Site
						</a>
					</p>
					<p>
						This will be the link to the ReactBits Website{" "}
						<a href="https://www.reactbits.dev/backgrounds/waves" target="_blank" rel="noopener noreferrer">
							The ReactBits Site
						</a>
					</p>
					<p>
						This will be the link to the ReactBits Website{" "}
						<a href="https://www.reactbits.dev/backgrounds/waves" target="_blank" rel="noopener noreferrer">
							The ReactBits Site
						</a>
					</p>
					<p>
						This will be the link to the ReactBits Website{" "}
						<a href="https://www.reactbits.dev/backgrounds/waves" target="_blank" rel="noopener noreferrer">
							The ReactBits Site
						</a>
					</p>
					<p>
						This will be the link to the ReactBits Website{" "}
						<a href="https://www.reactbits.dev/backgrounds/waves" target="_blank" rel="noopener noreferrer">
							The ReactBits Site
						</a>
					</p>
				</div>
				<div>
					<p>
						This will be the link to the ReactBits Website{" "}
						<a href="https://www.reactbits.dev/backgrounds/waves" target="_blank" rel="noopener noreferrer">
							The ReactBits Site
						</a>
					</p>
					<p>
						This will be the link to the ReactBits Website{" "}
						<a href="https://www.reactbits.dev/backgrounds/waves" target="_blank" rel="noopener noreferrer">
							The ReactBits Site
						</a>
					</p>
					<p>
						This will be the link to the ReactBits Website{" "}
						<a href="https://www.reactbits.dev/backgrounds/waves" target="_blank" rel="noopener noreferrer">
							The ReactBits Site
						</a>
					</p>
					<p>
						This will be the link to the ReactBits Website{" "}
						<a href="https://www.reactbits.dev/backgrounds/waves" target="_blank" rel="noopener noreferrer">
							The ReactBits Site
						</a>
					</p>
					<p>
						This will be the link to the ReactBits Website{" "}
						<a href="https://www.reactbits.dev/backgrounds/waves" target="_blank" rel="noopener noreferrer">
							The ReactBits Site
						</a>
					</p>
					<p>
						This will be the link to the ReactBits Website{" "}
						<a href="https://www.reactbits.dev/backgrounds/waves" target="_blank" rel="noopener noreferrer">
							The ReactBits Site
						</a>
					</p>
					<p>
						This will be the link to the ReactBits Website{" "}
						<a href="https://www.reactbits.dev/backgrounds/waves" target="_blank" rel="noopener noreferrer">
							The ReactBits Site
						</a>
					</p>
				</div> */}
				{/* <div style={{ height: "200vh", background: "transparent" }}></div>
				 */}

			</div>
		</div>
	);
};