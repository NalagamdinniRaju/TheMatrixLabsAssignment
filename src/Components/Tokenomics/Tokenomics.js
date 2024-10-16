
import React from 'react';
import './Tokenomics.css';

const Tokenomics = () => {
  const tokenInfo = [
    { label: 'Name', value: 'EthAi' },
    { label: 'Token Name', value: '$EthAi' },
    { label: 'Token standard', value: 'ERC20' },
    { label: 'Blockchain', value: 'Ethereum' },
    { label: 'Total Supply', value: '100 Million' },
    { label: 'Tax', value: '5%/5%' },
  ];

  const allocationInfo = [
    { label: 'Team', value: '35%' },
    { label: 'Marketing', value: '5%' },
    { label: 'Liquidity Pool', value: '90%' },
  ];

  return (
    <div className="tokenomics-main-container" id='tokenomics'>
      <video autoPlay loop muted className="background-video">
        <source src="https://res.cloudinary.com/dwiq4s5ut/video/upload/v1729090355/GraphBackgroundVide_y9ykla.mov" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content-wrapper">
        <h1 className='tokenomics-heading'>Tokenomics</h1>
        <div className="tokenomics-container">
          <div className="chart-container">
            <img src="Token Graph.png" alt="Token Graph" className="token-graph"/>
        
          </div>
          <div className="info-container">
            <div className="info-box">
              {tokenInfo.map((item, index) => (
                <div key={index} className="info-row">
                  <span className="label">{item.label}</span>
                  <span className="value">: {item.value}</span>
                </div>
              ))}
            </div>
            <div className="info-box">
              {allocationInfo.map((item, index) => (
                <div key={index} className="info-row">
                  <span className="label">{item.label}</span>
                  <span className="value">: {item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tokenomics;