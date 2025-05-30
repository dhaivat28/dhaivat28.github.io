import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-scroll";

const links = [
  { name: "Home", path: "home" },
  { name: "About Me", path: "about" },
  { name: "Projects", path: "projects" },
  { name: "Experience", path: "experience" },
  { name: "Education & Learning", path: "education" },
  { name: "Contact", path: "contact" },
];

export const Header: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setShowMenu((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`w-full sm:flex sm:justify-center sm:items-center sticky top-0 bg-white z-10 transition-shadow duration-300 ${
        scrolled ? "shadow-md h-16" : "h-24"
      }`}
    >
      {/* Desktop menu */}
      <div className="hidden sm:flex sm:gap-10 justify-center items-center shadow-lg sm:shadow-none cursor-pointer">
        {links.map((link) => (
          <Link
            key={link.name}
            aria-label={link.name}
            to={link.path}
            smooth={true}
            duration={500}
            spy={true}
            offset={-60}
            activeClass="text-ocean-blue"
            className="font-nunito text-lg font-semibold"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Mobile menu toggle button*/}
      <div className="sm:hidden border-dotted border-1 border-blue-500">
        <button
          onClick={toggleMenu}
          type="button"
          className="focus:outline-none"
          aria-label="Hamburger Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light cursor-pointer"
          >
            {showMenu ? (
              <FiX className="text-3xl" />
            ) : (
              <FiMenu className="text-3xl" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu*/}
      <div
        className={
          showMenu
            ? "block m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none"
            : "hidden"
        }
      >
        {links.map((link) => (
          <Link
            key={link.name}
            aria-label={link.name}
            to={link.path}
            className="block text-left text-lg dark:text-ternary-light sm:mx-4 mb-2 sm:py-2"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};
