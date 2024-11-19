import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const progressValue = 70;
  const profileCompleted = true;

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-600 to-blue-600 flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Dashboard Content */}
      <div className="px-4 py-8 md:px-8 flex-grow">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Welcome Section */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-3 bg-white p-6 rounded-xl shadow-lg">
            <h1 className="text-3xl font-semibold text-blue-900">Welcome, [User's Name]!</h1>
            <p className="mt-2 text-gray-700">Here’s your dashboard, where you can track progress and manage tasks.</p>
          </div>

          {/* Progress Wheel Section */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1 bg-white p-6 rounded-xl shadow-lg flex items-center justify-center">
            <CircularProgressbar
              value={progressValue}
              text={`${progressValue}%`}
              styles={buildStyles({
                textColor: "#333",
                pathColor: "#3B82F6",
                trailColor: "#D1D5DB",
                textSize: "20px",
              })}
              className="w-36 h-36"
            />
          </div>

          {/* Progress Details */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2 bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold text-blue-900">Your Progress</h2>
            <p className="mt-4 text-gray-700">
              You’re <strong>{progressValue}%</strong> through your goals for the month. Keep it up!
            </p>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>📚 Completed: <strong>3 out of 5 tasks</strong></li>
              <li>🎯 Focus Area: <strong>Essay Writing</strong></li>
              <li>🔥 Next Target: <strong>Finalize Application for Stanford</strong></li>
            </ul>
            <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition">
              View Progress Details
            </button>
          </div>

          {/* Account Completion Section */}
          {!profileCompleted && (
            <div className="col-span-1 sm:col-span-2 lg:col-span-3 bg-white p-6 rounded-xl shadow-lg flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold text-blue-900">Complete Your Profile</h2>
                <p className="mt-2 text-gray-700">
                  Add more details to unlock personalized recommendations.
                </p>
              </div>
              <button
                className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition"
                onClick={() => navigate("/profile")}
              >
                Complete Profile
              </button>
            </div>
          )}

          {/* Upcoming Deadlines Section */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1 bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold text-blue-900">Upcoming Deadlines</h2>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>📅 College Application - <strong>Dec 15</strong></li>
              <li>📅 SAT Exam - <strong>Jan 10</strong></li>
              <li>📅 Essay Submission - <strong>Feb 1</strong></li>
            </ul>
          </div>

          {/* Recommendations Section */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1 bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold text-blue-900">Recommendations</h2>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>🔍 Consider applying to: Harvard, MIT, Stanford</li>
              <li>📝 Essay Topic: Start brainstorming your personal story</li>
              <li>🤝 Extracurricular: Volunteer work at a local food bank</li>
            </ul>
          </div>

          {/* Recent Activity Section */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1 bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold text-blue-900">Recent Activity</h2>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>📰 New post in the forums: <strong>"SAT Prep Tips"</strong></li>
              <li>📄 Essay draft submitted: <strong>"My Journey to College"</strong></li>
              <li>✅ Application progress updated for: <strong>Stanford</strong></li>
            </ul>
          </div>

          {/* Actionable Links */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <button className="bg-blue-600 text-white p-6 rounded-xl shadow-lg hover:bg-blue-700 transition">
              <h3 className="text-lg font-medium">Apply to Colleges</h3>
              <p className="mt-2">Start your application process</p>
            </button>
            <button className="bg-blue-600 text-white p-6 rounded-xl shadow-lg hover:bg-blue-700 transition">
              <h3 className="text-lg font-medium">Create an Essay</h3>
              <p className="mt-2">Get started with your personal statement</p>
            </button>
            <button className="bg-blue-600 text-white p-6 rounded-xl shadow-lg hover:bg-blue-700 transition">
              <h3 className="text-lg font-medium">View Forums</h3>
              <p className="mt-2">Join discussions on college prep</p>
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default Dashboard;
