import React from 'react';
import cx from 'classnames';
import { Element } from 'react-scroll';

import profile2 from '../../assets/profile-2-cropped.jpg';

import './styles.css';

class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false
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

    console.log(scrollPos);

    if (!this.state.show && scrollPos > 2700) {
      this.setState({
        show: true
      });
    }

    if (this.state.show && scrollPos <= 2700) {
      this.setState({
        show: false
      });
    }
  };

  render() {
    return (
      <Element name="about" className="about-section">
        <div
          className={cx('about-section__photo-credits', {
            photoShow: this.state.show
          })}
        >
          Photo Credits: Sonia Xu
        </div>
        <img
          src={profile2}
          className={cx('about-section__photo', { photoShow: this.state.show })}
          alt="alt"
        />
        <div
          className={cx('about-section__info', { infoShow: this.state.show })}
        >
          <div className="about-section__info__content">
            <div className="about-section__info__content__title">About</div>
            <div className="about-section__info__content__subtitle">
              Software Engineer
            </div>
            <div className="about-section__info__content__body">
              Hey there! I'm a software engineer based in{' '}
              <strong>Irvine, CA</strong> who loves to build things bottom-up.
              My passion is writing clean code with an emphasis on using the
              latest development technologies. <br />
              <br />
              In my free time, I like to go hiking, play basketball, try new
              recipes, edit videos for my YouTube channel, hang out with
              friends, and work on personal projects.
            </div>
          </div>
        </div>
      </Element>
    );
  }
}

export default About;
