import logo from './logo.svg';
import './App.css';
import Navbaar from './Pages/Navbaar';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
// import { Suspense } from 'react';


// const LazyComponent = React.lazy(()=>import('./Components/Skills'));

function App() {
 
  return (
    <div className="App">
      <Navbaar/>
      <Home />
      <About/>
      {/* <Suspense fallback = {<div>Loading.....</div>}>
       <LazyComponent />
      </Suspense> */}
      <Skills/>
      <Projects/>
      <Contact/>
      
    </div>
  );
}

export default App;
