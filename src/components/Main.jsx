import React from 'react';
import './css/Main.css';
import ReviewList from './ReviewList';
import Form from './Form';
import ReviewStats from './ReviewStats';

const Main = ({ data, onDelete }) => {
  return (
    <main className='container'>
      <Form />
      <ReviewStats data={data} />
      <ReviewList onDelete={onDelete} data={data} />
    </main>
  );
};

export default Main;
