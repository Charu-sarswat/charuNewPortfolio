import React, { useState, useRef } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ProjectCard = ({ title, description, demoLink, sourceCodeLink, technologies, image, id }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  // Array of gradient combinations
  const gradients = [
    "from-[#2A2FD5] to-[#8217F5]",  // Blue to Purple
    "from-[#F56217] to-[#F5D417]",   // Orange to Yellow
    "from-[#17F549] to-[#17F5E6]",   // Green to Cyan
    "from-[#F51717] to-[#F517D8]",   // Red to Pink
    "from-[#6617F5] to-[#CB17F5]",   // Purple to Magenta
    "from-[#17F5B1] to-[#17D4F5]"    // Turquoise to Light Blue
  ];

  // Get gradient based on project id
  const getGradient = () => {
    return gradients[id % gradients.length];
  };

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative group h-[500px] w-full perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={cardRef}
    >
      <div className="relative w-full h-full transform-style-preserve-3d transition-transform duration-700">
        <div className={`absolute w-full h-full rounded-2xl overflow-hidden 
          backdrop-blur-sm border border-[#ea9f12]/10
          bg-[#112240]/30 shadow-lg shadow-[#0a192f]/80
          hover:shadow-xl hover:shadow-[#ea9f12]/10 transition-all duration-300`}>
          
          {/* Project Header */}
          <div className="relative h-[55%] overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-b ${getGradient()} opacity-30`}></div>
            
            {/* Project Pattern Background */}
            <div className="absolute inset-0 opacity-20">
              <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0iIzI0MjQyNCIvPgo8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIiBmaWxsPSIjZWE5ZjEyIi8+Cjwvc3ZnPg==')]"></div>
            </div>

            {/* Floating Tech Pills */}
            <div className="absolute top-4 right-4 z-20 flex flex-wrap justify-end gap-2 max-w-[70%]">
              {technologies?.slice(0, 3).map((tech, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="px-3 py-1 text-xs font-medium text-white bg-[#ea9f12]/80 backdrop-blur-md rounded-full
                  shadow-lg shadow-[#ea9f12]/20 hover:shadow-[#ea9f12]/40 transition-all duration-300
                  hover:scale-110 cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Content Section */}
          <div className="relative px-6 py-6 h-[45%] flex flex-col bg-[#112240]/50 backdrop-blur-md">
            <motion.h3
              className="text-2xl font-bold text-white mb-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              {title}
              <div className="h-1 w-12 bg-gradient-to-r from-[#ea9f12] to-[#f8b02b] mt-2 rounded-full"></div>
            </motion.h3>

            <p className="text-gray-300 text-sm mb-4 line-clamp-2 relative">
              {description}
              <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-[#0a192f] to-transparent"></div>
            </p>

            {/* Action Buttons */}
            <div className="mt-auto flex items-center justify-between gap-4">
              <motion.a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-1 px-4 py-2 bg-gradient-to-r ${getGradient()} text-white rounded-lg
                flex items-center justify-center gap-2 group hover:shadow-lg transition-all duration-300`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Live Demo</span>
                <FaExternalLinkAlt className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
              </motion.a>

              <motion.a
                href={sourceCodeLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10
                hover:bg-gradient-to-r ${getGradient()} hover:text-white transition-all duration-300 hover:scale-110`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <FaGithub size={20} />
              </motion.a>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute top-4 left-4 w-32 h-32 rounded-full bg-[#ea9f12]/10 blur-3xl"></div>
            <div className="absolute bottom-4 right-4 w-32 h-32 rounded-full bg-[#ea9f12]/10 blur-3xl"></div>
          </div>
        </div>

        {/* Hover Glow Effect */}
        <div className={`absolute inset-0 bg-gradient-to-r ${getGradient()}
        opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-700 -z-10 rounded-2xl`}></div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
