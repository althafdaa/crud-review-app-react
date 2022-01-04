import React, { useContext } from 'react';
import './css/ReviewList.css';
import Card from './wrapper/Card';
import { FaEdit, FaTimes } from 'react-icons/fa';
import ReviewContext from '../store/ReviewContext';

const ReviewList = () => {
  const { review, onDeleteContext, onEditContext } = useContext(ReviewContext);

  if (review.length === 0) {
    return <p>No Feedback yet</p>;
  }

  const ReviewText = review.map((review) => (
    <Card key={review.id}>
      <button onClick={() => onEditContext(review)} className='edit'>
        <FaEdit className='btn-icons' />
      </button>
      <button onClick={() => onDeleteContext(review.id)} className='close'>
        <FaTimes className='btn-icons' />
      </button>

      <div className='review-rating__display position-absolute'>
        {review.rating}
      </div>
      <p className='card-text'>{review.text}</p>
    </Card>
  ));

  return <>{ReviewText}</>;
};

export default ReviewList;
