import React from 'react';
import { Carousel } from 'react-bootstrap';
import cx from 'classnames';

import './styles.css';

const ProjectCard = ({
  skillIcons,
  carouselItems,
  icon,
  title,
  company,
  description,
  link,
  show
}) => {
  const SkillIcons = skillIcons.map(skill => {
    return (
      <div className="skill">
        <img src={skill.src} alt="alt" />
        <p>{skill.name}</p>
      </div>
    );
  });

  const CarouselItems = carouselItems.map(image => (
    <Carousel.Item>
      <img width={370} height={320} alt="alt" src={image} />
      <Carousel.Caption />
    </Carousel.Item>
  ));

  return (
    <div className={cx('project-card', { slideUp: show })}>
      <Carousel interval={null}>{CarouselItems}</Carousel>
      <div className="project-info">
        <img src={icon} className="project-icon" alt="alt" />
        <h1 className="project-title">{title}</h1>
        <h2 className="project-subtitle">{company}</h2>
        <p className="project-description">{description}</p>
        <div className="skills-container">{SkillIcons}</div>
        <div
          className="project-view"
          onClick={() => window.open(link, '_blank')}
        >
          View Project
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
