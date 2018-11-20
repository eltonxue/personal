import React from 'react';
import { Element } from 'react-scroll';

import waveEmoji from '../../assets/wave-emoji.png';

import './styles.css';

const Footer = props => {
  return (
    <Element name="contact" className="footer-section">
      <div className="footer-section__hello">
        <img
          src={waveEmoji}
          className="footer-section__hello__emoji"
          alt="alt"
        />{' '}
        Say Hello
      </div>
      <div className="footer-section__contact">
        <div
          className="footer-section__contact__icon"
          onClick={() => window.open('https://www.github.com/eltonxue')}
        >
          GitHub
        </div>
        <div
          className="footer-section__contact__icon"
          onClick={() => window.open('https://www.linkedin.com/in/eltonxue')}
        >
          LinkedIn
        </div>
        <div
          className="footer-section__contact__icon"
          onClick={() => window.open('mailto:eltonxue@gmail.com')}
        >
          Email
        </div>
        <div
          className="footer-section__contact__icon"
          onClick={() =>
            window.open(
              'https://github.com/eltonxue/ePortfolio-v2/blob/master/Elton_Xue_Resume.pdf'
            )
          }
        >
          Resume
        </div>
      </div>
    </Element>
  );
};

export default Footer;
