import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import How from './components/How';
import BackGradients from './components/BackGradients';
import CourseManagement from './components/CourseManagement';

function App() {
  return (
    <BrowserRouter>
      <div className="home">
        <div className='-z-10 back-light transition-all'>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/course-management" element={<CourseManagement />} />
            {/* Add more routes for additional pages */}
          </Routes>
          <BackGradients />
          <div id="test-space" className="h-[5000px]"></div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
