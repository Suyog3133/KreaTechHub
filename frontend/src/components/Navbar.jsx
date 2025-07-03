import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Work", path: "/work" },
    { name: "Process", path: "/process" },
    { name: "About", path: "/about" },
    { name: "Contact Us", path: "/contactus" }, // Contact Us as normal nav link
  ];

  const linkVariants = {
    rest: { opacity: 1 },
    hover: {
      opacity: [1, 0, 1],
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-10 py-4 flex items-center justify-between bg-black/60 backdrop-blur-md text-white">
      {/* Logo */}
      <Link to="/" className="flex items-center space-x-2">
        <img src={logo} alt="Logo" className="h-8 md:h-10" />
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-6 text-sm md:text-base font-medium">
        {navLinks.map((link) => (
          <motion.div
            key={link.name}
            initial="rest"
            whileHover="hover"
            animate="rest"
          >
            <Link
              to={link.path}
              className={`transition duration-200 ${
                location.pathname === link.path ? "text-purple-400" : ""
              }`}
            >
              <motion.span variants={linkVariants}>{link.name}</motion.span>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Desktop Let's Start Button */}
      <div className="hidden md:block">
        <Link to="/contactus">
          <button className="bg-purple-500 hover:bg-purple-600 text-white text-sm md:text-base px-4 py-2 rounded-md transition duration-200">
            Let's Start
          </button>
        </Link>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-2xl focus:outline-none">
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-[#0e0e0e] transition-all duration-300 overflow-hidden md:hidden ${
          menuOpen ? "max-h-[500px] py-6 px-6" : "max-h-0"
        }`}
      >
        <div className="flex flex-col space-y-5 text-base font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={closeMenu}
              className={`transition hover:text-purple-400 ${
                location.pathname === link.path ? "text-purple-400" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Let's Start button in mobile menu */}
          <Link to="/contactus" onClick={closeMenu}>
            <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-md transition">
              Let's Start
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
