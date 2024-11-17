import React from 'react';

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-6 bg-gray-100 p-8 min-h-screen">
      <h1 className="text-3xl font-semibold text-gray-800">Sign Up</h1>

      {/* Sign Up Form Container */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        {/* Sign Up Form */}
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-gray-700">Email Address</label>
            <input
              type="email"
              id="email"
              className="w-full p-3 mt-2 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              className="w-full p-3 mt-2 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white text-lg py-4 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300"
          >
            Sign Up
          </button>
        </form>
      </div>

      {/* Links */}
      <div className="flex space-x-4 text-gray-700">
        <a href="/signin" className="hover:text-blue-500">Already have an account? Sign In</a>
      </div>
    </div>
  );
};

export default SignUp;
