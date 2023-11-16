import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  // Use the useNavigate hook to get access to the navigate function
  const navigate = useNavigate();
  
  return (
    <div className="z-20 mobile:px-10 lg:px-60 lg:text-[26px] lg:h-[80px] mobile:h-[70px] w-[100vw] flex text-5xl items-center justify-between font-normal shadow-md fixed nav-light txt-light">
      <div className="cursor-pointer mobile:w-10 lg:w-20 ">
        <img id="logo" src="./assets/person_think_1.png" alt="logos" />
      </div>
      <ul className="justify-around items-center sm:flex hidden">
        <li
          className="list-none mx-5 hover:border-b-4 border-blue-600 cursor-pointer p-2 transition-all"
          onClick={() => navigate('/')}
        >
          Home
        </li>
        <li
          className="list-none mx-5 hover:border-b-4 border-blue-600 cursor-pointer p-2 transition-all"
          onClick={() => navigate('/about-us')}
        >
          About Us
        </li>
        <li
          className="list-none mx-5 hover:border-b-4 border-blue-600 cursor-pointer p-2 transition-all"
          onClick={() =>  navigate('/course-management')}
        >
          CourseWork Manager
        </li>
        <li className="list-none mx-5 hover:border-b-4 border-blue-600 cursor-pointer p-2 transition-all">
          <button onClick={window['theme']} className="text-center justify-center flex">
            <img className="w-[50px]" src="./assets/icons8-sun-100.png" alt="sun" id="icon" />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
