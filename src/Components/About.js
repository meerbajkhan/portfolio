import React from 'react';
import '../css/About.css';
import image2 from '../Assets/image2_.jpg-removebg-preview.png';

function About() {
  return (
    <div className="about-container">
      <h2 className="about-title"  id="about">About Me</h2>
      <div className="about-content">
   
        <div className="about-text">
          <p className="about-description">
            Hi, I’m Meerbaj, a dedicated Full Stack Developer with 
            expertise in crafting dynamic, responsive, and user-focused 
            web applications. With a strong foundation in React.js and 
            Java Spring Boot, I bring ideas to life through efficient and
             scalable code.
             My passion lies in solving real-world problems with technology, creating seamless digital experiences.
          </p>
          {/* <p className="about-description">
            My passion lies in solving real-world problems with technology, creating seamless digital experiences, and continuously learning to stay at the forefront of the tech industry. Let’s build something great together!
          </p> */}
        </div>
      </div>
    </div>
  );
}

export default About;
