import React from "react";
import avatarImg from "../../assets/7358602-removebg-preview.png";
import TextChange from "../TextChange";
import backgroundImg from "../../assets/image.png"; // If assets is in src // Import your background image

const Home = () => {
  return (
    <div
      className="bg-cover bg-center text-white flex w-full justify-between items-start p-10 md:p-20 min-h-screen"
      style={{ backgroundImage: `url(${backgroundImg})` }} // Set the background image
    >
      {/* Left Content */}
      <div className="md:w-2/4 md:pt-10 space-y-4">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight text-white">
        I am a passionate developer specializing in frontend, backend, and database development.
        Hover over a section below to explore more!
        </p>
        <button
  className="mt-5 md:mt-10 text-white py-2 px-4 text-sm md:text-lg font-semibold rounded-3xl hover:opacity-85 duration-300 hover:scale-105"
  style={{ backgroundColor: '#ea9f12' }} // Correctly set the background color here
>
  Contact Me
</button>
      </div>

      {/* Right Image Section */}
      <div>
        <img className="w-64 md:w-80 lg:w-96 transition-transform duration-300 hover:scale-105" src={avatarImg} alt="Avatar" />
      </div>
    </div>
  );
};

export default Home;