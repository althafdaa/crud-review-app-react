import React from 'react';
import './Card.css';

const Card = ({ children, reverse }) => {
  return (
    <div
      className={`card mx-auto position-relative mb-4 ${reverse && 'reverse'}`}
    >
      {children}
    </div>
  );
};

export default Card;
