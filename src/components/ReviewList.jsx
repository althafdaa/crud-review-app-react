import React from 'react';
import './css/ReviewList.css';
import Card from './wrapper/Card';
import { FaEdit, FaTimes } from 'react-icons/fa';

const ReviewList = ({ data, onDelete }) => {
  if (data.length === 0) {
    return <p>No Feedback yet</p>;
  }

  const deleteHandler = (id) => {
    return console.log(id);
  };

  const ReviewText = data.map((review) => (
    <Card key={review.id}>
      <button className='close'>
        <FaEdit className='btn-icons' />
      </button>
      <button onClick={() => onDelete(review.id)} className='edit'>
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
