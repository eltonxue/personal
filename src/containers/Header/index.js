import React from 'react';
import linkedin from '../../assets/icons/contact/linkedin.png';
import github from '../../assets/icons/contact/github.svg';
import email from '../../assets/icons/contact/email-icon.png';

import background from '../../assets/background-cover.jpg';

import './styles.css';

const Header = props => {
  return (
    <div className="cover-section">
      <img className="background-cover" src={background} alt="alt" />

      <h1 className="introduction">
        Hi, I'm Elton. <p>Software Engineer</p>
        <img
          className="contact"
          src={linkedin}
          onClick={() => window.open('https://www.linkedin.com/in/eltonxue')}
          alt="alt"
        />
        <img
          className="contact"
          src={github}
          onClick={() => window.open('https://www.github.com/eltonxue')}
          alt="alt"
        />
        <img
          className="contact"
          src={email}
          onClick={() => window.open('mailto:eltonxue@gmail.com')}
          alt="alt"
        />
      </h1>
    </div>
  );
};

export default Header;
