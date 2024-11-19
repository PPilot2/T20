import React, { useState } from "react";
import Navbar from "./Navbar";
import MajorSelector from "./MajorSelector";
import Footer from "./Footer";

const Profile = () => {
  const [profilePicture, setProfilePicture] = useState(null);
  const [formData, setFormData] = useState({
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    location: "",
    graduationYear: "",
    major: "Undecided",
    courses: [{ course: "", grade: "" }],
    scores: { psat: "", sat: "", act: "" },
    extracurriculars: "",
    savedColleges: [],
  });

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfilePicture(URL.createObjectURL(file));
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCourseChange = (index, event) => {
    const { name, value } = event.target;
    const updatedCourses = [...formData.courses];
    updatedCourses[index][name] = value;
    setFormData({ ...formData, courses: updatedCourses });
  };

  const addCourse = () => {
    const lastCourse = formData.courses[formData.courses.length - 1];
    if (lastCourse.course && lastCourse.grade) {
      setFormData({
        ...formData,
        courses: [...formData.courses, { course: "", grade: "" }],
      });
    } else {
      alert("Please fill in the previous course before adding a new one.");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Profile data submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-600 to-blue-600 font-sans">
      <Navbar />
      <div className="max-w-3xl mx-auto bg-white p-10 rounded-3xl shadow-xl mt-12 mb-12">
        <h1 className="text-4xl font-semibold text-gray-800 mb-8 text-center">Profile</h1>
        <form onSubmit={handleSubmit}>
          {/* Profile Picture */}
          <div className="mb-8">
            <label className="block text-gray-700 text-lg font-medium mb-2">Profile Picture</label>
            <div className="flex items-center space-x-6">
              <img
                src={profilePicture || "default-user-icon.png"}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover shadow-md"
              />
              <input
                type="file"
                accept="image/*"
                className="text-sm text-gray-700 file:border-0 file:py-2 file:px-4 file:rounded-xl file:bg-gray-200 file:text-gray-700 hover:file:bg-gray-300"
                onChange={handleImageChange}
              />
            </div>
          </div>

          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <label className="block text-gray-700 text-lg font-medium mb-2">Username *</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 text-lg font-medium mb-2">Firstname *</label>
              <input
                type="text"
                name="firstname"
                value={formData.firstname}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 text-lg font-medium mb-2">Lastname *</label>
              <input
                type="text"
                name="lastname"
                value={formData.lastname}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 text-lg font-medium mb-2">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 text-lg font-medium mb-2">Location *</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 text-lg font-medium mb-2">Graduation Year *</label>
              <input
                type="text"
                name="graduationYear"
                value={formData.graduationYear}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
          </div>

          {/* Major */}
          <MajorSelector />

          {/* Courses and Grades */}
          <div className="mb-8">
            <label className="block text-gray-700 text-lg font-medium mb-2">Courses/Transcript</label>
            {formData.courses.map((course, index) => (
              <div key={index} className="flex space-x-4 mb-4">
                <input
                  type="text"
                  name="course"
                  placeholder="Course Name"
                  value={course.course}
                  onChange={(e) => handleCourseChange(index, e)}
                  className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <input
                  type="text"
                  name="grade"
                  placeholder="Grade"
                  value={course.grade}
                  onChange={(e) => handleCourseChange(index, e)}
                  className="w-1/4 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
            ))}
            <button
              type="button"
              onClick={addCourse}
              className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
            >
              Add Course
            </button>
          </div>

          {/* Scores */}
          <div className="mb-8">
            <label className="block text-gray-700 text-lg font-medium mb-2">Test Scores</label>
            <div className="grid grid-cols-3 gap-8">
              <input
                type="text"
                name="psat"
                placeholder="PSAT Score"
                value={formData.scores.psat}
                onChange={(e) =>
                  setFormData({ ...formData, scores: { ...formData.scores, psat: e.target.value } })
                }
                className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <input
                type="text"
                name="sat"
                placeholder="SAT Score"
                value={formData.scores.sat}
                onChange={(e) =>
                  setFormData({ ...formData, scores: { ...formData.scores, sat: e.target.value } })
                }
                className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <input
                type="text"
                name="act"
                placeholder="ACT Score"
                value={formData.scores.act}
                onChange={(e) =>
                  setFormData({ ...formData, scores: { ...formData.scores, act: e.target.value } })
                }
                className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
          </div>

          {/* Extracurricular Activities */}
          <div className="mb-8">
            <label className="block text-gray-700 text-lg font-medium mb-2">Extracurricular Activities</label>
            <textarea
              name="extracurriculars"
              value={formData.extracurriculars}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              rows="4"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition"
            >
              Save Profile
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
