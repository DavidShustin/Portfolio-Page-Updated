import React from 'react';
import {
  FaHtml5, FaCss3Alt, FaJsSquare,
  FaReact, FaPython, FaNodeJs,
  FaGitAlt, FaDatabase
} from 'react-icons/fa';

import jestIcon from '../../icons/jest.png';
import expressIcon from '../../icons/express.png';
import sqlalchemyIcon from '../../icons/sqlalchemy.png';
import flaskIcon from '../../icons/flask.png';

const skills = [
  { name: 'HTML5', icon: <FaHtml5 /> },
  { name: 'CSS3', icon: <FaCss3Alt /> },
  { name: 'JavaScript', icon: <FaJsSquare /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'Python', icon: <FaPython /> },
  { name: 'SQL', icon: <FaDatabase /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'Git', icon: <FaGitAlt /> },
  { name: 'Flask', icon: <img src={flaskIcon} alt="Flask" className="skill-img" /> },
  { name: 'Express', icon: <img src={expressIcon} alt="Express" className="skill-img" /> },
  { name: 'SQLAlchemy', icon: <img src={sqlalchemyIcon} alt="SQLAlchemy" className="skill-img sqlalchemy-icon" />, className: 'sqlalchemy-box' },
  { name: 'Jest', icon: <img src={jestIcon} alt="Jest" className="skill-img" /> },
];

const SkillSet = () => (
  <section id="skills" className="skillset-section">
    <h2>My Skill Set</h2>
    <div className="skills-container">
      {skills.map((skill, index) => (
        <div key={index} className={`skill-box ${skill.className || ''}`}>
          <div className="icon">{skill.icon}</div>
          <p>{skill.name}</p>
        </div>
      ))}
    </div>
  </section>
);

export default SkillSet;
