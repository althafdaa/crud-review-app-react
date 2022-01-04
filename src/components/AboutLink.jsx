import React from 'react';
import { FaQuestion } from 'react-icons/fa';
import './css/AboutLink.css';
import { Link } from 'react-router-dom';

const AboutLink = () => {
  return (
    <div>
      <Link
        className='text-decoration-none about-link'
        to={{
          pathname: '/about',
        }}
      >
        <span>About Me</span>
        <FaQuestion size={20} />
      </Link>
    </div>
  );
};

export default AboutLink;
