import React, { useState } from "react";

const CourseManagement = () => {
  const [quartersValue, setQuartersValue] = useState("");
  const [unitValue, setUnitValue] = useState("");
  const [field3Value, setField3Value] = useState("");
  const [field4Value, setField4Value] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");

  const handleDropdownChange = (event) => {
    setSelectedCourse(event.target.value);
  };

  const handleQuartersChange = (event) => {
    setQuartersValue(event.target.value);
  };

  const handleUnitChange = (event) => {
    setUnitValue(event.target.value);
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

              <span
                className={`px-3 absolute text-xl transform -translate-y-3 left-4 transition ${
                  quartersValue !== "" && "translate-y-[-70px]"
                }`}
              >
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
                value={unitValue}
                onChange={handleUnitChange}
                required
                className="mt-3 mx-3 border-2 border-black px-5 py-3 leading-9"
              />

              <span
                className={`px-3 absolute text-xl transform -translate-y-3 left-4 transition ${
                  unitValue !== "" && "translate-y-[-70px]"
                }`}
              >
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

              <span
                className={`px-3 absolute text-xl transform -translate-y-3 left-4 transition ${
                  field3Value !== "" && "translate-y-[-70px]"
                }`}
              >
                Interests
              </span>

              <span className="ml-auto leading-10">* Required</span>
            </label>
          </div>
          <div className="lg:text-[2rem] mobile:text-[1rem] text-center mt-5">
            <label className="flex flex-col-reverse relative focus group">
              <select
                name="coursesDropdown"
                value={selectedCourse}
                onChange={handleDropdownChange}
                required
                className="mt-3 mx-3 border-2 border-black px-5 py-3 leading-9 appearance-none"
              >
                <option value="" disabled selected>
                  Select a course
                </option>
                <option value="Algorithms">Algorithms</option>
                <option value="Architecture and Embedded Systems">Architecture and Embedded Systems</option>
                <option value="Bioinformatics">Bioinformatics</option>
                <option value="General CS track">General CS track</option>
                <option value="Information">Information</option>
                <option value="Intelligent Systems">Intelligent Systems</option>
                <option value="Networked Systems">Networked Systems</option>
                <option value="Systems and Software">Systems and Software</option>
                <option value="Visual Computing">Visual Computing</option>
              </select>
              <span
                className={`px-3 absolute text-xl transform -translate-y-3 left-4 transition ${
                  selectedCourse !== "" ? ": translate-y-[-70px]" :"hidden"
                }`}
              >
                Specialization

              </span>
              <span className="ml-auto leading-10">* Required</span>
            </label>
          </div>
          <div className="lg:text-[2rem] mobile:text-[1rem] text-center mt-5">
            <span
              className={`px-3  text-xl transform -translate-y-1 transition ${
                field4Value !== "" && "translate-y-[-100px]"
              }`}
            >
              Courses you have taken
            </span>
            <label className="flex flex-col-reverse relative focus group">
              <textarea
                type="text"
                name="email"
                value={field4Value}
                onChange={handleField4Change}
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
