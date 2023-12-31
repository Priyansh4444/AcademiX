import React, { useState } from "react";

const CourseManagement = () => {
  const [unitValue, setUnitValue] = useState("");
  const [minorValue, setminorValue] = useState("");
  const [field5Value, setField5Value] = useState("");
  const [year1Value, setyear1Value] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [gradDate, setgradDate] = useState("");
  const [startTerm, setstartTerm] = useState("");
  const [error, setError] = React.useState(false);
  const [formDatas, setFormData] = useState([]);
  const [toggleSummer, setSummer] = useState("");
  const [responseData, setResponseData] = useState(null);

  const handleBlur = () => {
    if (field5Value - year1Value < 3) {
      setError(true);
    } else {
      setError(false);
    }
  };
  const handleInputChange = (event, rowIndex, columnIndex) => {
    // Create a copy of the current state
    const updatedFormData = [...formDatas];

    // Ensure that the row is initialized
    updatedFormData[rowIndex] = updatedFormData[rowIndex] || [];

    // Set the value in the nested array
    updatedFormData[rowIndex][columnIndex] = event.target.value;

    // Update the state
    setFormData(updatedFormData);
  };

  const generateSemesterTitle = (index) => {
    const semesters = ["Summer", "Fall", "Winter", "Spring"];
    const startYear = parseInt(year1Value, 10);
    const year = startYear + Math.floor((index + 2) / semesters.length);
    const semester = semesters[index % semesters.length];
    return `${semester} ${year}`;
  };

  const handlestartTerm = (event) => {
    setstartTerm(event.target.value);
  };

  const handlegradDate = (event) => {
    setgradDate(event.target.value);
  };

  const handleDropdownChange = (event) => {
    setSelectedCourse(event.target.value);
  };

  const handleSummerChange = (event) => {
    setSummer(event.target.value);
  };

  const handleUnitChange = (event) => {
    setUnitValue(event.target.value);
  };

  const handleminorChange = (event) => {
    setminorValue(event.target.value);
  };

  const handleField5Change = (event) => {
    setField5Value(event.target.value);
  };
  const handleyear1Change = (event) => {
    setyear1Value(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Prepare the data to be sent to the backend
    const formData = {
      term1: startTerm,
      year1: year1Value,
      units: unitValue,
      term2: gradDate,
      year2: field5Value,
      minor: minorValue,
      text_area: formDatas,
      specialization: selectedCourse,
      summertogle: toggleSummer,
    };
    console.log(formData);

    // Make an HTTP request to your backend
    try {
      const response = await fetch("http://127.0.0.1:8000/course-management", {
        method: "POST", // Use POST for submitting form data
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Handle the response from the server (if needed)
      const data = await response.json();
      console.log("Response from server:", data.message);
      setResponseData(data.message);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="flex text-center justify-center items-center flex-col pt-[90px]">
        <div className=" w-1/2 z-10 mb-80 lg:mt-60 mobile:mt-40">
          <div className="font-bold txt-light mobile:text-[40px] lg:text-[64px]">
            Tell us about<span className="txt-main">&nbsp;yourself</span>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="lg:text-[2rem] mobile:text-[1rem] text-center mt-5">
              <div className="flex">
                <span className="txt-light text-left ml-5 leading-10">
                  Expected Start Date
                </span>

                <span className="txt-light text-right ml-auto leading-10">
                  * Required
                </span>
              </div>
              <label className="flex flex-row relative focus group">
                <select
                  name="coursesDropdown"
                  value={startTerm}
                  onChange={handlestartTerm}
                  required
                  className="mt-3 w-1/2 bg-transparent txt-main mx-3 border-2 bord px-5 py-3 leading-9 appearance-none"
                >
                  <option value="" disabled selected>
                    Term
                  </option>
                  <option value="Winter">Winter</option>
                  <option value="Fall">Fall</option>
                </select>
                <input
                  type="number"
                  min="2023"
                  max="2050"
                  name="expStart"
                  value={year1Value}
                  onChange={handleyear1Change}
                  onBlur={handleBlur}
                  required
                  className="mt-3 w-1/2 txt-main bg-transparent mx-3 border-2 bord px-5 py-3 leading-9"
                />
              </label>
            </div>

            <div className="lg:text-[2rem] mobile:text-[1rem] text-center mt-5">
              <label className="flex flex-col-reverse relative focus group">
                <input
                  type="number"
                  min="12"
                  max="20"
                  name="units"
                  value={unitValue}
                  onChange={handleUnitChange}
                  required
                  className="mt-3 txt-main bg-transparent mx-3 border-2 bord px-5 py-3 leading-9"
                />

                <span
                  className={`txt-light px-3 absolute text-xl transform -translate-y-3 left-4 transition ${
                    unitValue !== "" && "translate-y-[-70px]"
                  }`}
                >
                  Units [12 to 20]
                </span>

                <span className="txt-light ml-auto leading-10">* Required</span>
              </label>
            </div>
            <div className="lg:text-[2rem] mobile:text-[1rem] text-center mt-5">
              <div className="flex">
                <span className="txt-light text-left ml-5 leading-10">
                  Expected Graduation Date
                </span>

                <span className="txt-light text-right ml-auto leading-10">
                  * Required
                </span>
              </div>
              <label className="flex flex-row relative focus group">
                <select
                  name="coursesDropdown"
                  value={gradDate}
                  onChange={handlegradDate}
                  required
                  className="mt-3 w-1/2 bg-transparent txt-main mx-3 border-2 bord px-5 py-3 leading-9 appearance-none"
                >
                  <option value="" disabled selected>
                    Term
                  </option>
                  <option value="Winter">Winter</option>
                  <option value="Fall">Fall</option>
                </select>
                <input
                  type="number"
                  min="2023"
                  max="2050"
                  name="expGrad"
                  value={field5Value}
                  onChange={handleField5Change}
                  onBlur={handleBlur}
                  required
                  className="mt-3 w-1/2 txt-main bg-transparent mx-3 border-2 bord px-5 py-3 leading-9"
                />
              </label>
            </div>

            <div className="lg:text-[2rem] mobile:text-[1rem] text-center mt-5">
              <label className="flex flex-col-reverse relative focus group">
                <input
                  type="text"
                  name="minors"
                  value={minorValue}
                  onChange={handleminorChange}
                  className="mt-3 txt-main bg-transparent mx-3 border-2 bord px-5 py-3 leading-9"
                />

                <span
                  className={`txt-light px-3 absolute text-xl transform -translate-y-3 left-4 transition ${
                    minorValue !== "" && "translate-y-[-70px]"
                  }`}
                >
                  Minors
                </span>

                <span className="txt-light ml-auto leading-10">Optional</span>
              </label>
            </div>
            <div className="lg:text-[2rem] mobile:text-[1rem] text-center mt-5">
              <label className="txt-light flex flex-col-reverse relative focus group">
                <select
                  name="coursesDropdown"
                  value={toggleSummer}
                  onChange={handleSummerChange}
                  required
                  className="mt-3 bg-transparent txt-main mx-3 border-2 bord px-5 py-3 leading-9 appearance-none"
                >
                  <option value="" disabled selected>
                    Select for Summer
                  </option>
                  <option value="Algorithms">Yes</option>
                  <option value="Bioinformatics">No</option>
                </select>
                <span
                  className={`px-3 absolute text-xl transform -translate-y-3 left-4 transition ${
                    toggleSummer !== "" ? ": translate-y-[-70px]" : "hidden"
                  }`}
                >
                  Summer Sessions?
                </span>
                <span className="txt-light ml-auto leading-10">* Required</span>
              </label>
            </div>
            <div className="lg:text-[2rem] mobile:text-[1rem] text-center mt-5">
              <label className="txt-light flex flex-col-reverse relative focus group">
                <select
                  name="coursesDropdown"
                  value={selectedCourse}
                  onChange={handleDropdownChange}
                  required
                  className="mt-3 bg-transparent txt-main mx-3 border-2 bord px-5 py-3 leading-9 appearance-none"
                >
                  <option value="" disabled selected>
                    Select a course
                  </option>
                  <option value="Algorithms">Algorithms</option>
                  <option value="Architecture and Embedded Systems">
                    Architecture and Embedded Systems
                  </option>
                  <option value="Bioinformatics">Bioinformatics</option>
                  <option value="General CS track">General CS track</option>
                  <option value="Information">Information</option>
                  <option value="Intelligent Systems">
                    Intelligent Systems
                  </option>
                  <option value="Networked Systems">Networked Systems</option>
                  <option value="Systems and Software">
                    Systems and Software
                  </option>
                  <option value="Visual Computing">Visual Computing</option>
                </select>
                <span
                  className={`px-3 absolute text-xl transform -translate-y-3 left-4 transition ${
                    selectedCourse !== "" ? ": translate-y-[-70px]" : "hidden"
                  }`}
                >
                  Specialization
                </span>
                <span className="txt-light ml-auto leading-10">* Required</span>
              </label>
            </div>
            <div className="justify-center items-center">
              <div className="flex flex-wrap">
                {[...Array(20)].map((_, index) => (
                  <div key={index} className="w-1/4 p-4">
                    <span className="txt-light text-left ml-5 leading-10">
                      {generateSemesterTitle(index)}
                    </span>
                    <ul>
                      {[...Array(5)].map((_, i) => (
                        <li key={i} className="mb-2">
                          <input
                            type="text"
                            placeholder={`Input ${i + 1}`}
                            className="w-full txt-light bord bg-transparent px-3 py-2 border border-gray-300 "
                            onChange={(e) => handleInputChange(e, index, i)}
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Output the FormData for testing purposes */}
              <pre>{JSON.stringify(formDatas, "", 2)}</pre>
            </div>
            <button
              disabled={error}
              className="text-black statics back-main px-[80px] py-[15px] rounded-md text-[25px] hover:bg-red-700 active:bg-red-500 transition-all"
            >
              Submit
            </button>

            {error && (
              <p className="text-red-500">Must have a 3 year Gap(for now).</p>
            )}
          </form>
          {responseData && (
            <div className="flex flex-wrap">
              {responseData.map((semester, index) => (
                <div key={index} className="w-1/4 p-4">
                  <span className="txt-light text-left ml-5 leading-10">
                    {generateSemesterTitle(index)}
                  </span>
                  <ul>
                    {semester.map((value, i) => (
                      <li key={i} className="mb-5">
                        <span className="flex h-8 txt-light bord bg-transparent px-5 py-1 my-2 border border-gray-300 ">
                          {value}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CourseManagement;
