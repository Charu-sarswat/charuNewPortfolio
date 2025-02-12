

import React from "react";
import bannerImg from "../../assets/photo-C8q0KQHG.webp";

const ProjectCard = ({ title, main, demoLink, sourceCodeLink,  hoverColor }) => {
  return (
    <div className={`p-3 md:p-6 flex flex-col w-80 shadow-xl shadow-slate-900 rounded-2xl bg-gray-800 transition-colors duration-300 ${hoverColor}`}>

    {/* </div><div className="p-3 md:p-6 flex flex-col w-80 shadow-xl shadow-slate-900 rounded-2xl bg-gray-800 transition-colors duration-300 hover:bg-blue-700"> */}
      <img className="p-4" src={bannerImg} alt="" />
      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
        {title}
      </h3>
      <p className="px-4 text-sm md:text-md leading-tight py-2">{main}</p>
      <div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-4">
        <a href={demoLink} target="_blank" rel="noopener noreferrer">
          <button className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-green-300">
            Demo
          </button>
        </a>
        <a href={sourceCodeLink} target="_blank" rel="noopener noreferrer">
          <button className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-red-400">
            Source Code
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
