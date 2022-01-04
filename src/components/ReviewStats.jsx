import React from 'react';
import { useContext } from 'react';
import ReviewContext from '../store/ReviewContext';

const ReviewStats = () => {
  const { review } = useContext(ReviewContext);

  let average =
    review.reduce((acc, curr) => {
      return acc + curr.rating;
    }, 0) / review.length;

  return (
    <div className='review-stats d-flex justify-content-between mb-4'>
      <h5>{review.length} Reviews</h5>
      <h5>Average Rating: {isNaN(average) ? 0 : average.toFixed(1)}</h5>
    </div>
  );
};

export default ReviewStats;
