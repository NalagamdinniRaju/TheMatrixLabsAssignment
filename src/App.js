import React from 'react';
import About from "./Components/About/About.js"
import Tokenomics from './Components/Tokenomics/Tokenomics.js'
import Roadmap from './Components/RoadMap/Roadmap.js';
import FAQ from './Components/FAQ/FAQ.js';
import Footer from './Components/Footer/Footer.js';
import Navbar from './Components/NavBar/Navbar.js';
import Features from './Components/Features/Features.js';
import ExploreOurDApp from './Components/ExploreOurDApp/ExploreOurDApp.js';
import "./App.css"





function App() {
  return (
    <div className='app'>
    <div className="App">
      <video autoPlay loop muted className="background-video">
        <source src="https://res.cloudinary.com/dwiq4s5ut/video/upload/v1729090047/home_page_dk7ikp.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay"></div>
      <div className="container">
          <Navbar/>
        <div className="main-content">
          <div className='inside-main-container'>
          <h1>When Innovation</h1><h1> Meets <span className="highlight">Investment</span></h1>
          <p>Empowering Trading Through Advanced Technology</p>

          </div>
          <button className="cta-btn">Open dApp</button>
        </div>
      </div>
    </div>
    <Features/>
    <About/>
    <Tokenomics/>
    <Roadmap/>
    <FAQ/>
    <ExploreOurDApp/>
    <Footer/>
    </div>
  );
}

export default App;