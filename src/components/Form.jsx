import React, { useState, useContext, useEffect } from 'react';
import Card from './wrapper/Card';
import './css/Form.css';
import RatingReview from './RatingReview';
import ReviewContext from '../store/ReviewContext';

const Form = () => {
  const { onAddContext, reviewEdit, onUpdateContext } =
    useContext(ReviewContext);

  const [review, setReview] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [alert, setAlert] = useState('');
  const [rating, setRating] = useState(0);
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    if (reviewEdit.edit) {
      setBtnDisabled(false);
      setIsUpdating(true);
      setReview(reviewEdit.item.text);
      setRating(reviewEdit.item.rating);
    }
  }, [reviewEdit]);

  const inputHandler = (text) => {
    if (review === '' || rating === 0) {
      setBtnDisabled(true);
      setAlert(null);
    } else if (review !== '' && review.trim().length <= 10) {
      setAlert('Review must be at least 10 characters');
      setBtnDisabled(true);
    } else {
      setAlert(null);
      setBtnDisabled(false);
    }

    setReview(text.target.value);
  };

  const btnDisabledBlock = (
    <button type='submit' className='input-group-text btn btn-send disabled'>
      Send
    </button>
  );

  const btnEnabledBlock = (
    <button type='submit' className='input-group-text btn btn-send'>
      Send
    </button>
  );

  const btnUpdateBlock = (
    <button type='submit' className='input-group-text btn btn-send'>
      Update
    </button>
  );

  const ratingHandler = (rating) => {
    setRating(rating);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (review.trim().length > 10) {
      const newReview = {
        review: review,
        rating: rating,
      };

      if (reviewEdit.edit) {
        onUpdateContext(reviewEdit.item.id, newReview);
        setReview('');
        setBtnDisabled(true);
        setIsUpdating(false);
      } else {
        onAddContext(newReview);
        setReview('');
        setBtnDisabled(true);
      }
    }
  };

  return (
    <Card>
      <h3 className='text-center mb-3'>
        Please give us your review, how is it going ?
      </h3>
      <form
        className='input-group mb-3 d-flex flex-column'
        onSubmit={submitHandler}
      >
        <RatingReview RatingSelected={ratingHandler} />
        <div className='input-group'>
          <input
            className='form-control'
            type='text'
            onChange={inputHandler}
            value={review}
            placeholder='Write your review'
          />
          {isUpdating && btnUpdateBlock}
          {btnDisabled && !isUpdating && btnDisabledBlock}
          {!btnDisabled && !isUpdating && btnEnabledBlock}
        </div>
      </form>
      {alert && <p className='text-center'>{alert}</p>}
    </Card>
  );
};

export default Form;
