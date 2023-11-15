import React from 'react';


const CourseManagement = () => {
  return (
    <div className="flex text-center justify-center items-center flex-col pt-[90px]">
      <div className='z-10 mb-80 lg:mt-60 mobile:mt-40'>
        <div className="font-bold txt-light mobile:text-[40px] lg:text-[64px]">
          Manage your<span className="txt-main">&nbsp;Coursework</span>
        </div>
        <form>
          <div className="mt-5">
            <input
              type="text"
              placeholder="Field 1"
              className="input-field"
            />
          </div>
          <div className="mt-5">
            <input
              type="text"
              placeholder="Field 2"
              className="input-field"
            />
          </div>
          <div className="mt-5">
            <input
              type="text"
              placeholder="Field 3"
              className="input-field"
            />
          </div>
          <div className="mt-5">
            <input
              type="text"
              placeholder="Field 4"
              className="input-field"
            />
          </div>
          <button
            className="text-white back-main px-[80px] py-[15px] mt-10 rounded-md text-[25px] hover:bg-blue-400 active:bg-blue-500 transition-all"
          >
            Get Started
          </button>
        </form>
      </div>
    </div>
  );
};

export default CourseManagement;
