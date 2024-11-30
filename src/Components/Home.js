import React from 'react';
import image4 from '../Assets/image4.jpg-removebg-preview (1).png';
import pdf from '../Assets/Meerbaj.pdf';
import '../css/home.css';

function Home() {

  
  return (
    <div id="home">
      <div className="home-content">
        <h1 className="home-title">I am a Full  Stack <br/> Web Developer</h1>
        {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi sit aut error harum, in dolores expedita illo animi,
          sed inventore mollitia porro provident.</p> */}
    
        <a className='btn btn-danger' id='down' href={pdf} download = 'icon.pdf'>Download Resume</a>
      </div>
      <img src={image4} alt="Developer" className="home-image" />
    </div>
  );
}

export default Home;
