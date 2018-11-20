import React from 'react';
import { Link } from 'react-scroll';
import logo from '../../assets/logo.svg';
import './styles.css';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      scrollOptions: {
        duration: 800,
        offset: -120, // Scrolls to element + 50 pixels down the page,
        smooth: true
      }
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = e => {
    let scrollPos = window.scrollY;

    if (!this.state.active && scrollPos > 350) {
      this.setState({
        active: true
      });
    }

    if (this.state.active && scrollPos <= 350) {
      this.setState({
        active: false
      });
    }
  };

  scrollToPortfolio = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  openResume = () => {};

  render() {
    return (
      <div className={`navbar ${this.state.active ? 'navbar-active' : ''}`}>
        <div className="navbar-logo-container">
          <img
            className="navbar-logo"
            src={logo}
            alt="alt"
            onClick={this.scrollToPortfolio}
          />
        </div>
        <div className="navbar-items-container">
          <div className="navbar-item" onClick={this.scrollToPortfolio}>
            Portfolio
          </div>
          <Link
            to="about"
            className="navbar-item"
            {...this.state.scrollOptions}
          >
            About
          </Link>
          <Link to="work" className="navbar-item" {...this.state.scrollOptions}>
            Experience
          </Link>
          <div
            className="navbar-item"
            onClick={() => window.open('/Elton_Xue_Resume.pdf')}
          >
            Resume
          </div>
          <Link
            to="contact"
            className="navbar-item"
            onClick={this.scrollToContact}
            {...this.state.scrollOptions}
          >
            Contact
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
