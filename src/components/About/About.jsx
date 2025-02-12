import React, { useState } from "react";
import AboutImg from "../../assets/7358653-removebg-preview.png";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div
      id="About"
      className="flex flex-col md:flex-row items-center justify-center min-h-screen text-white shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12 space-y-10 md:space-y-0 md:space-x-10"
      style={{ backgroundColor: "#0D1B2A" }} // Dark blue background
    >
      {/* Left Section - Image */}
      <div className="flex justify-center">
        <img
          className="md:h-96 h-64 transition-transform duration-150 hover:scale-105"
          src={AboutImg}
          alt="About img"
        />
      </div>

      {/* Right Section - Content */}
      <div className="flex flex-col space-y-6 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold hover:bg-gray-700 transition duration-150 p-2 rounded cursor-pointer">
          <span>About Me</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
          I am a passionate developer specializing in frontend, backend, and database development.
          Hover over a section below to explore more!
        </p>

        {/* Role Boxes */}
        <div className="space-y-5">
          {/* Frontend Developer */}
          <div
            className="flex items-center gap-4 py-4 border border-gray-400 rounded-lg p-6 cursor-pointer transition-all duration-150 transform hover:bg-blue-500" // Change color on hover
          >
            <IoArrowForward size={30} className="mt-1 transition-transform duration-150 hover:translate-x-2" />
            <div className="w-full">
              <h2 className="text-2xl font-semibold">Frontend Developer</h2>
              <p className="text-md text-gray-200">
                I build visually appealing and highly responsive user interfaces using modern frontend technologies.
              </p>
            </div>
          </div>

          {/* Database Developer */}
          <div
            className="flex items-center gap-4 py-4 border border-gray-400 rounded-lg p-6 cursor-pointer transition-all duration-150 transform hover:bg-red-500" // Change color on hover
          >
            <IoArrowForward size={30} className="mt-1 transition-transform duration-150 hover:translate-x-2" />
            <div className="w-full">
              <h2 className="text-2xl font-semibold">Database Developer</h2>
              <p className="text-md text-gray-200">
                I design and manage efficient, scalable databases for high-performance applications.
              </p>
            </div>
          </div>

          {/* Backend Developer */}
          <div
            className="flex items-center gap-4 py-4 border border-gray-400 rounded-lg p-6 cursor-pointer transition-all duration-150 transform hover:bg-green-500" // Change color on hover
          >
            <IoArrowForward size={30} className="mt-1 transition-transform duration-150 hover:translate-x-2" />
            <div className="w-full">
              <h2 className="text-2xl font-semibold">Backend Developer</h2>
              <p className="text-md text-gray-200">
                I develop robust backend solutions, ensuring seamless API integration and server-side functionality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;