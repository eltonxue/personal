import React from 'react';
import linkedin from '../../assets/icons/contact/linkedin.png';
import github from '../../assets/icons/contact/github.svg';
import email from '../../assets/icons/contact/email-icon.png';

import background from '../../assets/background-cover.jpg';

import './styles.css';

const Header = props => {
  return (
    <div className="cover-section">
      <div class="img-gradient">
        <img className="background-cover" src={background} />
      </div>

      <h1 className="introduction">
        Hi, I'm Elton. <p>Hire me and I'll get things done.</p>
        <img
          className="contact"
          src={linkedin}
          onClick={() => window.open('https://www.linkedin.com/in/eltonxue')}
        />
        <img
          className="contact"
          src={github}
          onClick={() => window.open('https://www.github.com/eltonxue')}
        />
        <img
          className="contact"
          src={email}
          onClick={() => (window.location.href = 'mailto:eltonxue@gmail.com')}
        />
      </h1>
    </div>
  );
};

export default Header;
