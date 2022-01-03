import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const DUMMY_REVIEW = [
  {
    id: 1,
    rating: 10,
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut itaque quam unde?',
  },
  {
    id: 2,
    rating: 7,
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut itaque quam unde?',
  },
  {
    id: 3,
    rating: 8,
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut itaque quam unde?',
  },
  {
    id: 4,
    rating: 1,
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut itaque quam unde?',
  },
];

function App() {
  const [review, setReview] = useState(DUMMY_REVIEW);

  const onDeleteHandler = (id) => {
    console.log(id);
    setReview(review.filter((item) => item.id !== id));
  };

  return (
    <>
      <Header />
      <Main onDelete={onDeleteHandler} data={review} />
      <Footer />
    </>
  );
}

export default App;
