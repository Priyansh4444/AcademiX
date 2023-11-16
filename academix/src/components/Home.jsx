import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/course-management');
  };

  return (
    <div>
      <div className="flex text-center justify-center items-center flex-col pt-[90px]">
        <div className='z-10 mb-80 lg:mt-60 mobile:mt-40'>
          <div className=" font-bold txt-light mobile:text-[40px] lg:text-[64px]">
            Manage your<span className="txt-main">&nbsp;Coursework</span>
          </div>
          <div className="txt-ternary-light lg:text-[20px] mt-5 md:flex-row flex mobile:flex-col mobile:items-center justify-center">
            <div>Connect to our website application to&nbsp;</div><div className="type mobile:w-[155px] w-auto">save your time</div>
          </div>
          <button onClick={handleClick} className="text-black back-main px-[80px] py-[15px] mt-10 rounded-md text-[25px] hover:bg-red-800 active:bg-red-500 transition-all">
            Get Started
          </button>
        </div>
      </div>
      <div className='flex justify-center flex-col items-center'>
        {/* Rest of your component */}
      </div>
    </div>
  );
};

export default Home;
