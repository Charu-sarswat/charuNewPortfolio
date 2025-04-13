import React, { useEffect } from "react";
import avatarImg from "../../assets/7358602-removebg-preview.png";
import TextChange from "../TextChange";
import backgroundImg from "../../assets/image.png";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Home = () => {
  // Add scroll reveal effect
  useEffect(() => {
    // Add scroll reveal effect if AOS is installed
    try {
      const AOS = require('aos');
      require('aos/dist/aos.css');
      AOS.refresh();
    } catch (error) {
      console.log("AOS not installed yet");
    }
  }, []);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Charu Resume (2).pdf';  // Updated filename
    link.download = 'Charu Resume (2).pdf';  // Updated filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      id="home"
      className="relative bg-cover bg-center text-white flex flex-col md:flex-row w-full justify-between items-center p-6 md:p-20 min-h-screen overflow-hidden"
      style={{ 
        backgroundImage: `linear-gradient(rgba(15, 20, 36, 0.9), rgba(23, 29, 50, 0.8)), url(${backgroundImg})`,
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[#ea9f12] opacity-10 floating"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-[#ea9f12] opacity-5 floating" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-[#ea9f12] opacity-10 floating" style={{animationDelay: '1s'}}></div>
      
      {/* Left Content */}
      <div 
        className="md:w-2/4 md:pt-10 space-y-6 z-10 mb-10 md:mb-0"
        data-aos="fade-right" 
        data-aos-duration="1000"
      >
        <div className="mb-6">
          <TextChange />
        </div>
        
        <p className="text-sm md:text-xl tracking-tight text-white glass-effect p-4 rounded-lg">
          I am a passionate developer specializing in frontend, backend, and database development.
          Creating beautiful, functional, and user-friendly digital experiences.
        </p>
        
        <div className="flex gap-4 mt-6">
          <button
            className="glow-effect text-white py-3 px-6 text-sm md:text-lg font-semibold rounded-full hover:opacity-85 duration-300 hover:scale-105 flex items-center gap-2"
            style={{ backgroundColor: '#ea9f12' }}
          >
            <FaEnvelope className="text-lg" />
            Contact Me
          </button>
          
          <button
            onClick={handleDownloadCV}
            className="py-3 px-6 text-sm md:text-lg font-semibold rounded-full border-2 border-[#ea9f12] text-white hover:bg-[#ea9f12] transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
              />
            </svg>
            Download CV
          </button>
        </div>
        
        {/* Social icons */}
        <div className="flex gap-4 mt-6">
          <a href="#" className="text-white hover:text-[#ea9f12] transition-colors duration-300 text-2xl">
            <FaGithub />
          </a>
          <a href="#" className="text-white hover:text-[#ea9f12] transition-colors duration-300 text-2xl">
            <FaLinkedin />
          </a>
          <a href="#" className="text-white hover:text-[#ea9f12] transition-colors duration-300 text-2xl">
            <FaTwitter />
          </a>
        </div>
      </div>

      {/* Right Image Section */}
      <div 
        className="relative"
        data-aos="fade-left" 
        data-aos-duration="1000"
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#ea9f12] to-[#f8b02b] blur-xl opacity-20 animate-pulse"></div>
        <img 
          className="w-64 md:w-80 lg:w-96 transition-transform duration-300 hover:scale-105 relative z-10 floating" 
          src={avatarImg} 
          alt="Avatar" 
        />
        <div className="absolute -bottom-5 -left-5 -right-5 h-10 bg-black opacity-20 blur-lg rounded-full z-0"></div>
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <p className="text-white text-sm mb-2">Scroll Down</p>
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;