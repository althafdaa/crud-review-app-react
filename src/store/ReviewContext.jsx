import React, { useState, createContext, useEffect } from 'react';

const ReviewContext = createContext();

export const ReviewProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [review, setReview] = useState([
    // {
    //   id: 1,
    //   rating: 10,
    //   text: 'Your product is excellent, lets do repeat order for next month!',
    // },
  ]);

  useEffect(() => {
    fetchReview();
  }, []);

  const fetchReview = async () => {
    const res = await fetch('http://localhost:5000/review');
    const data = await res.json();
    setReview(data);
    setIsLoading(false);
  };

  const [reviewEdit, setReviewEdit] = useState({
    item: {},
    edit: false,
  });

  const deleteHandler = async (id) => {
    const res = await fetch(`http://localhost:5000/review/${id}`, {
      method: 'DELETE',
    });

    setReview(review.filter((item) => item.id !== id));
  };

  const addHandler = async (data) => {
    const res = await fetch('http://localhost:5000/review', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const resJSON = await res.json();

    setReview([
      { id: resJSON.id, rating: resJSON.rating, text: resJSON.text },
      ...review,
    ]);
  };

  const editHandler = (data) => {
    setReviewEdit({
      item: data,
      edit: true,
    });
  };

  const updateHandler = async (id, updatedReview) => {
    const res = await fetch(`http://localhost:5000/review/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedReview),
    });

    const resJSON = await res.json();

    setReview(
      review.map((item) => (item.id === id ? { ...item, ...resJSON } : item))
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
        isLoading: isLoading,
      }}
    >
      {children}
    </ReviewContext.Provider>
  );
};

export default ReviewContext;
