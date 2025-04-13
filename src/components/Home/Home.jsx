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

  const handleScrollDown = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      id="home"
      className="relative bg-cover bg-center text-white min-h-screen overflow-hidden
                 flex flex-col md:flex-row items-center justify-center
                 px-4 sm:px-6 md:px-12 lg:px-20 py-20 md:py-0
                 gap-8 md:gap-12"
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
        className="w-full md:w-2/4 flex flex-col items-center md:items-start 
                   space-y-6 z-10 text-center md:text-left"
        data-aos="fade-right" 
        data-aos-duration="1000"
      >
        <div className="w-full mb-6">
          <TextChange />
        </div>
        
        <p className="text-base sm:text-lg md:text-xl tracking-tight text-white/90 
                      glass-effect p-4 rounded-lg max-w-2xl mx-auto md:mx-0">
          I am a passionate developer specializing in frontend, backend, and database development.
          Creating beautiful, functional, and user-friendly digital experiences.
        </p>
        
        <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6 w-full">
          <button
            className="glow-effect text-white py-2.5 px-5 sm:py-3 sm:px-6 
                     text-sm md:text-base font-semibold rounded-full 
                     hover:opacity-85 duration-300 hover:scale-105 
                     flex items-center gap-2 min-w-[160px] justify-center"
            style={{ backgroundColor: '#ea9f12' }}
          >
            <FaEnvelope className="text-lg" />
            Contact Me
          </button>
          
          <button
            onClick={handleDownloadCV}
            className="py-2.5 px-5 sm:py-3 sm:px-6 text-sm md:text-base 
                     font-semibold rounded-full border-2 border-[#ea9f12] 
                     text-white hover:bg-[#ea9f12] transition-all duration-300 
                     hover:scale-105 flex items-center gap-2 min-w-[160px] justify-center"
          >
            <svg 
              className="w-4 h-4 sm:w-5 sm:h-5" 
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
        <div className="flex gap-6 mt-6">
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
        className="relative w-[280px] sm:w-[320px] md:w-[380px] lg:w-[420px]
                   mt-8 md:mt-0"
        data-aos="fade-left" 
        data-aos-duration="1000"
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#ea9f12] to-[#f8b02b] blur-xl opacity-20 animate-pulse"></div>
        <img 
          className="relative z-10 w-full h-auto transition-transform duration-300 hover:scale-105 floating" 
          src={avatarImg} 
          alt="Avatar" 
        />
        <div className="absolute -bottom-5 -left-5 -right-5 h-10 bg-black opacity-20 blur-lg rounded-full z-0"></div>
      </div>
      
      {/* Modified Scroll down indicator - Visible on all screens */}
      <button 
        onClick={handleScrollDown}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center
                   cursor-pointer transition-all duration-300 hover:scale-110 group"
      >
        <p className="text-white/70 group-hover:text-white text-sm mb-2">
          Scroll Down
        </p>
        <div className="w-6 h-10 border-2 border-[#ea9f12] rounded-full flex justify-center relative overflow-hidden">
          <div className="w-1.5 h-1.5 bg-[#ea9f12] rounded-full animate-scrollDot"></div>
        </div>
      </button>
    </div>
  );
};

export default Home;