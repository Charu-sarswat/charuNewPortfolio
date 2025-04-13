import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center"
    >
      <div>
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">
          Feel Free To reach out!
        </h3>
      </div>

      <ul className="text-sm md:text-xl space-y-4">
        <li>
          <a 
            href="mailto:charusaraswat639649@gmail.com"
            className="flex gap-1 items-center hover:text-[#ea9f12] transition-colors duration-300"
          >
            <MdOutlineEmail size={20} />
            charusaraswat639649@gmail.com
          </a>
        </li>
        <li>
          <a 
            href="https://www.linkedin.com/in/charu-sarswat-060590298/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-1 items-center hover:text-[#ea9f12] transition-colors duration-300"
          >
            <CiLinkedin />
            LinkedIn Profile
          </a>
        </li>
        <li>
          <a 
            href="https://github.com/Charu-sarswat"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-1 items-center hover:text-[#ea9f12] transition-colors duration-300"
          >
            <FaGithub />
            GitHub Profile
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;