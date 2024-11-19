import React from 'react';

const SignUp = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-700 via-indigo-600 to-blue-600 flex flex-col items-center justify-center text-white p-8">
      {/* Hero Section */}
      <h1 className="text-4xl font-semibold mb-8">Create an account</h1>

      {/* Sign Up Form Container */}
      <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-md">
        {/* Sign Up Form */}
        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-gray-800">Email Address</label>
            <input
              type="email"
              id="email"
              className="w-full p-4 mt-2 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 text-gray-800"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-lg font-medium text-gray-800">Password</label>
            <input
              type="password"
              id="password"
              className="w-full p-4 mt-2 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 text-gray-800"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white text-lg py-4 rounded-lg shadow-md hover:bg-indigo-700 transition-all duration-300"
          >
            Sign Up
          </button>
        </form>
      </div>

      {/* Links */}
      <div className="flex space-x-4 text-gray-200 mt-6">
        <a href="/signin" className="hover:text-blue-300">Already have an account? Sign In</a>
      </div>
    </div>
  );
};

export default SignUp;
