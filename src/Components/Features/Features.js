import React from 'react'

const Features = () => {
    return (
      <div className='features-main-container' id='features'>
       <div className="featuresContainer">
        <h2>Our Features</h2>
        <div className="featuresGrid">
          <div className="featuresCard">
            <div className="featuresIconPlaceholder"></div>
            <h3>Trade Optimizer</h3>
            <p>
              Find the right moments to buy or sell, with personalized trade suggestions designed to help you make the most of every opportunity.
            </p>
          </div>
          <div className="featuresMarketInsight">
            <div className="featuresMarketInsightContent">
              <div className='featureMarketContent'>
                <h3>Market Insight</h3>
                <p>
                  Stay ahead of the market. Get real-time updates on market trends, track top traders' movements, and spot signals from key influencers.
                </p>
              </div>
              <div className='featureMarketImage'>
              <img src='MarketInsght.png' alt ="MarketInsght" className='MarketInsght'/>
  
              </div>
            </div>
            <div className="featuresMarketInsightImage">
              <div>
  
              </div>
             <h1 className='our-features'> Our Features</h1>
            </div>
          </div>
          <div className="featuresCard">
            <div >          <img src="featurspage.png" alt="Market Insight Image" /> 
            </div>
            <h3>Risk Guard Agent</h3>
            <p>
              Get alerts on market swings and potential risks before they impact your portfolio. This agent helps you navigate volatility and stay prepared for anything.
            </p>
          </div>
        </div>
        <div className="featuresBottomRow">
          <div className="featuresBottomCard">
            <h3 className='content'>Portfolio Sync</h3>
            <p className='content'>
              Easily manage your portfolio. You'll always know what you own, how it's performing, and where it's headed.
            </p>
            <div className="">
            <img  src="ProtofolioImage.png" alt="PortfolioSync" className='PortfolioSync'/>
            </div>
          </div>
          <div className="featuresBottomCard">
            <div>
            <h3 className='content'>Opportunity Scout</h3>
            <p className='content'>
              Find exciting new projects, events, and tokens that others might be missing. Identifying promising opportunities early, so you never miss out on the next big thing.
            </p>
            </div>
            <div className="OpportunityScoutContainer">
              <img  src="OpportunityImage.png" alt="OpportunityScout" className='OpportunityScout'/>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  };

export default Features