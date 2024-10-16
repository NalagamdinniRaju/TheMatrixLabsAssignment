import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page" id='why-us'>
      <div className="about-container">
        <h1 className="about-title">About EthAi</h1>
        <p className="about-description">
          At EthAi, we're all about making crypto trading easier and more intuitive. We provide tools that help traders keep up with all new market trends, track top traders' movements.
        </p>
        <button className="about-button">Read more</button>
        <div className="feature-section">
          <video className="video" autoPlay loop muted>
            <source src="https://res.cloudinary.com/dwiq4s5ut/video/upload/v1729090114/RightBackgroundEffect_eghgby.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="about-features">
            <div className="about-feature">
              <div className="about-feature-icon">
                <img  src="graph.png" alt="graph" className='icon'/>

              </div>
              <h3 className="about-feature-title">Stay Ahead</h3>
              <p className="about-feature-description">No more guesswork—get clear, trustable insights.</p>
            </div>
            <div className="about-feature">
              <div className="about-feature-icon">
              <img  src="Vector.png" alt="Valuet" className='icon'/>

              </div>
              <h3 className="about-feature-title">Know Your Assets</h3>
              <p className="about-feature-description">Always stay on top of how your investments are performing.</p>
            </div>
            <div className="about-feature">
              <div className="about-feature-icon">
              <img  src="Prooficon.png" alt="Prooficon" className='icon'/>

              </div>
              <h3 className="about-feature-title">Simple, Not Overwhelming</h3>
              <p className="about-feature-description">Our tools are designed to make complex market analysis easy to understand and act on.</p>
            </div>
            <div className="about-feature">
              <div className="about-feature-icon">
              <img  src="SettingsIcon.png" alt="SettingsIcon" className='icon'/>

              </div>
              <h3 className="about-feature-title">Future-Proof</h3>
              <p className="about-feature-description">We're constantly improving, adding new features to help you make the most informed decisions possible.</p>
            </div>
          </div>
          <video className="video" autoPlay loop muted>
            <source src="https://res.cloudinary.com/dwiq4s5ut/video/upload/v1729090082/backgroundEffect_tzbcww.mp4" type="video/mp4" className='video-size'/>
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default About;