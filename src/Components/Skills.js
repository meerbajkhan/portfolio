import React from 'react';
import java from '../Assets/java.png';
import javascript from '../Assets/javaScript.png';
import springboot from '../Assets/springboot.png';
import react from '../Assets/logo192.png';
import mysql from '../Assets/Mysql.png';
// import gitvalleyLogo from '../Assets/gitvalley.png'; // Add your company logo
import '../css/Skills.css';

function Skills() {

  
  return (
    <div className="skills-container" id="skills">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-wrapper">
        {/* Skills Section */}
        <div className="skills-grid">
          <div className="skill-item">
            <img src={java} alt="Java" className="skill-icon" />
            <p>Java</p>
          </div>
          <div className="skill-item">
            <img src={javascript} alt="JavaScript" className="skill-icon" />
            <p>JavaScript</p>
          </div>
          <div className="skill-item">
            <img src={react} alt="React" className="skill-icon" />
            <p>React.js</p>
          </div><br/>
          <div className="skill-item">
            <img src={springboot} alt="Spring Boot" className="skill-icon" />
            <p>Spring Boot</p>
          </div>
          <div className="skill-item">
            <img src={mysql} alt="MySQL" className="skill-icon" />
            <p>MySQL</p>
          </div>
        </div>

        {/* Experience Section */}
        <div className="experience-section">
          <h3>Experience</h3>
          <div className="experience-item">
            <div  alt="Git Valley Technologies" className="company-logo" />
            <div className="experience-info">
              <h4>Git Valley Technologies</h4>
              <p>6 Months Experience</p>
              <p>
                Worked on building scalable front-end applications using React.js, JavaScript, 
                and integrating APIs to deliver high-performance user experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
