import React, { useState } from "react";
import logo from "../assets/Logo.png";
import Button from "../utils/Button";
import resume from "../assets/Rajnish__Resume.pdf";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleResumeClick = () => {
    window.open(resume, "_blank");
  };

  // Smooth scroll with offset to account for fixed navbar
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (!section) return;

    // If your navbar height changes, update this value accordingly
    const NAVBAR_HEIGHT = 72; // px (approx)
    const top = section.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;

    window.scrollTo({ top, behavior: "smooth" });
    setIsOpen(false); // close mobile menu
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#1A0B2E] text-white z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-[35px] h-[39px]" />
        </div>

        {/* Desktop Menu */}
        <div>
          <ul className="hidden md:flex gap-8 font-semibold text-[18px]">
            <li onClick={() => scrollToSection("home")} className="cursor-pointer hover:text-[#915EFF] transition">Home</li>
            <li onClick={() => scrollToSection("about")} className="cursor-pointer hover:text-[#915EFF] transition">About</li>
            <li onClick={() => scrollToSection("skills")} className="cursor-pointer hover:text-[#915EFF] transition">Skills</li>
            <li onClick={() => scrollToSection("experience")} className="cursor-pointer hover:text-[#915EFF] transition">Experience</li>
            <li onClick={() => scrollToSection("github")} className="cursor-pointer hover:text-[#915EFF] transition">GitHub</li>
            <li onClick={() => scrollToSection("contact")} className="cursor-pointer hover:text-[#915EFF] transition">Contact</li>
          </ul>
        </div>

        {/* Resume Button */}
        <div className="hidden md:block">
          <Button text="Resume" onClick={handleResumeClick} />
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#1A0B2E] px-4 pb-4">
          <ul className="flex flex-col gap-4 font-semibold text-[18px] mt-4">
            <li onClick={() => scrollToSection("home")} className="cursor-pointer hover:text-[#915EFF] transition">Home</li>
            <li onClick={() => scrollToSection("about")} className="cursor-pointer hover:text-[#915EFF] transition">About</li>
            <li onClick={() => scrollToSection("skills")} className="cursor-pointer hover:text-[#915EFF] transition">Skills</li>
            <li onClick={() => scrollToSection("experience")} className="cursor-pointer hover:text-[#915EFF] transition">Experience</li>
            <li onClick={() => scrollToSection("github")} className="cursor-pointer hover:text-[#915EFF] transition">GitHub</li>
            <li onClick={() => scrollToSection("contact")} className="cursor-pointer hover:text-[#915EFF] transition">Contact</li>

            <li>
              <Button text="Resume" onClick={handleResumeClick} />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
