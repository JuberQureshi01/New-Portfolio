// components/Header.tsx
"use client";
import { useState } from "react";
import { motion, AnimatePresence, useScroll, Variants } from "framer-motion"; // Import motion, AnimatePresence, useScroll, and Variants
import {
  HiOutlineMenu,
  HiOutlineX,
  HiOutlineHome,
  HiOutlineUser,
  HiOutlineDocumentText,
  HiOutlineBriefcase,
  HiOutlinePhotograph,
  HiOutlineMail,
} from "react-icons/hi";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollYProgress } = useScroll(); // Track scroll progress of the page

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close mobile menu on click
    } else {
      console.warn(`Element with id "${id}" not found.`);
    }
  };

  // --- Animation Variants ---

  // Desktop header animation
  const navContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const navItemVariants: Variants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  // Mobile menu animation
  const mobileMenuVariants: Variants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.2 },
    },
  };

  const mobileNavListVariants: Variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  const mobileNavItemVariants: Variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  return (
    <div>
      {/* Desktop Header */}
      <header className="fixed top-0 hidden md:block left-0 w-full z-50 bg-white text-black shadow">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-2xl font-bold"
          >
            Juber
          </motion.h1>
          <motion.nav
            className="hidden md:flex space-x-6 text-sm"
            variants={navContainerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.span
              variants={navItemVariants}
              onClick={() => scrollToSection("home")}
              className="hover:text-blue-500 cursor-pointer"
            >
              Home
            </motion.span>
            <motion.span
              variants={navItemVariants}
              onClick={() => scrollToSection("about")}
              className="hover:text-blue-500 cursor-pointer"
            >
              About
            </motion.span>
            <motion.span
              variants={navItemVariants}
              onClick={() => scrollToSection("projects")}
              className="hover:text-blue-500 cursor-pointer"
            >
              Projects
            </motion.span>
            <motion.span
              variants={navItemVariants}
              onClick={() => scrollToSection("skills")}
              className="hover:text-blue-500 cursor-pointer"
            >
              Skills
            </motion.span>
            <motion.span
              variants={navItemVariants}
              onClick={() => scrollToSection("contact")}
              className="hover:text-blue-500 cursor-pointer"
            >
              Contact
            </motion.span>
          </motion.nav>
        </div>
        {/* Scroll Progress Bar */}
        <motion.div
          className="h-1 bg-black origin-left"
          style={{ scaleX: scrollYProgress }}
        />
      </header>

      {/* Mobile Header */}
      <header className="fixed md:hidden bottom-0 left-0 w-full z-50 bg-white text-black shadow-t-lg">
            <motion.div
          className="h-1 bg-black origin-left"
          style={{ scaleX: scrollYProgress }}
        />
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Juber</h1>
          <div className="md:hidden">
            <button
              className="transition-all"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <HiOutlineX size={28} /> : <HiOutlineMenu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="md:hidden absolute bottom-16 left-0 w-full bg-white shadow-md text-black rounded-t-lg py-6 px-4"
            >
              <motion.div
                className="grid grid-cols-3 gap-6 text-center text-sm"
                variants={mobileNavListVariants}
              >
                <motion.button
                  variants={mobileNavItemVariants}
                  onClick={() => scrollToSection("home")}
                  className="flex flex-col items-center text-gray-700 hover:text-blue-500"
                >
                  <HiOutlineHome size={24} />
                  <span>Home</span>
                </motion.button>
                <motion.button
                  variants={mobileNavItemVariants}
                  onClick={() => scrollToSection("about")}
                  className="flex flex-col items-center text-gray-700 hover:text-blue-500"
                >
                  <HiOutlineUser size={24} />
                  <span>About</span>
                </motion.button>
                <motion.button
                  variants={mobileNavItemVariants}
                  onClick={() => scrollToSection("skills")}
                  className="flex flex-col items-center text-gray-700 hover:text-blue-500"
                >
                  <HiOutlineDocumentText size={24} />
                  <span>Skills</span>
                </motion.button>
                <motion.button
                  variants={mobileNavItemVariants}
                  onClick={() => scrollToSection("projects")}
                  className="flex flex-col items-center text-gray-700 hover:text-blue-500"
                >
                  <HiOutlineBriefcase size={24} />
                  <span>Projects</span>
                </motion.button>
                <motion.button
                  variants={mobileNavItemVariants}
                  onClick={() => scrollToSection("education")}
                  className="flex flex-col items-center text-gray-700 hover:text-blue-500"
                >
                  <HiOutlinePhotograph size={24} />
                  <span>Education</span>
                </motion.button>
                <motion.button
                  variants={mobileNavItemVariants}
                  onClick={() => scrollToSection("contact")}
                  className="flex flex-col items-center text-gray-700 hover:text-blue-500"
                >
                  <HiOutlineMail size={24} />
                  <span>Contact</span>
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}
