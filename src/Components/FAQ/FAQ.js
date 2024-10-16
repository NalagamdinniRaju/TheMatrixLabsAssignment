import React from 'react';
import './FAQ.css';

const FAQ = () => {
  return (
    <div className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <ul className="faq-list">
        <li>What is EthAi?</li>
        <li>How can EthAi can help me as a Trader?</li>
        <li>Who can use EthAi?</li>
        <li>How does EthAi track smart money flow?</li>
        <li>How does ensure data security?</li>
      </ul>
    </div>
  );
};

export default FAQ;