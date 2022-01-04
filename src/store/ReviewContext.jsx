import React, { useState, createContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

const ReviewContext = createContext();

export const ReviewProvider = ({ children }) => {
  const [review, setReview] = useState([
    {
      id: 1,
      rating: 10,
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, maxime!',
    },
  ]);

  const [reviewEdit, setReviewEdit] = useState({
    item: {},
    edit: false,
  });

  const deleteHandler = (id) => {
    setReview(review.filter((item) => item.id !== id));
  };

  const addHandler = (data) => {
    setReview([
      { id: uuidv4(), rating: data.rating, text: data.review },
      ...review,
    ]);
  };

  const editHandler = (data) => {
    setReviewEdit({
      item: data,
      edit: true,
    });
  };

  const updateHandler = (id, updatedReview) => {
    setReview(
      review.map((item) =>
        item.id === id ? { ...item, ...updatedReview } : item
      )
    );
  };

  return (
    <ReviewContext.Provider
      value={{
        review: review,
        reviewEdit: reviewEdit,
        onDeleteContext: deleteHandler,
        onAddContext: addHandler,
        onEditContext: editHandler,
        onUpdateContext: updateHandler,
      }}
    >
      {children}
    </ReviewContext.Provider>
  );
};

export default ReviewContext;
