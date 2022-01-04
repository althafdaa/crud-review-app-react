import React from 'react';
import './css/Main.css';
import ReviewList from './ReviewList';
import Form from './Form';
import ReviewStats from './ReviewStats';

const Main = () => {
  return (
    <main className='container'>
      <Form />
      <ReviewStats />
      <ReviewList />
    </main>
  );
};

export default Main;
