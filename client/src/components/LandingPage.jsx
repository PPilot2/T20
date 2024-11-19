import {
  FaUserGraduate,
  FaCheckCircle,
  FaStar,
  FaLightbulb,
  FaAward,
} from "react-icons/fa";
import Slider from "react-slick"; // Import react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./Footer";
import React, { useState, useEffect } from 'react';

const LandingPage = () => {
  const features = [
    {
      icon: <FaUserGraduate />,
      title: "College Selector",
      description: "An intuitive swipe interface that personalizes college choices based on your academic and personal data. Swipe to discover the perfect fit, and let us categorize your options as target, safety, or reach schools based on your profile.",
      details: "Explore colleges by location, tuition, known specialties, and acceptance rate. Personalized recommendations adjust based on your strengths, goals, and preferences."
    },
    {
      icon: <FaCheckCircle />,
      title: "Course Prep",
      description: "An input-driven study plan that personalizes your learning path based on your current courses. Free video tutorials and practice materials, curated for your needs.",
      details: "Upload your courses or transcript, and receive tailored prep materials to guide your learning. Interactive video tutorials and embedded study resources with author credits provide a well-rounded approach."
    },
    {
      icon: <FaStar />,
      title: "Exam Prep",
      description: "Tailored SAT, ACT, and PSAT prep courses based on your current performance and target score.",
      details: "Access a range of study resources, including free practice tests, targeted practice questions, and study guides, personalized to address your strengths and weaknesses."
    },
    {
      icon: <FaLightbulb />,
      title: "Essay Prep",
      description: "A fully integrated AI tool that automatically revises your essays with feedback on grammar, tone, structure, and content.",
      details: "Improve your essay with real-time feedback. Our AI suggests ways to improve clarity, coherence, and persuasiveness, offering a scoring system that breaks down each component."
    },
    {
      icon: <FaAward />,
      title: "AI Counselor",
      description: "Ask questions about anything related to college, courses, or career paths, and get tailored recommendations from an AI counselor.",
      details: "Our AI counselor helps you identify beneficial extracurriculars, relevant scholarships, career paths based on your interests, and advice on how to make your application stand out."
    },
    // New Card
    {
      icon: <FaLightbulb />,
      title: "Career Insights",
      description: "Detailed guidance on potential career paths, industries, and opportunities aligned with your interests and strengths.",
      details: "Analyze industry trends, skill requirements, and educational paths. Discover your dream career and plan the steps to achieve it with confidence."
    }
  ];
  
  const testimonials = [
    {
      name: "Alex Johnson",
      feedback:
        "Top 20 made college applications stress-free. Their personalized college selector was a game-changer!",
      role: "Student, Class of 2025",
    },
    {
      name: "Maria Lopez",
      feedback:
        "The SAT prep resources helped me boost my score by 150 points. Highly recommended!",
      role: "High School Senior",
    },
    {
      name: "John Smith",
      feedback:
        "The AI Counselor gave me invaluable advice on scholarships and extracurriculars.",
      role: "First-Generation College Applicant",
    },
    {
      name: "Emily Carter",
      feedback:
        "Thanks to the essay prep tool, my personal statement received great feedback from admissions!",
      role: "Accepted at Harvard",
    },
    {
      name: "Ryan Chen",
      feedback:
        "This platform’s interactive visualizations helped me track my applications and stay organized.",
      role: "Freshman, UC Berkeley",
    },
  ];

  const testimonialSettings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Constant scroll
    speed: 5000, // Adjust speed to control scroll pace
    cssEase: "linear",
    centerMode: true,
    variableWidth: true, // Adjust slide width dynamically
    pauseOnHover: false, // Enable pause on hover
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // For screens <= 1024px
        settings: {
          slidesToShow: 2, // Show 2 slides

        },
      },
      {
        breakpoint: 768, // For screens <= 768px
        settings: {
          slidesToShow: 1, // Show 1 slide
          autoplay: true,
        },
      },
    ],
  };
  


  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-indigo-700 text-white h-96 flex flex-col justify-center items-center">
        <h1 className="text-[160px] font-semibold mt-20 mb-5">Top 20</h1>
        <div className="flex space-x-4 ">
          <a href="/signup">
            <button className="bg-white px-6 py-2 rounded-xl text-indigo-600 hover:bg-indigo-500 hover:text-white">
              Sign Up
            </button>
          </a>
          <a href="/signin">
            <button className="bg-indigo-700 px-6 py-2 rounded-xl hover:bg-white hover:text-indigo-600">
              Sign In
            </button>
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-100 text-white">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-semibold mb-4 text-indigo-600">
            Uncover Your College Journey
          </h2>
          <p className="text-xl text-indigo-600">
            Tools and features that guide you every step of the way—from college
            selection to prep and application insights.
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 px-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative bg-white p-12 rounded-3xl shadow-xl transition-all transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="absolute left-4 top-4 text-3xl text-indigo-600">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold text-indigo-600 mt-12 mb-4">
                {feature.title}
              </h3>
              <p className="text-lg text-gray-800">{feature.description}</p>
              <div className="mt-4 text-sm text-gray-600">
                {feature.details}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Data Visualization Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-indigo-700">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-semibold mb-4 text-white">
            Data at Your Fingertips
          </h2>
          <p className="text-lg text-white">
            Interactive visualizations to help you track your progress, test
            scores, and college applications.
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 px-8">
          <div className="bg-white p-12 rounded-3xl shadow-xl transition-all hover:scale-105 hover:shadow-2xl">
            <h3 className="text-2xl font-semibold text-indigo-600 mb-4">
              Application Progress
            </h3>
            <p className="text-lg text-gray-800">
              Visualize your application progress with an interactive timeline.
              See what steps remain and which milestones you've achieved.
            </p>
          </div>
          <div className="bg-white p-12 rounded-3xl shadow-xl transition-all hover:scale-105 hover:shadow-2xl">
            <h3 className="text-2xl font-semibold text-indigo-600 mb-4">
              Score Improvement
            </h3>
            <p className="text-lg text-gray-800">
              Track your SAT/ACT score improvements over time with a dynamic
              graph that adapts to your study progress and practice results.
            </p>
          </div>
          <div className="bg-white p-12 rounded-3xl shadow-xl transition-all hover:scale-105 hover:shadow-2xl">
            <h3 className="text-2xl font-semibold text-indigo-600 mb-4">
              College Compatibility
            </h3>
            <p className="text-lg text-gray-800">
              See a personalized graph representing your chances of getting into
              various colleges based on your profile, preferences, and progress.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-100 text-white">
        <div className="w-screen overflow-hidden">
          <Slider {...testimonialSettings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card p-4">
                <div className="bg-white text-gray-800 rounded-xl shadow-lg p-6 text-center w-[300px] mx-2">
                  <p className="italic text-gray-600">"{testimonial.feedback}"</p>
                  <h4 className="font-bold mt-4 text-indigo-600">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Forum & Gamification Section */}
      <section className="py-20 bg-indigo-600 text-white">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-semibold mb-4">Engage & Level Up</h2>
          <p className="text-xl">
            Join discussions, ask questions, and earn points or badges for your
            activity. The more you engage, the more rewards you earn.
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 px-8">
          <div className="bg-white p-12 rounded-3xl shadow-xl transition-all hover:scale-105 hover:shadow-2xl">
            <h3 className="text-2xl font-semibold text-indigo-600 mb-4">
              College Experiences
            </h3>
            <p className="text-lg text-gray-800">
              Read real stories from students and alumni. Get a glimpse of
              college life and learn from others' experiences.
            </p>
          </div>
          <div className="bg-white p-12 rounded-3xl shadow-xl transition-all hover:scale-105 hover:shadow-2xl">
            <h3 className="text-2xl font-semibold text-indigo-600 mb-4">
              Extracurriculars & Scholarships
            </h3>
            <p className="text-lg text-gray-800">
              Discover opportunities to enhance your profile. Earn points for
              participating in extracurriculars and engaging with scholarship
              resources.
            </p>
          </div>
          <div className="bg-white p-12 rounded-3xl shadow-xl transition-all hover:scale-105 hover:shadow-2xl">
            <h3 className="text-2xl font-semibold text-indigo-600 mb-4">
              Test Prep Challenges
            </h3>
            <p className="text-lg text-gray-800">
              Compete in test prep challenges. Complete modules, track your
              scores, and earn badges for your improvement.
            </p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default LandingPage;
