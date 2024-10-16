import { PiTelegramLogoLight } from 'react-icons/pi';
import { CiInstagram } from 'react-icons/ci';
import { RiTwitterXFill } from 'react-icons/ri';
import { FaFacebookF, FaCentercode } from 'react-icons/fa';
import './Footer.css'; // External CSS file

function Footer() {
  return (
    <div className="last-footer-section">
      <div className="social-media-section">
        <div className="web-logo-container">
        <div className="logo-container">
      <div class="logo">
        <div class="segment"></div>
        <div class="segment"></div>
        <div class="segment"></div>
        <div class="segment"></div>
        <div class="segment"></div>
        <div class="segment"></div>
        <div class="segment"></div>
        <div class="segment"></div>
        <div class="segment"></div>
    </div>
    <h3>EthAi</h3></div>
        </div>
        <div>
          <PiTelegramLogoLight className="social-app" />
          <CiInstagram className="social-app" />
          <RiTwitterXFill className="social-app" />
          <FaFacebookF className="social-app" />
          <FaCentercode className="social-app" />
        </div>
      </div>

      <div className="about-website">
        <h1 className="web-heading">
          “Designed for traders of <br /> today, just like you.”
        </h1>
        <div className='input-container'>
        <input type="text" className="input" placeholder="What’s your work email?" />
        <button className="get-started-btn">Get Started</button>
        </div>
   
      </div>
    </div>
  );
}

export default Footer;
