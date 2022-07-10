import React from 'react';
import { Link, matchPath } from 'react-router-dom';

function About() {
  const { url } = matchPath;

  return (
    <div className="about__content">
      <ul className="about__list">
        <li>
          <Link to={`${url}/about-app`}>About App</Link>
        </li>
        <li>
          <Link to={`${url}/about-author`}>About Author</Link>
        </li>
      </ul>
    </div>
  );
}

export default About;
