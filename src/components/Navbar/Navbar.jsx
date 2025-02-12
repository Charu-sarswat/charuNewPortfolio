import React, { useState, useEffect } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

const Navbar = () => {
  const [menu, openMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll event
  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 flex flex-wrap justify-between md:items-center ${scrolled ? 'bg-white' : 'bg-transparent'} shadow-md z-50 transition-colors duration-300`}>
      <span className={`text-xl font-bold tracking-wide ${scrolled ? 'text-black' : 'text-white'} px-10 pt-6 md:px-20`}>
        Portfolio
      </span>

      {/* Navigation Links */}
      <ul
        className={`${
          menu ? "block" : "hidden"
        } mx-24 py-2 mt-4 font-semibold md:mt-0 bg-opacity-90 md:bg-transparent md:static md:mx-0 md:flex gap-6`}
      >
        <a href="#About">
          <li className={`text-md transition-all duration-300 p-1 md:p-0 hover:text-yellow-300 ${scrolled ? 'text-black' : 'text-white'} border-b-2 border-transparent hover:border-yellow-300`}>
            About
          </li>
        </a>
        <a href="#Experience">
          <li className={`text-md transition-all duration-300 p-1 md:p-0 hover:text-yellow-300 ${scrolled ? 'text-black' : 'text-white'} border-b-2 border-transparent hover:border-yellow-300`}>
            Experience
          </li>
        </a>
        <a href="#Projects">
          <li className={`text-md transition-all duration-300 p-1 md:p-0 hover:text-yellow-300 ${scrolled ? 'text-black' : 'text-white'} border-b-2 border-transparent hover:border-yellow-300`}>
            Projects
          </li>
        </a>
        <a href="#Footer">
          <li className={`text-md transition-all duration-300 p-1 md:p-0 hover:text-yellow-300 ${scrolled ? 'text-black' : 'text-white'} border-b-2 border-transparent hover:border-yellow-300`}>
            Contact
          </li>
        </a>
      </ul>

      {/* Mobile Menu Icon */}
      <div className="md:hidden absolute right-10 top-6 transition-all duration-300">
        {menu ? (
          <RiCloseLine
            size={30}
            onClick={() => openMenu(false)}
            aria-label="Close menu"
            className={`cursor-pointer ${scrolled ? 'text-black' : 'text-white'}`}
          />
        ) : (
          <RiMenu2Line
            size={30}
            onClick={() => openMenu(true)}
            aria-label="Open menu"
            className={`cursor-pointer ${scrolled ? 'text-black' : 'text-white'}`}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;