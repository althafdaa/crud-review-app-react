import React, { useState, useContext, useEffect } from 'react';
import './css/RatingReview.css';
import ReviewContext from '../store/ReviewContext';

const RatingReview = ({ RatingSelected }) => {
  const [whichRating, setWhichRating] = useState(0);

  const { reviewEdit, onUpdateContext } = useContext(ReviewContext);

  useEffect(() => {
    RatingSelected(reviewEdit.item.rating);
    setWhichRating(reviewEdit.item.rating);
  }, [reviewEdit]);

  useEffect(() => {
    RatingSelected(0);
    setWhichRating(0);
  }, [onUpdateContext]);

  const ratingHandlerOnChange = (e) => {
    RatingSelected(+e.currentTarget.value);
    setWhichRating(+e.currentTarget.value);
  };

  return (
    <ul className='list-unstyled d-flex align-items-center justify-content-around rating'>
      <li className='list-review'>
        <input
          type='radio'
          name='rating'
          id='num1'
          value='1'
          onChange={ratingHandlerOnChange}
          checked={whichRating === 1}
        />
        <label htmlFor='num1'>1</label>
      </li>
      <li className='list-review'>
        <input
          type='radio'
          name='rating'
          id='num2'
          value='2'
          onChange={ratingHandlerOnChange}
          checked={whichRating === 2}
        />
        <label htmlFor='num2'>2</label>
      </li>
      <li className='list-review'>
        <input
          type='radio'
          name='rating'
          id='num3'
          value='3'
          onChange={ratingHandlerOnChange}
          checked={whichRating === 3}
        />
        <label htmlFor='num3'>3</label>
      </li>
      <li className='list-review'>
        <input
          type='radio'
          name='rating'
          id='num4'
          value='4'
          onChange={ratingHandlerOnChange}
          checked={whichRating === 4}
        />
        <label htmlFor='num4'>4</label>
      </li>
      <li className='list-review'>
        <input
          type='radio'
          name='rating'
          id='num5'
          value='5'
          onChange={ratingHandlerOnChange}
          checked={whichRating === 5}
        />
        <label htmlFor='num5'>5</label>
      </li>
      <li className='list-review'>
        <input
          type='radio'
          name='rating'
          id='num6'
          value='6'
          onChange={ratingHandlerOnChange}
          checked={whichRating === 6}
        />
        <label htmlFor='num6'>6</label>
      </li>
      <li className='list-review'>
        <input
          type='radio'
          name='rating'
          id='num7'
          value='7'
          onChange={ratingHandlerOnChange}
          checked={whichRating === 7}
        />
        <label htmlFor='num7'>7</label>
      </li>
      <li className='list-review'>
        <input
          type='radio'
          name='rating'
          id='num8'
          value='8'
          onChange={ratingHandlerOnChange}
          checked={whichRating === 8}
        />
        <label htmlFor='num8'>8</label>
      </li>
      <li className='list-review'>
        <input
          type='radio'
          name='rating'
          id='num9'
          value='9'
          onChange={ratingHandlerOnChange}
          checked={whichRating === 9}
        />
        <label htmlFor='num9'>9</label>
      </li>
      <li className='list-review'>
        <input
          type='radio'
          name='rating'
          id='num10'
          value='10'
          onChange={ratingHandlerOnChange}
          checked={whichRating === 10}
        />
        <label htmlFor='num10'>10</label>
      </li>
    </ul>
  );
};

export default RatingReview;
