import React, { useState, useEffect } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

const Navbar = () => {
  const [menu, openMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Handle scroll event
  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
    
    // Determine active section based on scroll position
    const sections = ["home", "about", "experience", "projects", "contact"];
    const scrollPosition = window.scrollY + 100;
    
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;
        
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "Experience", label: "Experience" }, // Changed id to match section ID
    { id: "projects", label: "Projects" },
    { id: "Footer", label: "Contact" } // Changed id to match section ID
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = id === 'Experience' || id === 'Footer' ? 0 : 80; // Adjust offset for these sections
      window.scrollTo({
        top: element.offsetTop - offset,
        behavior: "smooth"
      });
    }
    openMenu(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'py-3 glass-effect backdrop-blur-md' : 'py-5 bg-transparent'
    }`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <div className="relative">
          <span className={`text-2xl font-bold ${scrolled ? 'gradient-text' : 'text-white neon-text'}`}>
            Charu<span className="text-[#ea9f12]">.</span>
          </span>
          {!scrolled && (
            <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#ea9f12] to-transparent"></div>
          )}
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollToSection(link.id)}
                className={`text-md font-medium transition-all duration-300 px-2 py-1 relative ${
                  activeSection === link.id 
                    ? 'text-[#ea9f12]' 
                    : scrolled ? 'text-white hover:text-[#ea9f12]' : 'text-white hover:text-[#ea9f12]'
                }`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#ea9f12] transform scale-x-0 transition-transform duration-300 ${
                  activeSection === link.id ? 'scale-x-100' : ''
                }`}></span>
              </button>
            </li>
          ))}
        </ul>

        {/* Contact Button */}
        <button className="hidden md:block py-2 px-5 bg-[#ea9f12] text-white rounded-full text-sm font-medium hover:bg-opacity-80 transition-all duration-300 hover:scale-105">
          Let's Talk
        </button>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={() => openMenu(!menu)}
            aria-label={menu ? "Close menu" : "Open menu"}
            className="text-white focus:outline-none"
          >
            {menu ? (
              <RiCloseLine size={30} className="text-[#ea9f12]" />
            ) : (
              <RiMenu2Line size={30} className={scrolled ? 'text-[#ea9f12]' : 'text-white'} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-500 overflow-hidden ${
        menu ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="glass-effect px-6 py-4 mt-2 rounded-lg mx-4">
          <ul className="space-y-4 py-2">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollToSection(link.id)}
                  className={`block w-full text-left px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === link.id 
                      ? 'bg-[#ea9f12] bg-opacity-20 text-[#ea9f12]' 
                      : 'text-white hover:bg-[#ea9f12] hover:bg-opacity-10'
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li>
              <button className="w-full mt-2 py-2 px-4 bg-[#ea9f12] text-white rounded-lg text-sm font-medium hover:bg-opacity-80 transition-all duration-300">
                Let's Talk
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;