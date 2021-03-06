import React from 'react';
import cx from 'classnames';
import { Element } from 'react-scroll';

import purpleDot from '../../assets/purple-dot.png';
import purpleLine from '../../assets/purple-line.png';

import vincitLogo from '../../assets/icons/company/vincit-logo.png';
import immerseLogo from '../../assets/icons/company/immerse-logo.png';
import procoreLogo from '../../assets/icons/company/procore-logo.png';
import adigamiLogo from '../../assets/icons/company/adigami-logo.png';
import portalLogo from '../../assets/icons/company/portal-logo.png';

import Info from './Info';

import './styles.css';

class Work extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      show6: false
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

    if (!this.state.show1 && scrollPos > 3200) {
      this.setState({
        show1: true
      });
    }

    if (this.state.show1 && scrollPos <= 3200) {
      this.setState({
        show1: false
      });
    }

    if (!this.state.show2 && scrollPos > 3400) {
      this.setState({
        show2: true
      });
    }

    if (this.state.show2 && scrollPos <= 3400) {
      this.setState({
        show2: false
      });
    }

    if (!this.state.show3 && scrollPos > 3600) {
      this.setState({
        show3: true
      });
    }

    if (this.state.show3 && scrollPos <= 3600) {
      this.setState({
        show3: false
      });
    }

    if (!this.state.show4 && scrollPos > 3800) {
      this.setState({
        show4: true
      });
    }

    if (this.state.show4 && scrollPos <= 3800) {
      this.setState({
        show4: false
      });
    }

    if (!this.state.show5 && scrollPos > 4000) {
      this.setState({
        show5: true
      });
    }

    if (this.state.show5 && scrollPos <= 4000) {
      this.setState({
        show5: false
      });
    }

    if (!this.state.show6 && scrollPos > 4200) {
      this.setState({
        show6: true
      });
    }

    if (this.state.show6 && scrollPos <= 4200) {
      this.setState({
        show6: false
      });
    }
  };

  render() {
    const jobs = [
      {
        icon: vincitLogo,
        company: 'Vincit',
        link: 'https://www.vincit.com',
        role: 'Software Engineer',
        date: 'April 2019 - Present',
        description:
          'Vincit is not just another software company. Through hard work, we have been ranked first at Best Workplaces in Europe by Great Place to Work Institute (2016), and have been selected three times as Best Workplace in Finland (2014, 2015, 2016). We provide software development and design services.'
      },
      {
        icon: immerseLogo,
        company: 'Immerse',
        link: 'https://www.immerse.online',
        role: 'Software Engineer',
        date: 'October 2018 - March 2019',
        description:
          'Immerse empowers language teachers and students by exponentially accelerating language immersion. Today, that means we have developed the first virtual reality software that makes both learning and teaching a language online more fun and effective than ever before.'
      },
      {
        icon: procoreLogo,
        company: 'Procore Technologies',
        link: 'https://www.procore.com',
        role: 'Software Engineer Intern',
        date: 'July 2018 - September 2018',
        description:
          'Procore Technologies provides cloud-based construction management software to clients across the globe. We create real-time collaboration tools to help our customers more efficiently build skyscrapers, hospitals, retail centers, airports, housing complexes and more.'
      },
      {
        icon: adigamiLogo,
        company: 'Adigami',
        link: 'http://www.adigami.com',
        role: 'Software Engineer Co-op',
        date: 'April 2018 - June 2018',
        description:
          'Adigami is a cloud-based service that enables fast setup using its API connectors with top search engines, ad servers, bid management systems, and social media networks.'
      },
      {
        icon: portalLogo,
        company: 'The Portal',
        link: 'https://www.theportal.io',
        role: 'Software Engineer Intern',
        date: 'October 2017 - April 2018',
        description:
          'The Portal is a California non-profit corporation (a 501 (c) (3), application pending). We shape the future of the local entrepreneurial community by empowering people and organizations to realize their potential. We cultivate individuals to meet the evolving needs of organizations by administering innovative training, apprenticeship and job placement programs that focus on real world experiences.'
      }
    ];

    const Jobs = jobs.map((job, index) => {
      let show;
      if (index === 0) {
        show = this.state.show1;
      } else if (index === 1) {
        show = this.state.show2;
      } else if (index === 2) {
        show = this.state.show3;
      } else if (index === 3) {
        show = this.state.show4;
      } else if (index === 4) {
        show = this.state.show5;
      }
      return (
        <Info
          show={show}
          icon={job.icon}
          company={job.company}
          link={job.link}
          role={job.role}
          date={job.date}
          description={job.description}
        />
      );
    });

    return (
      <Element name='work' className='work-section'>
        <div className='work-section__header'>Work Experience</div>
        <div className='work-section__content'>
          <div className='work-section__content__left'>
            <img
              src={purpleLine}
              className={cx('work-section__content__left__line line-1', {
                fullOpacity: this.state.show2
              })}
              alt='alt'
            />
            <img
              src={purpleLine}
              className={cx('work-section__content__left__line line-2', {
                fullOpacity: this.state.show3
              })}
              alt='alt'
            />
            <img
              src={purpleLine}
              className={cx('work-section__content__left__line line-3', {
                fullOpacity: this.state.show4
              })}
              alt='alt'
            />
            <img
              src={purpleLine}
              className={cx('work-section__content__left__line line-4', {
                fullOpacity: this.state.show5
              })}
              alt='alt'
            />
            <img
              src={purpleLine}
              className={cx('work-section__content__left__line line-5', {
                fullOpacity: this.state.show6
              })}
              alt='alt'
            />

            <div className='work-section__content__left__dot'>
              <img
                src={purpleDot}
                className='work-section__content__left__dot__icon'
                alt='alt'
              />
            </div>
            <div className='work-section__content__left__dot'>
              <img
                src={purpleDot}
                className='work-section__content__left__dot__icon'
                alt='alt'
              />
            </div>
            <div className='work-section__content__left__dot'>
              <img
                src={purpleDot}
                className='work-section__content__left__dot__icon'
                alt='alt'
              />
            </div>
            <div className='work-section__content__left__dot'>
              <img
                src={purpleDot}
                className='work-section__content__left__dot__icon'
                alt='alt'
              />
            </div>
            <div className='work-section__content__left__dot'>
              <img
                src={purpleDot}
                className='work-section__content__left__dot__icon'
                alt='alt'
              />
            </div>
            <div className='work-section__content__left__dot'>
              <img
                src={purpleDot}
                className='work-section__content__left__dot__icon'
                alt='alt'
              />
            </div>
          </div>
          <div className='work-section__content__right'>
            {Jobs}
            <div
              className={cx('work-section__content__right__view-resume', {
                fullOpacity: this.state.show4
              })}
            >
              <div
                onClick={() =>
                  window.open(
                    'https://docs.google.com/viewerng/viewer?url=https://github.com/eltonxue/personal/raw/master/Elton_Xue_Resume.pdf'
                  )
                }
              >
                View Full Resume
              </div>
            </div>
          </div>
        </div>
      </Element>
    );
  }
}

export default Work;
