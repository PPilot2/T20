import React from "react";
import { useNavigate } from "react-router-dom"; // Assuming React Router is used
import Navbar from "./Navbar";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Dashboard = () => {
  const navigate = useNavigate(); // Navigation hook
  const progressValue = 70; // Example progress value

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Dashboard Content */}
      <div className="flex-grow p-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Welcome Section */}
          <div className="lg:col-span-3 mb-6">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h1 className="text-3xl font-bold text-gray-800">
                Welcome, [User's Name]!
              </h1>
              <p className="mt-2 text-gray-600">
                Here's an overview of your progress and upcoming tasks.
              </p>
            </div>
          </div>

          {/* Progress Wheel Section */}
          <div className="lg:col-span-3 flex justify-center mb-6">
            <div className="flex bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
              {/* Progress Circle */}
              <div className="w-1/2 flex items-center justify-center">
                <CircularProgressbar
                  value={progressValue}
                  text={`${progressValue}%`}
                  styles={buildStyles({
                    textColor: "#2D3748", // Tailwind Gray 800
                    pathColor: "#38A169", // Tailwind Green 600
                    trailColor: "#E2E8F0", // Tailwind Gray 300
                    textSize: "16px",
                  })}
                />
              </div>

              {/* Progress Details */}
              <div className="w-1/2 pl-8 flex flex-col justify-center">
                <h2 className="text-2xl font-semibold text-gray-800">
                  Your Progress
                </h2>
                <p className="mt-4 text-gray-600">
                  You're <strong>70%</strong> through your goals for the month. Keep up the good work and stay on track!
                </p>
                <ul className="mt-4 space-y-2 text-gray-600">
                  <li>📚 Completed: <strong>3 out of 5 tasks</strong></li>
                  <li>🎯 Focus Area: <strong>Essay Writing</strong></li>
                  <li>🔥 Next Target: <strong>Finalize Application for Stanford</strong></li>
                </ul>
                <button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition">
                  View Progress Details
                </button>
              </div>
            </div>
          </div>

          {/* Account Completion Section */}
          <div className="lg:col-span-3 bg-white p-6 rounded-lg shadow-lg flex items-center justify-between">
            <div>
              <h2 className="text-xl font-medium text-gray-800">
                Complete Your Profile
              </h2>
              <p className="mt-2 text-gray-600">
                Add more details to your account to unlock personalized recommendations and track progress more effectively.
              </p>
            </div>
            <button
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-indigo-700 transition"
              onClick={() => navigate("/profile")} // Redirect to Profile page
            >
              Complete Profile
            </button>
          </div>

          {/* Upcoming Deadlines */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-medium text-gray-800">Upcoming Deadlines</h2>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>📅 College Application - <strong>Dec 15</strong></li>
              <li>📅 SAT Exam - <strong>Jan 10</strong></li>
              <li>📅 Essay Submission - <strong>Feb 1</strong></li>
            </ul>
          </div>

          {/* Recommendations */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-medium text-gray-800">Recommendations</h2>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>🔍 Consider applying to: Harvard, MIT, Stanford</li>
              <li>📝 Essay Topic: Start brainstorming your personal story</li>
              <li>🤝 Extracurricular: Volunteer work at a local food bank</li>
            </ul>
          </div>

          {/* Recent Activity */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-medium text-gray-800">Recent Activity</h2>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>📰 New post in the forums: <strong>"SAT Prep Tips"</strong></li>
              <li>📄 Essay draft submitted: <strong>"My Journey to College"</strong></li>
              <li>✅ Application progress updated for: <strong>Stanford</strong></li>
            </ul>
          </div>

          {/* Actionable Links */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <button className="bg-blue-600 text-white p-6 rounded-lg shadow-lg hover:bg-blue-700 transition">
              <h3 className="text-lg font-medium">Apply to Colleges</h3>
              <p className="mt-2">Start your application process</p>
            </button>
            <button className="bg-green-600 text-white p-6 rounded-lg shadow-lg hover:bg-green-700 transition">
              <h3 className="text-lg font-medium">Create an Essay</h3>
              <p className="mt-2">Get started with your personal statement</p>
            </button>
            <button className="bg-purple-600 text-white p-6 rounded-lg shadow-lg hover:bg-purple-700 transition">
              <h3 className="text-lg font-medium">View Forums</h3>
              <p className="mt-2">Join discussions on college prep</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
