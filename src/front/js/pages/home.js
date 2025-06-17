import React, { useState, useContext, useRef, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Context } from "../store/appContext";
import TiltedCard from "../component/tiltedCard";
import "../../styles/home.css";
import avatarImage from "../../img/avatar.png";
import myImage from "../../img/myImage.png";
import BlobBackground from "../component/blobBackground";
import SkillSet from "../component/SkillSet";
import { FaLinkedin, FaGithub, FaSlack, FaTwitter } from "react-icons/fa";
import emailjs from "@emailjs/browser";

export const Home = () => {
  const { store } = useContext(Context);

  // 1) Ref for the form
  const formRef = useRef();

  // 2) Form state
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // 3) Initialize EmailJS with your Public Key
  useEffect(() => {

    emailjs.init(process.env.REACT_APP_EMAILJS_USER_ID);
  }, []);

  // 4) Send via EmailJS instead of fetch
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,  // e.g. "service_r84apo2"
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID, // e.g. "template_zrvr2ya"
        formRef.current
      )
      .then(() => {
        setMessage("Email sent successfully! 🎉");
        setError("");
        formRef.current.reset();
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        setError("Oops—unable to send email.");
        setMessage("");
      });
  };

  return (
    <div id="top" className="home-container">
      {/* HOME / WELCOME SECTION */}
      <section id="home" className="welcome-section">
        <div className="home-container">
          <div className="welcome-content">
            <div className="welcome-text horizontal-intro">
              <h1>
                Hello There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              <h2>My name is David Shustin</h2>
            </div>
            <div className="welcome-image">
              <img
                src={avatarImage}
                alt="Cartoon character"
                className="hero-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="about-section">
        <div className="container d-flex flex-wrap align-items-center justify-content-center row-gap-5">
          <div className="col-md-6 text-center">
            <ScrollLink to="contact" smooth duration={300} offset={-80}>
              <img
                src={myImage}
                alt="My Avatar"
                className="img-fluid about-avatar"
                style={{ cursor: "pointer" }}
              />
            </ScrollLink>
          </div>
          <div className="col-md-6 text-light text-start">
            <h2>About Me</h2>
            <p>
              I'm a passionate full-stack developer with a background in
              Information Technology. After completing the 4Geeks Full Stack
              Bootcamp, I've been building modern, responsive applications with
              a focus on clean UI and performance.
            </p>
            <p>
              I love React, Flask, and working on creative interfaces. Let’s
              build something great!
            </p>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="section text-center">
        <h2>Projects</h2>
        <div className="card-wrapper">
          <TiltedCard
            imageSrc="https://storytrails.in/wp-content/uploads/2022/04/comingsoon.png"
            altText=""
            captionText="New Projects Coming Soon"
            containerHeight="250px"
            containerWidth="300px"
          />
        </div>
        <SkillSet />
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="contact-section">
        <h2>Contact Me</h2>

        {/* Contact Form */}
        <div className="contact-form-container">
          <h3>Send Me a Direct Email</h3>
          <form ref={formRef} onSubmit={handleSubmit}>
            {/* 1) Sender’s name */}
            <input
              type="text"
              name="from_name"
              placeholder="Your Full Name"
              required
            />
            <input
              type="email"
              name="from_email"
              placeholder="Your Email Address"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
            />
            <button className="send-button" type="submit">
              Send Email
            </button>
          </form>

          {/* ——— FEEDBACK: replaced plain <p> with Bootstrap alerts ——— */}
          {error && (
            <div className="alert alert-danger mt-3" role="alert">
              {error}
            </div>
          )}
          {message && (
            <div className="alert alert-success mt-3" role="alert">
              {message}
            </div>
          )}
        </div>

        <p>Or Connect With Me on My Social Media Platforms</p>
        <div className="contact-buttons">
          <a
            href="https://www.linkedin.com/in/david-shustin-51948434b"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button"
          >
            <FaLinkedin className="contact-icon" />
            LinkedIn
          </a>
          <a
            href="https://github.com/DavidShustin"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button"
          >
            <FaGithub className="contact-icon" />
            GitHub
          </a>
          <a
            href="https://x.com/ItsLowkeyDavid"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button"
          >
            <FaTwitter className="contact-icon" />
            X (Twitter)
          </a>
          <a
            href="https://4geeksacademy.slack.com/team/U06UZ5Y36AW"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button"
          >
            <FaSlack className="contact-icon" />
            Slack
          </a>
        </div>
      </section>
    </div>
  );
};
