import { Link } from 'gatsby';
import React from 'react';

const links = [
  {
    url: '/projects/',
    title: 'Projects',
  },
  {
    url: '/demos/',
    title: 'Demos',
  },
];

export default function ProjectsNav({ activeLink }) {
  return (
    <div className="tabs">
      <ul className="container">
        {links.map(({ url, title }) => (
          <li key={url} className={activeLink === url ? 'is-active' : ''}>
            {activeLink === url ? (
              <a>{title}</a>
            ) : (
              <Link to={url}>{title}</Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
