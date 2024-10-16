
import React from 'react';
import './Roadmap.css';

function Roadmap() {
  return (
    <div className="roadmap-container" id='roadmap'>
      <h1 className="roadmap-heading">Roadmap</h1>
      
      {/* Phase 1 */}
      <div className="roadmap-info-1">
        <div className="phase-1-info">
          <button className="phase-button">PHASE 1</button>
          <h1 className="phase-name">Kicking Off</h1>
          <ul className="roadmap-list">
            <li className="roadmap-item">Launch of EthAI: Officially</li>
            <li className="roadmap-item">Development of Core AI Agents</li>
            <li className="roadmap-item">User Onboarding Campaign</li>
            <li className="roadmap-item">Community Engagement Initiatives</li>
          </ul>
        </div>
        <div className="phase-1-image-info">
          <div className="video-container">
            <video autoPlay loop muted className="phase-image">
              <source src="RoadmapVidoe2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      
      {/* Phase 2 */}
      <div className="roadmap-info-2">
        <div className="phase-2-image-info">
          <div className="video-container">
            <video autoPlay loop muted className="phase-image">
              <source src="RoadmapVidoe1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="phase-2-info">
          <button className="phase-button">PHASE 2</button>
          <h1 className="phase-name">Bigger Insights</h1>
          <ul className="roadmap-list">
            <li className="roadmap-item">Introduction of Advanced AI Agents</li>
            <li className="roadmap-item">Strategic Partnerships</li>
            <li className="roadmap-item">User Interface Optimization</li>
            <li className="roadmap-item">Comprehensive Marketing Campaign</li>
          </ul>
        </div>
      </div>
      
      {/* Phase 3 */}
      <div className="roadmap-info-3">
        <div className="phase-3-info">
          <button className="phase-button">PHASE 3</button>
          <h1 className="phase-name">Full Power</h1>
          <ul className="roadmap-list">
            <li className="roadmap-item">Introduction of Enhanced Features</li>
            <li className="roadmap-item">API Integration for Data Access</li>
            <li className="roadmap-item">Launch of Community-Driven Initiatives</li>
            <li className="roadmap-item">Continuous Improvement and Updates</li>
          </ul>
        </div>
        <div className="phase-3-image-info">
          <div className="video-container">
            <video autoPlay loop muted className="phase-image">
              <source src="RoadmapVidoe3.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;