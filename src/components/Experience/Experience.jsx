import React from "react";
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact, FaGoogle, FaAmazon } from "react-icons/fa";
import { SiRedis, SiMongodb } from "react-icons/si";
import { RiNetflixFill } from "react-icons/ri";

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24 bg-[#0A192F] text-white">
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
              className="p-5 bg-zinc-900 flex flex-col items-center rounded-2xl shadow-md hover:bg-opacity-80 transition-transform duration-300 hover:scale-110 cursor-pointer"
            >
              {tech.icon}
              <p className="text-sm mt-2">{tech.name}</p>
            </span>
          ))}
        </div>

        {/* Work Experience Section */}
        <div className="space-y-6">
          {[
            {
              company: "Google",
              icon: <FaGoogle color="#4285F4" />,
              role: "Software Engineer",
              date: "Sept 2023 - Present",
              tasks: ["Work as software developer", "Senior SDE-developer"],
            },
            {
              company: "Netflix",
              icon: <RiNetflixFill color="#E50914" />,
              role: "Backend Developer",
              date: "Jan 2022 - Aug 2023",
              tasks: ["Developed scalable backend APIs", "Optimized database queries"],
            },
            {
              company: "Amazon",
              icon: <FaAmazon color="#FF9900" />,
              role: "Full Stack Developer",
              date: "June 2020 - Dec 2021",
              tasks: ["Built microservices architecture", "Integrated payment gateways"],
            },
          ].map((job, index) => (
            <div
              key={index}
              className="flex gap-6 items-center p-6 bg-[#112240] bg-opacity-90 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
            >
              <span className="text-4xl">{job.icon}</span>
              <div>
                <h2 className="text-xl font-semibold">{job.role}, {job.company}</h2>
                <p className="text-sm font-thin">{job.date}</p>
                <ul className="text-sm mt-2 list-disc pl-5">
                  {job.tasks.map((task, i) => (
                    <li key={i} className="text-gray-300">{task}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
