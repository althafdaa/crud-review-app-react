import React from 'react';
import Card from '../components/wrapper/Card';
import { Link } from 'react-router-dom';

const AboutMe = () => {
  return (
    <Card>
      <h2>About Me</h2>
      <p>
        This app is my first react router introduction and using CRUD App based
        on ecommerce Review/Comments with ratings!
      </p>
      <a
        className='text-decoration-none'
        href='https://github.com/althafdaa'
        target='__blank'
      >
        Find Me
      </a>

      <Link className='text-decoration-none' to='/'>
        Back to Home
      </Link>
    </Card>
  );
};

export default AboutMe;
