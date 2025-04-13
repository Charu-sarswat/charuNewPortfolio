import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight, FaFilter } from "react-icons/fa";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [showFilters, setShowFilters] = useState(false);
  const projectsPerPage = 3;

  // Project data with categories
  const projects = [
    {
      id: 1,
      title: "Hobby-Matcher",
      description: "Developed a Project which can connect Random as well as known users to chat and video call with each other. Random users connect on the basis of matching of their hobbies using Vector Algorithm with MongoDB Database.",
      demoLink: "https://hobby-matcher-frontend-wapg.onrender.com",
      sourceCodeLink: "https://github.com/Charu-sarswat/Hobby-matcher",
      category: "fullstack",
      image: "photo-C8q0KQHG.webp",
      technologies: ["MongoDB", "Express", "Node.js", "React", "WebRTC"]
    },
    {
      id: 2,
      title: "GitHub Analyzer",
      description: "A web application that analyzes GitHub profiles and repositories, providing detailed insights and statistics.",
      demoLink: "https://gitb-analyze.netlify.app",
      sourceCodeLink: "https://github.com/Charu-sarswat/Analyzer",
      category: "web",
      image: "photo-C8q0KQHG.webp",
      technologies: ["React", "GitHub API", "JavaScript", "CSS"]
    },
    {
      id: 3,
      title: "Virtual Try On",
      description: "An innovative AI-powered virtual clothing try-on platform. Users can virtually try clothes through advanced computer vision and deep learning. Built during a hackathon, featuring real-time garment simulation and seamless UI/UX.",
      demoLink: "https://drive.google.com/drive/folders/1N20iV80GPnwtWxY_yS1Rm5Aos4v_ZyPG?usp=drive_link",
      sourceCodeLink: "https://github.com/Charu-sarswat/Try-Clothes",
      category: "ai",
      image: "photo-C8q0KQHG.webp",
      technologies: ["React", "TensorFlow", "AI/ML", "Computer Vision"]
    },
    {
      id: 4,
      title: "Production Website",
      description: "A project assessment given by a client based on HTML, CSS, JS, PHP, SQL. Includes user authentication and product information.",
      demoLink: "http://websign.infinityfreeapp.com/?i=1",
      sourceCodeLink: "https://github.com/Charu-sarswat/php",
      category: "web",
      image: "photo-C8q0KQHG.webp",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "SQL"]
    },
    {
      id: 5,
      title: "Quiz App",
      description: "A Quiz app for playing games and enhancing knowledge. Based on React, includes user authentication and interactive features.",
      demoLink: "https://app.netlify.com/sites/savitaworld/overview",
      sourceCodeLink: "https://github.com/Charu-sarswat/Quiz",
      category: "web",
      image: "photo-C8q0KQHG.webp",
      technologies: ["React", "JavaScript", "CSS", "Firebase"]
    },
    {
      id: 6,
      title: "Online Virtual Teaching",
      description: "Online teaching platform based on MERN stack. Features include video conferencing, notes management, and intuitive UI/UX design.",
      demoLink: "https://github.com/Charu-sarswat/Online-virtual-platform",
      sourceCodeLink: "https://github.com/Charu-sarswat/Online-virtual-platform",
      category: "fullstack",
      image: "photo-C8q0KQHG.webp",
      technologies: ["MongoDB", "Express", "React", "Node.js"]
    },
    {
      id: 7,
      title: "Ecommerce Website",
      description: "Ecommerce platform for clothing with ordering and price checking features. Designed for retail shops and malls.",
      demoLink: "https://boisterous-praline-7192f1.netlify.app/",
      sourceCodeLink: "https://github.com/Charu-sarswat/Ecommerce",
      category: "web",
      image: "photo-C8q0KQHG.webp",
      technologies: ["HTML", "CSS", "JavaScript"]
    }
  ];

  // Filter categories with emojis and descriptions
  const categories = [
    {
      id: "all",
      name: "All Projects",
      icon: "🌟",
      description: "Explore all my creative works"
    },
    {
      id: "web",
      name: "Web Development",
      icon: "🌐",
      description: "Modern and responsive web applications"
    },
    {
      id: "fullstack",
      name: "Full Stack",
      icon: "⚡",
      description: "End-to-end application solutions"
    },
    {
      id: "ai",
      name: "AI Projects",
      icon: "🤖",
      description: "Artificial Intelligence innovations"
    }
  ];

  // Filter projects when activeFilter changes
  useEffect(() => {
    const filtered = activeFilter === "all"
      ? projects
      : projects.filter(project => project.category === activeFilter);

    setFilteredProjects(filtered);
    setCurrentPage(0);
  }, [activeFilter]);

  // Pagination handlers
  const nextPage = () => {
    if ((currentPage + 1) * projectsPerPage < filteredProjects.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Calculate current projects to display
  const currentProjects = filteredProjects.slice(
    currentPage * projectsPerPage,
    (currentPage + 1) * projectsPerPage
  );

  // Enhanced animation variants with more dynamic effects
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
        type: "spring",
        bounce: 0.4
      }
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.4 }
    }
  };

  const itemVariants = {
    hidden: { 
      y: 100,
      opacity: 0,
      rotate: -5,
      scale: 0.8
    },
    visible: {
      y: 0,
      opacity: 1,
      rotate: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        mass: 0.8
      }
    },
    hover: {
      y: -10,
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const glowVariants = {
    initial: { opacity: 0.5, scale: 1 },
    animate: {
      opacity: [0.4, 0.6, 0.4],
      scale: [1, 1.2, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Project count for each category
  const getCategoryCount = (category) => {
    return category === "all" 
      ? projects.length 
      : projects.filter(p => p.category === category).length;
  };

  return (
    <motion.div 
      id="projects" 
      className="relative min-h-screen py-10 md:py-20 overflow-hidden bg-[#0a192f]"
      initial="initial"
      animate="animate"
      viewport={{ once: false }}
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[url('data:image/svg+xml,...')] opacity-[0.03]"
          animate={{
            rotate: 360
          }}
          transition={{
            duration: 200,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        {/* Glowing Orbs */}
        <motion.div
          variants={glowVariants}
          className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-gradient-to-r from-[#ea9f12] to-[#f8b02b] rounded-full blur-[100px] opacity-20"
        />
        <motion.div
          variants={glowVariants}
          animate={{
            ...glowVariants.animate,
            transition: { ...glowVariants.animate.transition, delay: 1.5 }
          }}
          className="absolute bottom-1/4 right-1/4 w-[45rem] h-[45rem] bg-gradient-to-r from-[#f8b02b] to-[#ea9f12] rounded-full blur-[120px] opacity-20"
        />
      </div>

      {/* Main Content Container */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Section Header */}
        <motion.div 
          className="text-center mb-8 md:mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            <span className="bg-gradient-to-r from-white via-[#ea9f12] to-[#f8b02b] bg-clip-text text-transparent">
              Featured Projects
            </span>
          </motion.h2>
          <motion.div
            className="w-24 h-1 mx-auto mb-6 rounded-full bg-gradient-to-r from-[#ea9f12] to-[#f8b02b]"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
          <motion.p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto px-4">
            Discover my latest works showcasing innovation and creativity
          </motion.p>
        </motion.div>

        {/* Enhanced Filter Section with Glow */}
        <motion.div 
          className="relative mb-8 md:mb-12 overflow-x-auto glass-effect p-4 rounded-xl"
          variants={containerVariants}
        >
          <motion.div 
            className="flex flex-nowrap md:flex-wrap items-center justify-start md:justify-center gap-2 md:gap-4 
                       pb-4 md:pb-0 px-2 md:px-0 min-w-full overflow-x-auto scrollbar-none"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`min-w-max px-3 md:px-6 py-2 md:py-3 text-xs md:text-base rounded-full 
                  backdrop-blur-sm transition-all duration-300 overflow-hidden whitespace-nowrap
                  ${activeFilter === category.id
                    ? 'bg-gradient-to-r from-[#ea9f12] to-[#f8b02b] text-white shadow-lg'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
                  }`}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-1.5 md:gap-2 relative z-10">
                  <span className="text-base md:text-xl">{category.icon}</span>
                  <span className="font-medium">{category.name}</span>
                  <span className="ml-1 px-1.5 py-0.5 text-[10px] md:text-xs rounded-full bg-white/10">
                    {getCategoryCount(category.id)}
                  </span>
                </span>
                {activeFilter === category.id && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#ea9f12]/20 to-[#f8b02b]/20"
                    layoutId="activeCategory"
                    initial={false}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Projects Grid with Enhanced Animations */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            layout
          >
            {currentProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="h-full transform-gpu relative group"
                whileHover="hover"
                layout
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#ea9f12]/20 to-[#f8b02b]/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0, 0.3, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Enhanced Pagination with Glow Effect */}
        {filteredProjects.length > projectsPerPage && (
          <motion.div
            className="flex justify-center items-center gap-6 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 0.5,
              type: "spring",
              stiffness: 200,
              damping: 20
            }}
          >
            <motion.button
              onClick={() => setCurrentPage(prev => Math.max(0, prev - 1))}
              disabled={currentPage === 0}
              className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300
                ${currentPage === 0
                  ? 'bg-white/5 text-gray-500 cursor-not-allowed'
                  : 'bg-gradient-to-r from-[#ea9f12] to-[#f8b02b] text-white hover:shadow-lg'
                }`}
              whileHover={currentPage !== 0 ? { scale: 1.1 } : {}}
              whileTap={currentPage !== 0 ? { scale: 0.9 } : {}}
            >
              <FaArrowLeft className="text-sm md:text-base" />
            </motion.button>

            <span className="text-base md:text-lg text-gray-300 font-medium">
              {currentPage + 1} / {Math.ceil(filteredProjects.length / projectsPerPage)}
            </span>

            <motion.button
              onClick={() => setCurrentPage(prev =>
                Math.min(Math.ceil(filteredProjects.length / projectsPerPage) - 1, prev + 1)
              )}
              disabled={currentPage >= Math.ceil(filteredProjects.length / projectsPerPage) - 1}
              className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300
                ${currentPage >= Math.ceil(filteredProjects.length / projectsPerPage) - 1
                  ? 'bg-white/5 text-gray-500 cursor-not-allowed'
                  : 'bg-gradient-to-r from-[#ea9f12] to-[#f8b02b] text-white hover:shadow-lg'
                }`}
              whileHover={currentPage < Math.ceil(filteredProjects.length / projectsPerPage) - 1 ? { scale: 1.1 } : {}}
              whileTap={currentPage < Math.ceil(filteredProjects.length / projectsPerPage) - 1 ? { scale: 0.9 } : {}}
            >
              <FaArrowRight className="text-sm md:text-base" />
            </motion.button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Projects;