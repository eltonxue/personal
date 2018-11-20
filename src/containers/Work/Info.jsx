import React from 'react';
import cx from 'classnames';

import './styles.css';

const Info = ({ show, icon, company, link, role, date, description }) => {
  return (
    <div className={cx('job-info', { slideLeft: show })}>
      <div className="job-info__content">
        <img
          className="job-info__content__icon"
          src={icon}
          onClick={() => (window.location.href = link)}
          alt="alt"
        />
        <div className="job-info__content__title">
          <div
            className="job-info__content__title__company"
            onClick={() => (window.location.href = link)}
          >
            {company}
          </div>
          <div className="job-info__content__title__role">{role}</div>
          <div className="job-info__content__title__date">{date}</div>
        </div>
        <div className="job-info__content__body">{description}</div>
      </div>
    </div>
  );
};

export default Info;
