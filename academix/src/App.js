import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AboutUs from './AboutUs';
import CourseManager from './CourseManager';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/course-manager" element={<CourseManager />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

const Home = () => (
  <div className="home">
    <h1>Welcome to the Home Page</h1>
    <div className="button-container">
      <Link to="/about-us">
        <button className="navigation-button">About Us</button>
      </Link>
      <Link to="/course-manager">
        <button className="navigation-button">Course Manager</button>
      </Link>
    </div>
    {/* Add content for the home page */}
  </div>
);

export default App;
