import React, { useState } from "react";
import Navbar from "./Navbar"; // Assuming Navbar is imported
import Footer from "./Footer"; // Assuming Footer is imported
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Import Font Awesome Icons

const GamePlan = () => {
  const [years, setYears] = useState({
    freshman: { courses: Array(6).fill({ name: "", weight: "5.0", grade: "" }), volunteerHours: 0, isOpen: true },
    sophomore: { courses: Array(6).fill({ name: "", weight: "5.0", grade: "" }), volunteerHours: 0, isOpen: true },
    junior: { courses: Array(6).fill({ name: "", weight: "5.0", grade: "" }), volunteerHours: 0, isOpen: true },
    senior: { courses: Array(6).fill({ name: "", weight: "5.0", grade: "" }), volunteerHours: 0, isOpen: true },
  });

  const handleCourseChange = (year, index, field, value) => {
    const updatedYears = { ...years };
    updatedYears[year].courses[index][field] = value;
    setYears(updatedYears);
  };

  const handleVolunteerChange = (year, value) => {
    const updatedYears = { ...years };
    updatedYears[year].volunteerHours = value;
    setYears(updatedYears);
  };

  const addCourse = (year) => {
    const updatedYears = { ...years };
    if (updatedYears[year].courses.length < 10) {
      updatedYears[year].courses.push({ name: "", weight: "5.0", grade: "" });
    }
    setYears(updatedYears);
  };

  const removeCourse = (year, index) => {
    const updatedYears = { ...years };
    if (updatedYears[year].courses.length > 4) {
      updatedYears[year].courses.splice(index, 1);
      setYears(updatedYears);
    }
  };

  const toggleYearCollapse = (year) => {
    const updatedYears = { ...years };
    updatedYears[year].isOpen = !updatedYears[year].isOpen;
    setYears(updatedYears);
  };

  const calculateGPA = () => {
    return "4.0"; // Placeholder for GPA calculation
  };

  const calculateTotalVolunteerHours = () => {
    return Object.values(years).reduce((total, year) => total + year.volunteerHours, 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-600 to-blue-600 flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Game Plan Content */}
      <div className="px-4 py-8 md:px-8 flex-grow">
        <div className="max-w-7xl mx-auto">
          {/* Title and Description */}
          <div className="bg-white p-6 rounded-xl shadow-lg mb-6">
            <h1 className="text-3xl font-semibold text-blue-900">Academic Game Plan</h1>
            <p className="text-lg text-gray-700 mt-2">Track your courses, weightage, grades, and volunteer hours across all four years of your academic journey.</p>
          </div>

          {/* Function to render each year */}
          {["freshman", "sophomore", "junior", "senior"].map((year) => (
            <div key={year} className="bg-white p-6 rounded-xl shadow-lg mb-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-blue-900 capitalize">{year} Year</h2>
                <button
                  onClick={() => toggleYearCollapse(year)}
                  className={`flex items-center space-x-2 ${years[year].isOpen ? "text-indigo-600" : "text-blue-600"} hover:text-blue-800 transition duration-300`}
                >
                  <span>{years[year].isOpen ? <FaChevronUp /> : <FaChevronDown />}</span>
                  <span>{years[year].isOpen ? "Collapse" : "Expand"}</span>
                </button>
              </div>
              {years[year].isOpen && (
                <>
                  {years[year].courses.map((course, index) => (
                    <div key={index} className="flex items-center space-x-4 mt-4">
                      <input
                        type="text"
                        value={course.name}
                        onChange={(e) => handleCourseChange(year, index, "name", e.target.value)}
                        placeholder={`Course ${index + 1}`}
                        className="p-2 border rounded-lg w-full"
                      />
                      <input
                        type="number"
                        value={course.weight}
                        onChange={(e) => handleCourseChange(year, index, "weight", e.target.value)}
                        placeholder="Weight"
                        className="p-2 border rounded-lg w-32 text-xl"
                      />
                      <input
                        type="text"
                        value={course.grade}
                        onChange={(e) => handleCourseChange(year, index, "grade", e.target.value)}
                        placeholder="Grade"
                        className="p-2 border rounded-lg w-32"
                      />
                      <button
                        onClick={() => removeCourse(year, index)}
                        className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition duration-300"
                        disabled={years[year].courses.length <= 4}
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                  {years[year].courses.length < 10 && (
                    <button
                      onClick={() => addCourse(year)}
                      className="bg-indigo-500 text-white px-6 py-2 mt-4 rounded-lg hover:bg-indigo-600 transition duration-300"
                    >
                      Add Course
                    </button>
                  )}
                  <div className="mt-6">
                    <label className="block font-semibold text-blue-900">Volunteer Hours</label>
                    <input
                      type="number"
                      value={years[year].volunteerHours}
                      onChange={(e) => handleVolunteerChange(year, Number(e.target.value))}
                      className="p-2 border rounded-lg w-full mt-2"
                      placeholder="Enter volunteer hours"
                    />
                  </div>
                </>
              )}
            </div>
          ))}

          {/* GPA and Total Volunteer Hours */}
          <div className="bg-white p-6 rounded-xl shadow-lg mb-6">
            <div className="text-xl font-semibold text-blue-900">
              GPA: {calculateGPA()}
            </div>
            <div className="text-lg font-semibold text-blue-900">
              Total Volunteer Hours: {calculateTotalVolunteerHours()}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default GamePlan;
