import React from 'react';
import sm from '../Assets/sm.png';
import bg from '../Assets/bg.png';
import '../css/Projects.css';

function Projects() {

  
  const handleDemoClick = () => {
    window.open('https://meer-onlineburger.netlify.app/', '_blank');
  };
  const hanldeCode=()=>{
    window.open('https://github.com/meerbajkhan/UrbanBuns', '_blank');
  }
   const handle2Code=()=>{
    window.open('https://github.com/meerbajkhan/Contact-Manager', '_blank');
   }
  return (
    <div className="projects-container" id="projects">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <img src={bg} alt="Background Project" className="project-image" />
          <div className="project-overlay">
            <button className="project-button"  onClick={handleDemoClick}>Demo</button>
            <button className="project-button" onClick={hanldeCode}>Code</button>
          </div>
        </div>
        <div className="project-card">
          <img src={sm} alt="Small Project" className="project-image" />
          <div className="project-overlay">
            {/* <button className="project-button">Demo</button> */}
            <button className="project-button" onClick={handle2Code}>Code</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
