import React, { useState, useContext } from 'react';
import { Link as ScrollLink } from "react-scroll";
import { Context } from "../store/appContext";
import TiltedCard from "../component/tiltedCard";
import "../../styles/home.css";
import avatarImage from "../../img/avatar.png";
import BlobBackground from "../component/blobBackground";
import SkillSet from "../component/SkillSet";
import { FaLinkedin, FaGithub, FaSlack, FaTwitter } from 'react-icons/fa';  // Import the icons from react-icons

export const Home = () => {
  const { store } = useContext(Context);

  // States to handle form inputs and status
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !comment) {
      setError('Both email and comment are required!');
      return;
    }

    try {
      // Make sure to include the /api prefix in the URL
      const response = await fetch('/api/contactUs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, comment }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Thank you for your comment!');
        setEmail('');
        setComment('');
      } else {
        setError(data.message || 'Something went wrong!');
      }
    } catch (error) {
      setError('Failed to send message.');
    }
  };

  return (
    <div id="top" className="home-container">

      {/* HOME / WELCOME SECTION */}
      <section id="home" className="welcome-section">
        <div className="home-container">
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
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="about-section">
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
        <SkillSet />
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="contact-section">
        <h2>Contact Me</h2>
        <p>Feel free to connect with me on my social platforms:</p>

        {/* Contact Form Container */}
        <div className="contact-form-container">
          <h3>Send Me a Direct Email</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Your Email Adress"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <textarea
              placeholder="Your Message"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
            />
            <button type="submit">Send Message</button>
          </form>

          {/* Show error or success message */}
          {error && <p className="error-message">{error}</p>}
          {message && <p className="success-message">{message}</p>}
        </div>

        <div className="contact-buttons">
          {/* LinkedIn Button */}
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-button">
            <FaLinkedin className="contact-icon" />
            LinkedIn
          </a>

          {/* GitHub Button */}
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="contact-button">
            <FaGithub className="contact-icon" />
            GitHub
          </a>

          {/* X (Twitter) Button */}
          <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="contact-button">
            <FaTwitter className="contact-icon" />
            X (Twitter)
          </a>

          {/* Slack Button */}
          <a href="https://slack.com" target="_blank" rel="noopener noreferrer" className="contact-button">
            <FaSlack className="contact-icon" />
            Slack
          </a>
        </div>
      </section>

      {/* OPTIONAL FOOTER / EXTRAS */}
      <div className="below-cards">
        <div className="alert alert-info">
          {store.message || "Make sure to ask about the blob background in the home section."}
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

