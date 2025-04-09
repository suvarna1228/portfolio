import { useState } from "react";
import useScrollToSection from "../hooks/useScrollToSection";
import { FiMenu, FiX } from "react-icons/fi";
import resume from "../assets/suvarna.pdf";
import logo from "../assets/logo.png";

const Navbar = () => {
  const scrollTo = useScrollToSection();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleLinkClick = (section) => {
    scrollTo(section);
    setIsOpen(false);
  };

  return (
    <nav className=" md:px-10 mb-20 flex flex-col md:flex-row items-center justify-between md:py-2 fixed top-0 left-0 w-full z-50 shadow-md bg-[radial-gradient(ellipse_80%_80%_at_50%_-45%,rgb(120,119,145),black)]


">
      {/* Logo and Toggle Button */}
      <div className="flex items-center justify-between w-full md:w-auto">
        <img src={logo} alt="logo"className="w-20 h-15" />
        <button onClick={toggleMenu} className="md:hidden text-2xl">
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Navigation Links */}
      <ul
        className={`${
          isOpen ? "flex" : "hidden"
        } flex-col md:flex md:flex-row items-center md:text-2xl text-lg md:gap-6 gap-2`}
      >
        <li>
          <button onClick={() => handleLinkClick("home")}>Home</button>
        </li>
        <li>
          <button onClick={() => handleLinkClick("about")}>About</button>
        </li>
        <li>
          <button onClick={() => handleLinkClick("technogies")}>Technogies</button>
        </li>
        <li>
          <button onClick={() => handleLinkClick("experiences")}>Experience</button>
        </li>
        <li>
          <button onClick={() => handleLinkClick("projects")}>Projects</button>
        </li>
        <li>
          <button onClick={() => handleLinkClick("contact")}>Contact</button>
        </li>
        <li>
       <a
       href={resume}
       download
       className=" text-white px-4 py-2 border border-b rounded-lg hover:bg-neutral-400 transition duration-300"
        >
        Resume
        </a>
        </li>

      </ul>
    </nav>
  );
};

export default Navbar;
