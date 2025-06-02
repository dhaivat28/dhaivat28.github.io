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
      const y = window.scrollY;
      if (y > 60 && !scrolled) {
        setScrolled(true);
      } else if (y < 40 && scrolled) {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <>
      <div
        className={`hidden w-full lg:flex lg:justify-center lg:items-center sticky top-0 bg-white z-50 transition-all duration-300 ease-in-out ${
          scrolled ? "shadow-md h-16" : "h-24"
        }`}
      >
        {/* Desktop menu */}
        <div className="hidden justify-center items-center shadow-lg lg:flex lg:gap-10 lg:shadow-none cursor-pointer">
          {links.map((link) => (
            <Link
              key={link.name}
              aria-label={link.name}
              to={link.path === "experience" ? "experience-desktop" : link.path}
              smooth={true}
              duration={500}
              spy={true}
              offset={-60}
              activeClass="text-ocean-blue"
              className="font-nunito text-base font-semibold"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
      {/* Mobile menu toggle button*/}
      <div className="lg:hidden relative p-2">
        <button
          onClick={toggleMenu}
          type="button"
          className="focus:outline-none "
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
        {/* Mobile menu*/}
        <div
          className={`
            absolute top-13 left-0 bottom-0 w-full bg-white flex flex-col justify-between gap-2 p-4 font-nunito font-semibold shadow-lg text-lg lg:hidden
            transition-all duration-300 ease-in-out overflow-hidden z-10
            ${showMenu ? "opacity-100 h-80" : "opacity-0 h-0"}
          `}
        >
          {links.map((link) => (
            <Link
              key={link.name}
              aria-label={link.name}
              to={link.path === "experience" ? "experience-mobile" : link.path}
              className="cursor-pointer"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
