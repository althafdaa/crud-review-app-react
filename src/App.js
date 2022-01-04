import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { ReviewProvider } from './store/ReviewContext';

import AboutMe from './pages/AboutMe';
import AboutLink from './components/AboutLink';

function App() {
  return (
    <ReviewProvider>
      <Router>
        <Header />
        <AboutLink />
        <Routes>
          <Route
            exact
            path='/'
            element={
              <>
                {' '}
                <Main />
                <Footer />
              </>
            }
          ></Route>

          <Route
            path='/about'
            element={
              <div className='container'>
                <AboutMe />
              </div>
            }
          />
        </Routes>
      </Router>
    </ReviewProvider>
  );
}

export default App;
