import React, { useState, useEffect } from "react";
import AboutImg from "../../assets/7358653-removebg-preview.png";
import { IoArrowForward } from "react-icons/io5";
import { FaCode, FaDatabase, FaServer } from "react-icons/fa";

const About = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("about");
      if (element) {
        const position = element.getBoundingClientRect();
        // If the element is in viewport
        if (position.top < window.innerHeight && position.bottom >= 0) {
          setIsVisible(true);
        }
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const skills = [
    { name: "HTML/CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React", level: 80 },
    { name: "Node.js", level: 75 },
    { name: "SQL", level: 85 },
    { name: "MongoDB", level: 70 },
  ];

  return (
    <div
      id="about"
      className="relative py-20 min-h-screen text-white overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-40 h-40 rounded-full bg-[#ea9f12] opacity-5 floating"></div>
      <div className="absolute bottom-40 left-10 w-60 h-60 rounded-full bg-[#ea9f12] opacity-5 floating" style={{animationDelay: '1.5s'}}></div>
      
      <div className="container mx-auto px-6 md:px-12">
        {/* Section title */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-[#ea9f12]">Me</span>
          </h2>
          <div className="w-24 h-1 bg-[#ea9f12] mx-auto"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          {/* Left Section - Image with animated border */}
          <div 
            className="lg:w-2/5 relative"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <div className="relative">
              {/* Animated border */}
              <div className="absolute inset-0 rounded-xl border-2 border-[#ea9f12] transform rotate-3 opacity-50"></div>
              <div className="absolute inset-0 rounded-xl border-2 border-[#ea9f12] transform -rotate-3 opacity-50"></div>
              
              {/* Image container */}
              <div className="relative z-10 bg-gradient-to-br from-[#171d32] to-[#0f1424] p-4 rounded-xl overflow-hidden card-3d">
                <img
                  className="w-full h-auto rounded-lg transition-transform duration-500 hover:scale-105"
                  src={AboutImg}
                  alt="About me"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1424] to-transparent opacity-40 rounded-lg"></div>
                
                {/* Glowing dots */}
                <div className="absolute top-5 right-5 w-3 h-3 rounded-full bg-[#ea9f12] animate-pulse"></div>
                <div className="absolute bottom-5 left-5 w-3 h-3 rounded-full bg-[#ea9f12] animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
          </div>

          {/* Right Section - Content */}
          <div 
            className="lg:w-3/5 space-y-8"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <h3 className="text-2xl md:text-3xl font-bold gradient-text inline-block">Frontend & Backend Developer</h3>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate full-stack developer with expertise in creating beautiful, functional, and user-friendly applications. 
              My approach combines technical excellence with creative problem-solving to deliver exceptional digital experiences.
            </p>
            
            {/* Skills bars */}
            <div className="space-y-4 mt-8">
              <h4 className="text-xl font-semibold mb-4">My Skills</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-[#ea9f12]">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-[#ea9f12] to-[#f8b02b] rounded-full"
                        style={{ 
                          width: `${isVisible ? skill.level : 0}%`,
                          transition: 'width 1.5s ease-in-out',
                          transitionDelay: `${index * 0.2}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Role Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              {/* Frontend Developer */}
              <div
                className={`glass-effect rounded-xl p-6 transition-all duration-300 transform hover:scale-105 ${
                  activeCard === 'frontend' ? 'neon-border' : ''
                }`}
                onMouseEnter={() => setActiveCard('frontend')}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-[#ea9f12] bg-opacity-20 flex items-center justify-center">
                    <FaCode className="text-3xl text-[#ea9f12]" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-3">Frontend</h3>
                <p className="text-sm text-gray-300 text-center">
                  Creating responsive and interactive user interfaces with modern frameworks.
                </p>
              </div>
              
              {/* Database Developer */}
              <div
                className={`glass-effect rounded-xl p-6 transition-all duration-300 transform hover:scale-105 ${
                  activeCard === 'database' ? 'neon-border' : ''
                }`}
                onMouseEnter={() => setActiveCard('database')}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-[#ea9f12] bg-opacity-20 flex items-center justify-center">
                    <FaDatabase className="text-3xl text-[#ea9f12]" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-3">Database</h3>
                <p className="text-sm text-gray-300 text-center">
                  Designing efficient database structures for optimal data management.
                </p>
              </div>
              
              {/* Backend Developer */}
              <div
                className={`glass-effect rounded-xl p-6 transition-all duration-300 transform hover:scale-105 ${
                  activeCard === 'backend' ? 'neon-border' : ''
                }`}
                onMouseEnter={() => setActiveCard('backend')}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-[#ea9f12] bg-opacity-20 flex items-center justify-center">
                    <FaServer className="text-3xl text-[#ea9f12]" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-3">Backend</h3>
                <p className="text-sm text-gray-300 text-center">
                  Building robust server-side applications and RESTful APIs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;