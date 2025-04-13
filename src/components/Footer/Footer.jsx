import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="relative min-h-screen text-white overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-40 h-40 rounded-full bg-[#ea9f12] opacity-5 floating"></div>
      <div className="absolute bottom-40 left-10 w-60 h-60 rounded-full bg-[#ea9f12] opacity-5 floating" 
           style={{animationDelay: '1.5s'}}></div>

      <div className="container mx-auto px-6 md:px-12 h-full flex items-center justify-center">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 w-full">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Contact <span className="text-[#ea9f12]">Me</span>
            </h1>
            <div className="w-24 h-1 bg-[#ea9f12] mb-6 mx-auto md:mx-0"></div>
            <h3 className="text-xl md:text-2xl text-white/70">
              Feel Free To reach out!
            </h3>
          </div>

          <ul className="glass-effect p-8 rounded-xl border border-white/10 space-y-6">
            <li>
              <a 
                href="mailto:charusaraswat639649@gmail.com"
                className="flex items-center gap-4 text-white/70 hover:text-[#ea9f12] transition-all duration-300"
              >
                <div className="p-3 rounded-full bg-[#112240] group-hover:bg-[#ea9f12]/10">
                  <MdOutlineEmail className="text-2xl text-[#ea9f12]" />
                </div>
                charusaraswat639649@gmail.com
              </a>
            </li>
            <li>
              <a 
                href="https://www.linkedin.com/in/charu-sarswat-060590298/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-white/70 hover:text-[#ea9f12] transition-all duration-300"
              >
                <div className="p-3 rounded-full bg-[#112240] group-hover:bg-[#ea9f12]/10">
                  <CiLinkedin className="text-2xl text-[#ea9f12]" />
                </div>
                LinkedIn Profile
              </a>
            </li>
            <li>
              <a 
                href="https://github.com/Charu-sarswat"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-white/70 hover:text-[#ea9f12] transition-all duration-300"
              >
                <div className="p-3 rounded-full bg-[#112240] group-hover:bg-[#ea9f12]/10">
                  <FaGithub className="text-2xl text-[#ea9f12]" />
                </div>
                GitHub Profile
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;