import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import BackGradients from './components/BackGradients';
import How from './components/How';


function App() {
  return(
  <div className="home">
    <div className='-z-10 back-light transition-all'>
      <NavBar/>
      <Home/>
      <How/>
      <BackGradients/>
      <div id="test-space" className="h-[5000px]"></div>
    </div>
  </div>
);
}

export default App;
