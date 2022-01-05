import React, { useContext } from 'react';
import './css/Main.css';
import ReviewList from './ReviewList';
import Form from './Form';
import ReviewStats from './ReviewStats';
import ReviewContext from '../store/ReviewContext';

const Main = () => {
  const { isLoading } = useContext(ReviewContext);

  return (
    <main className='container'>
      <Form />
      {isLoading ? (
        <p>Loading ....</p>
      ) : (
        <>
          <ReviewStats />
          <ReviewList />
        </>
      )}
    </main>
  );
};

export default Main;
