import React, { useState } from 'react';

const CourseManagement = () => {
  const [quartersValue, setQuartersValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [field3Value, setField3Value] = useState('');
  const [field4Value, setField4Value] = useState('');

  const handleQuartersChange = (event) => {
    setQuartersValue(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmailValue(event.target.value);
  };

  const handleField3Change = (event) => {
    setField3Value(event.target.value);
  };

  const handleField4Change = (event) => {
    setField4Value(event.target.value);
  };

  return (
    <div className="flex text-center justify-center items-center flex-col pt-[90px]">
      <div className="z-10 mb-80 lg:mt-60 mobile:mt-40">
        <div className="font-bold txt-light mobile:text-[40px] lg:text-[64px]">
          Tell us about<span className="txt-main">&nbsp;yourself</span>
        </div>
        <form>
          <div className="lg:text-[2rem] mobile:text-[1rem] text-center mt-5">
            <label className="flex flex-col-reverse relative focus group">
              <input
                type="text"
                name="quarters"
                value={quartersValue}
                onChange={handleQuartersChange}
                required
                className="mt-3 mx-3 border-2 border-black px-5 py-3 leading-9"
              />
              
              <span className={`px-3 absolute text-xl transform -translate-y-3 left-4 transition ${quartersValue !== '' && 'translate-y-[-70px]'}`}>
                Quarters
              </span>

              <span className="ml-auto leading-10">* Required</span>
            </label>
          </div>

          <div className="lg:text-[2rem] mobile:text-[1rem] text-center mt-5">
            <label className="flex flex-col-reverse relative focus group">
              <input
                type="text"
                name="email"
                value={emailValue}
                onChange={handleEmailChange}
                required
                className="mt-3 mx-3 border-2 border-black px-5 py-3 leading-9"
              />

              <span className={`px-3 absolute text-xl transform -translate-y-3 left-4 transition ${emailValue !== '' && 'translate-y-[-70px]'}`}>
                Units
              </span>


              <span className="ml-auto leading-10">* Required</span>
            </label>
          </div>

          <div className="lg:text-[2rem] mobile:text-[1rem] text-center mt-5">
          <label className="flex flex-col-reverse relative focus group">
              <input
                type="text"
                name="email"
                value={field3Value}
                onChange={handleField3Change}
                required
                className="mt-3 mx-3 border-2 border-black px-5 py-3 leading-9"
              />

              <span className={`px-3 absolute text-xl transform -translate-y-3 left-4 transition ${field3Value !== '' && 'translate-y-[-70px]'}`}>
                Interests
              </span>


              <span className="ml-auto leading-10">* Required</span>
            </label>
          </div>

          <div className="lg:text-[2rem] mobile:text-[1rem] text-center mt-5">
          <span className={`px-3  text-xl transform -translate-y-1 transition ${field4Value !== '' && 'translate-y-[-100px]'}`}>
                Courses you have taken
              </span>
          <label className="flex flex-col-reverse relative focus group">
          
              <textarea
                type="text"
                name="email"
                value={field4Value}
                onChange={handleField4Change}
                required
                className="mt-3 mx-3 border-2 border-black px-5 py-3 leading-9"
              />
            </label>
          </div>

          <button className="text-white back-main px-[80px] py-[15px] mt-10 rounded-md text-[25px] hover:bg-red-700 active:bg-red-500 transition-all">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CourseManagement;
