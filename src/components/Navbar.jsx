import { useState } from "react";
import useScrollToSection from "../hooks/useScrollToSection";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const scrollTo = useScrollToSection();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleLinkClick = (section) => {
    scrollTo(section);
    setIsOpen(false);
  };

  return (
    <nav className=" md:px-10 mb-20 flex flex-col md:flex-row items-center justify-between py-6">
      {/* Logo and Toggle Button */}
      <div className="flex items-center justify-between w-full md:w-auto">
        <img src="#" alt="logo" />
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
      </ul>
    </nav>
  );
};

export default Navbar;
