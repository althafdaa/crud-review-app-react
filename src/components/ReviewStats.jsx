import React from 'react';

const ReviewStats = ({ data }) => {
  let average =
    data.reduce((acc, curr) => {
      return acc + curr.rating;
    }, 0) / data.length;

  return (
    <div className='review-stats d-flex justify-content-between mb-4'>
      <h5>{data.length} Reviews</h5>
      <h5>Average Rating: {isNaN(average) ? 0 : average.toFixed(1)}</h5>
    </div>
  );
};

export default ReviewStats;
