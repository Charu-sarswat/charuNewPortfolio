import React from "react";
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact, FaGoogle, FaAmazon } from "react-icons/fa";
import { SiRedis, SiMongodb } from "react-icons/si";
import { RiNetflixFill } from "react-icons/ri";
import { FaCertificate } from "react-icons/fa"; // Add this import

const Experience = () => {
  const handleCertificateClick = (certificatePath) => {
    const link = document.createElement('a');
    link.href = certificatePath;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="Experience" className="relative py-20 min-h-screen text-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-40 h-40 rounded-full bg-[#ea9f12] opacity-5 floating"></div>
      <div className="absolute bottom-40 left-10 w-60 h-60 rounded-full bg-[#ea9f12] opacity-5 floating" style={{animationDelay: '1.5s'}}></div>
      
      <div className="container mx-auto px-6 md:px-12">
        {/* Section title */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience <span className="text-[#ea9f12]">& Skills</span>
          </h2>
          <div className="w-24 h-1 bg-[#ea9f12] mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row items-start justify-around gap-16">
          {/* Technologies Section */}
          <div className="glass-effect w-full md:w-2/5 p-8 rounded-xl relative overflow-hidden border border-white/10">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {[
                { icon: <FaHtml5 color="#E34F26" />, name: "HTML" },
                { icon: <FaCss3 color="#1572B6" />, name: "CSS" },
                { icon: <FaReact color="#61DAFB" />, name: "React" },
                { icon: <FaJs color="#F7DF1E" />, name: "JavaScript" },
                { icon: <FaFigma color="#F24E1E" />, name: "Figma" },
                { icon: <SiMongodb color="#47A248" />, name: "MongoDB" },
                { icon: <SiRedis color="#FF4438" />, name: "Redis" },
              ].map((tech, index) => (
                <div
                  key={index}
                  className="group relative p-6 bg-[#112240]/50 rounded-xl backdrop-blur-sm border border-white/10
                           transition-all duration-500 hover:border-[#ea9f12]/50 hover:bg-[#112240]/80
                           hover:shadow-lg hover:shadow-[#ea9f12]/20 transform hover:-translate-y-1"
                >
                  <div className="relative z-10 flex flex-col items-center">
                    <span className="text-5xl transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                      {tech.icon}
                    </span>
                    <p className="mt-4 font-medium text-sm text-white/70 group-hover:text-white">{tech.name}</p>
                  </div>
                  
                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-[#ea9f12]/10 via-transparent to-transparent 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              ))}
            </div>
            
            {/* Corner Decorations */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#ea9f12]/20 to-transparent rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-[#ea9f12]/20 to-transparent rounded-tr-full"></div>
          </div>

          {/* Work Experience Section */}
          <div className="w-full md:w-3/5 space-y-8">
            {[
              {
                company: "Emertex",
                icon: <span className="text-4xl font-bold text-blue-500">E</span>,
                role: "Software Engineer",
                date: "January 2025 - Present",
                tasks: ["Work as software developer", "Internship"],
                certificate: "/emertxe_internship_certificate_Charu_Sarswat (1).pdf"
              },
              {
                company: "Smart Intern",
                icon: <RiNetflixFill color="#E50914" />,
                role: "Web Developer",
                date: "Jan 2022 - March 2025",
                tasks: ["Developed scalable backend APIs", "Optimized database queries"],
                certificate: "/SMAT_Certificate.pdf"
              },
              {
                company: "Adi foundation",
                icon: <FaAmazon color="#FF9900" />,
                role: "Full Stack Developer",
                date: "June 2024 ",
                tasks: ["Built microservices architecture", "Integrated payment gateways"],
              },
            ].map((job, index) => (
              <div
                key={index}
                className="group relative p-6 glass-card rounded-xl border border-[#ea9f12]/10
                         transition-all duration-500 hover:border-[#ea9f12]/30 transform hover:-translate-y-1"
              >
                <div className="flex gap-6 items-start relative z-10">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-white/5 to-transparent
                               group-hover:from-[#ea9f12]/20 group-hover:to-[#f8b02b]/10 transition-all duration-500">
                    <span className="text-4xl">{job.icon}</span>
                  </div>
                  
                  <div className="flex-grow">
                    <h2 className="text-xl font-bold text-white/90 group-hover:text-white">
                      {job.role}
                      <span className="text-[#ea9f12]/80">, {job.company}</span>
                    </h2>
                    <p className="text-sm text-white/50 mt-1">{job.date}</p>
                    <ul className="mt-4 space-y-2">
                      {job.tasks.map((task, i) => (
                        <li key={i} className="flex items-center gap-2 text-white/70 group-hover:text-white/90">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#ea9f12]/40 group-hover:bg-[#ea9f12]"></span>
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {job.certificate && (
                    <button
                      onClick={() => handleCertificateClick(job.certificate)}
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#ea9f12] to-[#f8b02b]
                               rounded-lg hover:shadow-lg hover:shadow-[#ea9f12]/25 transition-all duration-300
                               transform hover:scale-105 hover:from-[#f8b02b] hover:to-[#ea9f12]"
                    >
                      <FaCertificate className="text-lg" />
                      <span>View</span>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;