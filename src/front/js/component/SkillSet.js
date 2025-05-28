import React from 'react';
import '../../styles/home.css'; // Ensure the CSS for styling is imported

// Icons for each skill
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaPython, FaNodeJs, FaGitAlt, FaDatabase } from 'react-icons/fa';

const skills = [
  { name: 'HTML/CSS', icon: <FaHtml5 /> },
  { name: 'JavaScript', icon: <FaJsSquare /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'Python', icon: <FaPython /> },
  { name: 'Flask', icon: <FaPython /> },  // No Flask-specific icon, using Python
  { name: 'SQL', icon: <FaDatabase /> },
  { name: 'SQL-Alchemy', icon: <FaDatabase /> },  // No SQLAlchemy-specific icon, using Database
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'Express', icon: <FaNodeJs /> },  // No Express-specific icon, using Node.js
  { name: 'Git', icon: <FaGitAlt /> },
  { name: 'Jest (For Testing)', icon: <FaGitAlt /> }, // Replaced with Git icon as a placeholder
];

const SkillSet = () => (
  <section id="skills" className="skillset-section">
    <h2>My Skill Set</h2>
    <div className="skills-container">
      {skills.map((skill, index) => (
        <div key={index} className="skill-box">
          <div className="icon">{skill.icon}</div>
          <p>{skill.name}</p>
        </div>
      ))}
    </div>
  </section>
);

export default SkillSet;