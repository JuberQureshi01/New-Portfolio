'use client';
import { useState } from 'react';
import {
  HiOutlineMenu,
  HiOutlineX,
  HiOutlineHome,
  HiOutlineUser,
  HiOutlineDocumentText,
  HiOutlineBriefcase,
  HiOutlinePhotograph,
  HiOutlineMail,
} from 'react-icons/hi';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Close mobile menu on click
    } else {
      console.warn(`Element with id "${id}" not found.`);
    }
  };

  return (
    <div>
      {/* Desktop Header */}
      <header className="fixed top-0 hidden md:block left-0 w-full z-50 bg-white text-black shadow">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Juber</h1>
          <nav className="hidden md:flex space-x-6 text-sm">
            <span onClick={() => scrollToSection('home')} className="hover:text-blue-500 cursor-pointer">Home</span>
            <span onClick={() => scrollToSection('about')} className="hover:text-blue-500 cursor-pointer">About</span>
            <span onClick={() => scrollToSection('projects')} className="hover:text-blue-500 cursor-pointer">Projects</span>
            <span onClick={() => scrollToSection('skills')} className="hover:text-blue-500 cursor-pointer">Skills</span>
            <span onClick={() => scrollToSection('contact')} className="hover:text-blue-500 cursor-pointer">Contact</span>
          </nav>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="fixed md:hidden bottom-0 left-0 w-full z-50 bg-white text-black shadow">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Juber</h1>
          <div className="md:hidden">
            <button className="transition-all" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <HiOutlineX size={28} /> : <HiOutlineMenu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Menu */}
        {isOpen && (
          <div className="md:hidden absolute bottom-16 left-0 w-full bg-white shadow-md text-black rounded-b-lg py-6 px-4">
            <div className="grid grid-cols-3 gap-6 text-center text-sm">
              <button onClick={() => scrollToSection('home')} className="flex flex-col items-center text-gray-700 hover:text-blue-500">
                <HiOutlineHome size={24} />
                <span>Home</span>
              </button>
              <button onClick={() => scrollToSection('about')} className="flex flex-col items-center text-gray-700 hover:text-blue-500">
                <HiOutlineUser size={24} />
                <span>About</span>
              </button>
              <button onClick={() => scrollToSection('skills')} className="flex flex-col items-center text-gray-700 hover:text-blue-500">
                <HiOutlineDocumentText size={24} />
                <span>Skills</span>
              </button>
              <button onClick={() => scrollToSection('projects')} className="flex flex-col items-center text-gray-700 hover:text-blue-500">
                <HiOutlineBriefcase size={24} />
                <span>Projects</span>
              </button>
              <button onClick={() => scrollToSection('education')} className="flex flex-col items-center text-gray-700 hover:text-blue-500">
                <HiOutlinePhotograph size={24} />
                <span>Education</span>
              </button>
              <button onClick={() => scrollToSection('contact')} className="flex flex-col items-center text-gray-700 hover:text-blue-500">
                <HiOutlineMail size={24} />
                <span>Contact</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
