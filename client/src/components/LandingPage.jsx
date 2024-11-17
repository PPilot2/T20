// src/components/LandingPage.jsx
import React, { useState } from 'react';

const LandingPage = () => {
  const testimonials = [
    { text: "Top 20 helped me find the perfect college based on my scores and interests. The personalized recommendations were spot on!", author: "Sarah W., High School Senior" },
    { text: "I loved the essay revision feature! It gave me great tips and helped me improve my application.", author: "Mark L., College Applicant" },
    { text: "The college selector tool was a game-changer! It helped me narrow down my choices and find a college that matched my goals.", author: "Emily R., High School Junior" },
    { text: "The SAT prep resources were amazing, and the personalized feedback made a huge difference in my score.", author: "John K., High School Senior" },
    { text: "Top 20 helped me organize my college applications and get personalized advice every step of the way.", author: "Samantha M., College Applicant" },
    { text: "I found the exact college I was looking for! The College Selector was spot-on with its recommendations.", author: "Luke T., High School Senior" },
    { text: "The course prep resources were exactly what I needed to improve my SAT scores!", author: "Olivia P., High School Junior" },
    { text: "Thanks to the AI-powered essay feedback, I was able to improve my application and get accepted to my dream school.", author: "James A., College Applicant" },
  ];

  const testimonialsPerPage = 4;  // Show 4 testimonials at once
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);
  const [currentPage, setCurrentPage] = useState(0);

  const handleNext = () => {
    // Infinite scroll: Loop back to the first page when reaching the end
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const handlePrev = () => {
    // Infinite scroll: Loop back to the last page when reaching the start
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };

  const currentTestimonials = testimonials.slice(currentPage * testimonialsPerPage, (currentPage + 1) * testimonialsPerPage);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-900 text-white py-12 text-center">
        <h1 className="text-5xl font-bold mb-4">Top 20</h1>
        <p className="text-xl max-w-3xl mx-auto">
          Discover the best colleges, prepare for exams, and get expert advice—all in one place.
        </p>
      </header>

      {/* Sign Up and Sign In Buttons */}
      <section className="py-8 text-center">
        <div className="space-x-4">
            <a href="/signup"><button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Sign Up</button></a>
            <a href="/signin"><button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Sign In</button></a>
        </div>
      </section>

      {/* Testimonials Section with Arrow Pagination and Infinite Scrolling */}
      <section className="py-12 text-center bg-white flex-grow">
        <h2 className="text-3xl font-semibold mb-6">What Our Users Are Saying</h2>
        
        {/* Testimonials Grid */}
        <div className="flex justify-center flex-wrap gap-8 mb-6">
          {currentTestimonials.map((testimonial, index) => (
            <div key={index} className="w-80 p-6 bg-gray-100 rounded-lg shadow-md">
              <p className="italic mb-4">"{testimonial.text}"</p>
              <p className="font-semibold">- {testimonial.author}</p>
            </div>
          ))}
        </div>

        {/* Arrow Pagination */}
        <div className="flex justify-center items-center space-x-4 mb-6">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 disabled:bg-gray-300"
            disabled={currentPage === 0}
          >
            <span className="text-2xl">&#8592;</span> {/* Left Arrow */}
          </button>

          {/* Pagination Container */}
          <div className="flex overflow-x-auto space-x-2 hidden">
            {/* Empty container for pagination purposes */}
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 disabled:bg-gray-300"
            disabled={currentPage === totalPages - 1}
          >
            <span className="text-2xl">&#8594;</span> {/* Right Arrow */}
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-blue-100">
        <h2 className="text-3xl font-semibold text-center mb-6">Core Features</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-xl mb-3">College Selector</h3>
            <p>Get personalized college recommendations based on your scores, GPA, and preferences.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-xl mb-3">Course Prep</h3>
            <p>Access free video resources and personalized exam prep for SAT, PSAT, and ACT.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-xl mb-3">Essay Prep</h3>
            <p>Improve your application with AI-powered essay revision and feedback.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-xl mb-3">Forums</h3>
            <p>Ask questions and get advice from peers, alumni, and experts in the college community.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-xl mb-3">AI Counselor</h3>
            <p>Get career and college advice tailored to your academic profile and goals.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-xl mb-3">Advanced Filters</h3>
            <p>Search for colleges based on specific criteria like location, population, and more.</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-6 text-center mt-auto">
        <p>&copy; 2024 Top 20. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
