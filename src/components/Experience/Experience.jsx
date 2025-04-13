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
    <div id="Experience" className="p-10 md:p-24 bg-sky-400 text-white">
      {/* Heading */}
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-12 border-b-2 border-gray-500 inline-block px-6">
        Experience
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-around gap-16">
        {/* Technologies Section */}
        <div className="flex flex-wrap justify-center md:w-2/5 gap-8 p-8 bg-[#112240] rounded-lg shadow-lg">
          {[
            { icon: <FaHtml5 color="#E34F26" />, name: "HTML" },
            { icon: <FaCss3 color="#1572B6" />, name: "CSS" },
            { icon: <FaReact color="#61DAFB" />, name: "React" },
            { icon: <FaJs color="#F7DF1E" />, name: "JavaScript" },
            { icon: <FaFigma color="#F24E1E" />, name: "Figma" },
            { icon: <SiMongodb color="#47A248" />, name: "MongoDB" },
            { icon: <SiRedis color="#FF4438" />, name: "Redis" },
          ].map((tech, index) => (
            <span
              key={index}
              className="p-8 bg-zinc-900 flex flex-col items-center rounded-2xl shadow-md hover:bg-opacity-80 transition-transform duration-300 hover:scale-110 cursor-pointer"
            >
              <span className="text-5xl">{tech.icon}</span> {/* Increased icon size */}
              <p className="text-lg mt-2">{tech.name}</p> {/* Increased font size */}
            </span>
          ))}
        </div>

        {/* Work Experience Section */}
        <div className="space-y-6">
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
              className="flex gap-6 items-center p-6 bg-[#112240] bg-opacity-90 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
            >
              <span className="text-4xl">{job.icon}</span>
              <div className="flex-grow">
                <h2 className="text-xl font-semibold">{job.role}, {job.company}</h2>
                <p className="text-sm font-thin">{job.date}</p>
                <ul className="text-sm mt-2 list-disc pl-5">
                  {job.tasks.map((task, i) => (
                    <li key={i} className="text-gray-300">{task}</li>
                  ))}
                </ul>
              </div>
              {job.certificate && (
                <button
                  onClick={() => handleCertificateClick(job.certificate)}
                  className="flex items-center gap-2 px-4 py-2 bg-[#ea9f12] rounded-lg hover:bg-[#f8b02b] transition-colors duration-300"
                >
                  <FaCertificate />
                  <span>Certificate</span>
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;