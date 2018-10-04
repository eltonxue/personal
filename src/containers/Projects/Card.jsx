import React from 'react';
import { Carousel } from 'react-bootstrap';

import './styles.css';

const ProjectCard = ({
  skillIcons,
  carouselItems,
  icon,
  title,
  company,
  description,
  link
}) => {
  const SkillIcons = skillIcons.map(skill => {
    return (
      <div className="skill">
        <img src={skill.src} />
        <p>{skill.name}</p>
      </div>
    );
  });

  const image = 'https://i.ytimg.com/vi/50Twc4ghBFM/maxresdefault.jpg';

  const CarouselItems = carouselItems.map(image => (
    <Carousel.Item>
      <img width={370} height={320} alt="900x500" src={image} />
      <Carousel.Caption />
    </Carousel.Item>
  ));
  return (
    <div className="project-card">
      <Carousel interval={null}>{CarouselItems}</Carousel>
      <div className="project-info">
        <img src={icon} className="project-icon" />
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
