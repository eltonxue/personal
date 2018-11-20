import React from 'react';

import ProjectCard from './Card';

import technologist from '../../assets/technologist.png';
import portalLogo from '../../assets/icons/company/portal-logo.png';

import reactIcon from '../../assets/icons/skills/react-original.svg';
import reduxIcon from '../../assets/icons/skills/redux-original.png';
import nodeIcon from '../../assets/icons/skills/nodejs-original.svg';
import expressIcon from '../../assets/icons/skills/express-original.svg';
import dynamoIcon from '../../assets/icons/skills/dynamo-db.png';
import lambdaIcon from '../../assets/icons/skills/lambda-original.svg';
import apacheIcon from '../../assets/icons/skills/apache-original.svg';
import mySQLIcon from '../../assets/icons/skills/mysql-original.svg';
import jQueryIcon from '../../assets/icons/skills/jquery-original.svg';
import htmlIcon from '../../assets/icons/skills/html5-original.svg';
import cssIcon from '../../assets/icons/skills/css3-original.svg';
import sassIcon from '../../assets/icons/skills/sass-original.svg';
import sequelizeIcon from '../../assets/icons/skills/sequelize-original.svg';
import postgresIcon from '../../assets/icons/skills/postgresql-original.svg';
import mochaIcon from '../../assets/icons/skills/mocha-plain.svg';
import chaiIcon from '../../assets/icons/skills/chai-original.png';
import mongooseIcon from '../../assets/icons/skills/mongoose-original.png';
import mongoDBIcon from '../../assets/icons/skills/mongodb-original.svg';

import coreOverflow1 from '../../assets/projects/coreoverflow-1.jpg';
import coreOverflow2 from '../../assets/projects/coreoverflow-2.jpg';
import coreOverflow3 from '../../assets/projects/coreoverflow-3.jpg';
import coreOverflow4 from '../../assets/projects/coreoverflow-4.jpg';
import coreOverflow5 from '../../assets/projects/coreoverflow-5.jpg';
import coreOverflow6 from '../../assets/projects/coreoverflow-6.jpg';
import coreOverflow7 from '../../assets/projects/coreoverflow-7.jpg';

import fablix1 from '../../assets/projects/fablix-1.jpg';
import fablix2 from '../../assets/projects/fablix-2.jpg';
import fablix3 from '../../assets/projects/fablix-3.jpg';
import fablix4 from '../../assets/projects/fablix-4.jpg';
import fablix5 from '../../assets/projects/fablix-5.jpg';
import fablix6 from '../../assets/projects/fablix-6.jpg';

import aceit1 from '../../assets/projects/aceit-1.jpg';
import aceit2 from '../../assets/projects/aceit-2.jpg';
import aceit3 from '../../assets/projects/aceit-3.jpg';
import aceit4 from '../../assets/projects/aceit-4.jpg';
import aceit5 from '../../assets/projects/aceit-5.jpg';
import aceit6 from '../../assets/projects/aceit-6.jpg';
import aceit7 from '../../assets/projects/aceit-7.jpg';
import aceit8 from '../../assets/projects/aceit-8.jpg';

import minder1 from '../../assets/projects/minder-1.jpg';
import minder2 from '../../assets/projects/minder-2.jpg';
import minder3 from '../../assets/projects/minder-3.jpg';
import minder4 from '../../assets/projects/minder-4.jpg';
import minder5 from '../../assets/projects/minder-5.jpg';
import minder6 from '../../assets/projects/minder-6.jpg';

// import save from '../../assets/projects/save-1.jpg';
// import swerve from '../../assets/projects/swerve.png';
// import toobular from '../../assets/projects/toobular.jpg';

import './styles.css';

const projects = [
  {
    skillIcons: [
      {
        src: reactIcon,
        name: 'React'
      },
      {
        src: reduxIcon,
        name: 'Redux'
      },
      {
        src: nodeIcon,
        name: 'Node'
      },
      {
        src: expressIcon,
        name: 'Express'
      },
      {
        src: dynamoIcon,
        name: 'Dynamo'
      },
      {
        src: lambdaIcon,
        name: 'Lambda'
      }
    ],
    carouselItems: [
      coreOverflow1,
      coreOverflow2,
      coreOverflow3,
      coreOverflow4,
      coreOverflow5,
      coreOverflow6,
      coreOverflow7
    ],
    icon: 'https://alternative.me/icons/procore.jpg',
    title: 'CoreOverflow',
    company: 'Procore Technologies',
    description:
      'Internal tool for engineers to ask and answer questions pertaining to Procore development.',
    link: 'https://www.github.com/grantkayes/coreoverflow'
  },
  {
    skillIcons: [
      {
        src: reactIcon,
        name: 'React'
      },
      {
        src: reduxIcon,
        name: 'Redux'
      },
      {
        src: apacheIcon,
        name: 'Apache'
      },
      {
        src: mySQLIcon,
        name: 'MySQL'
      }
    ],
    carouselItems: [fablix1, fablix2, fablix3, fablix4, fablix5, fablix6],
    icon: technologist,
    title: 'Fablix',
    company: 'Personal',
    description:
      'Interactive website that allows search through a large database of modern movies.',
    link: 'https://www.github.com/eltonxue/fablix'
  },
  {
    skillIcons: [
      {
        src: jQueryIcon,
        name: 'JQuery'
      },
      {
        src: htmlIcon,
        name: 'HTML'
      },
      {
        src: cssIcon,
        name: 'CSS'
      },
      {
        src: sassIcon,
        name: 'SASS'
      },
      {
        src: nodeIcon,
        name: 'Node'
      },
      {
        src: expressIcon,
        name: 'Express'
      },
      {
        src: mochaIcon,
        name: 'Mocha'
      },
      {
        src: chaiIcon,
        name: 'Chai'
      },
      {
        src: postgresIcon,
        name: 'Postgres'
      },
      {
        src: sequelizeIcon,
        name: 'Sequelize'
      }
    ],
    carouselItems: [
      aceit1,
      aceit2,
      aceit3,
      aceit4,
      aceit5,
      aceit6,
      aceit7,
      aceit8
    ],
    icon: portalLogo,
    title: 'AceIt',
    company: 'The Portal',
    description: 'Web application for helping students prepare for interviews.',
    link: 'https://www.github.com/eltonxue/aceit'
  },

  {
    skillIcons: [
      {
        src: jQueryIcon,
        name: 'JQuery'
      },
      {
        src: htmlIcon,
        name: 'HTML'
      },
      {
        src: cssIcon,
        name: 'CSS'
      },
      {
        src: sassIcon,
        name: 'SASS'
      },
      {
        src: nodeIcon,
        name: 'Node'
      },
      {
        src: expressIcon,
        name: 'Express'
      },
      {
        src: mongoDBIcon,
        name: 'MongoDB'
      },
      {
        src: mongooseIcon,
        name: 'Mongoose'
      }
    ],
    carouselItems: [minder1, minder2, minder3, minder4, minder5, minder6],
    icon: portalLogo,
    title: 'Minder',
    company: 'The Portal',
    description:
      'Social media website for connecting and chatting with friends.',
    link: 'https://www.github.com/eltonxue/minder'
  }
];

// const moreProjects = [
//   {
//     skillIcons: [
//       {
//         src: jQueryIcon,
//         name: 'JQuery'
//       },
//       {
//         src: htmlIcon,
//         name: 'HTML'
//       },
//       {
//         src: cssIcon,
//         name: 'CSS'
//       },
//       {
//         src: sassIcon,
//         name: 'SASS'
//       },
//       {
//         src: nodeIcon,
//         name: 'Node'
//       },
//       {
//         src: expressIcon,
//         name: 'Express'
//       },
//       {
//         src: mochaIcon,
//         name: 'Mocha'
//       },
//       {
//         src: chaiIcon,
//         name: 'Chai'
//       },
//       {
//         src: postgresIcon,
//         name: 'Postgres'
//       },
//       {
//         src: sequelizeIcon,
//         name: 'Sequelize'
//       }
//     ],
//     carouselItems: [
//       aceit1,
//       aceit2,
//       aceit3,
//       aceit4,
//       aceit5,
//       aceit6,
//       aceit7,
//       aceit8
//     ],
//     icon: portalLogo,
//     title: 'AceIt',
//     company: 'The Portal',
//     description: 'Web application for helping students prepare for interviews.',
//     link: 'https://www.github.com/eltonxue/aceit'
//   },

//   {
//     skillIcons: [
//       {
//         src: jQueryIcon,
//         name: 'JQuery'
//       },
//       {
//         src: htmlIcon,
//         name: 'HTML'
//       },
//       {
//         src: cssIcon,
//         name: 'CSS'
//       },
//       {
//         src: sassIcon,
//         name: 'SASS'
//       },
//       {
//         src: nodeIcon,
//         name: 'Node'
//       },
//       {
//         src: expressIcon,
//         name: 'Express'
//       },
//       {
//         src: mongoDBIcon,
//         name: 'MongoDB'
//       },
//       {
//         src: mongooseIcon,
//         name: 'Mongoose'
//       }
//     ],
//     carouselItems: [minder1, minder2, minder3, minder4, minder5, minder6],
//     icon: portalLogo,
//     title: 'Minder',
//     company: 'The Portal',
//     description:
//       'Social media website for connecting and chatting with friends.',
//     link: 'https://www.github.com/eltonxue/minder'
//   }
// ];

class Projects extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show1: false,
      show2: false,
      show3: false,
      show4: false
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

    if (!this.state.show1 && scrollPos > 0) {
      this.setState({
        show1: true
      });
    }

    if (this.state.show1 && scrollPos === 0) {
      this.setState({
        show1: false
      });
    }

    if (!this.state.show2 && scrollPos > 550) {
      this.setState({
        show2: true
      });
    }

    if (this.state.show2 && scrollPos <= 550) {
      this.setState({
        show2: false
      });
    }

    if (!this.state.show3 && scrollPos > 1150) {
      this.setState({
        show3: true
      });
    }

    if (this.state.show3 && scrollPos <= 1150) {
      this.setState({
        show3: false
      });
    }

    if (!this.state.show4 && scrollPos > 1550) {
      this.setState({
        show4: true
      });
    }

    if (this.state.show4 && scrollPos <= 1550) {
      this.setState({
        show4: false
      });
    }
  };

  viewGitHub = () => {
    window.open('https://www.github.com/eltonxue');
  };

  render() {
    const Projects = projects.map(({ ...rest }, index) => {
      let show;
      if (index === 0) {
        show = this.state.show1;
      } else if (index === 1) {
        show = this.state.show2;
      } else if (index === 2) {
        show = this.state.show3;
      } else if (index === 3) {
        show = this.state.show4;
      }

      return <ProjectCard {...rest} show={show} />;
    });

    return (
      <div className="projects-section">
        <div className="projects-section-absolute">
          {Projects}
          <div className="projects-section-view-more-projects">
            <h2 onClick={this.viewGitHub}>View More Projects on GitHub</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
