import React from 'react'
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/course-management');
  };
  return (
    <div>
    <div className="flex text-center justify-center items-center flex-col pt-[90px] ">
      
      <div className='z-10 mb-80 lg:mt-60 mobile:mt-40'>
        <div className=" font-bold txt-light mobile:text-[40px] lg:text-[64px]">
          Manage your<span className="txt-main">&nbsp;Coursework</span>
        </div>
        <div className="txt-ternary-light lg:text-[20px] mt-5 md:flex-row flex mobile:flex-col mobile:items-center justify-center">
        <div>Connect to our website application to&nbsp;</div><div className="type mobile:w-[155px] w-auto">save your time</div>
        </div>
        <button onClick={handleClick} className="text-black back-main px-[80px] py-[15px] mt-10 rounded-md text-[25px] hover:bg-red-800 active:bg-red-500 transition-all" >
          Get Started
        </button>
      </div>
    </div>
    <div className='flex justify-center flex-col items-center'>
    <div className="justify-center text-center font-bold txt-light mt-[10rem] mobile:text-[40px] lg:text-[64px] flex mobile:flex-col lg:flex-row">
      How does it <span className="txt-main">&nbsp;Work ?</span>
    </div>
    <div className="z-10 flex lg:flex-row mobile:flex-col mb-60 justify-center items-start mt-20">
        <div className='flex flex-col items-center justify-center px-10 lg:px-10 lg:flex-col mobile:flex-row mobile:px-0'>
            <img className='mb-9 mobile:pr-4 lg:pr-0 lg:w-[157px] mobile:w-[20vw]' src="./assets/connection-blue.png" alt="" />
            <div className='txt-light lg:text-[2rem] mobile:text-[1rem] text-center'>
                Connect to our Application  <br /> on our website
            </div>
        </div>
        <div className='flex flex-col items-center justify-center px-10 lg:px-10 lg:flex-col mobile:flex-row mobile:px-0'>
            <img className='mb-9 mobile:pr-4 lg:pr-0 lg:w-[157px] mobile:w-[20vw]' src="./assets/male-blue.png" alt="" />
            <div className='txt-light lg:text-[2rem] mobile:text-[1rem] text-center'>
                Give your current course information <br /> 
            </div>
        </div>
        <div className='flex flex-col items-center justify-center lg:px-10 lg:flex-col mobile:flex-row mobile:px-0 '>
            <img className='mb-9 mobile:pr-4 lg:pr-0 lg:w-[157px] mobile:w-[20vw]' src="./assets/conversation-blue.png" alt="" />
            <div className='txt-light lg:text-[2rem] mobile:text-[1rem] text-center'>
                Recieve <br /> an organized plan
            </div>
        </div>
    </div>
</div>
</div>
  )
}

export default Home