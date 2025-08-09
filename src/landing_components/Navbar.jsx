import { useState, useEffect } from "react";
import logoFull from "../assets/logo_full.png";
import { Link } from "react-router-dom";

import lighticon from "../assets/lightmode.svg"
import darkicon  from  "../assets/darkmode.svg"

export default function Navbar() {
 
  const [darkMode, setDarkMode] = useState(() => {
  const saved = localStorage.getItem("darkMode");
  if (saved !== null) return saved === "true";
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
});

  const [isOpen, setIsOpen] = useState(false);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
  function handleClickOutside(event) {
    if (!event.target.closest(".relative")) {
      setDropdownOpen(false);
    }
  }

  document.addEventListener("mousedown", handleClickOutside);
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);


  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div className="z-50 fixed top-0 left-0 right-0 w-full z-48 bg-white dark:bg-gray-900 shadow-md px-4 py-2 ring-1 ring-orange-200 dark:ring-gray-800 text-black dark:text-white transition-colors">
        <div className="max-w-7xl mx-auto flex items-center justify-between">

       
          <div className="flex items-center  space-x-2">
            <a href="/">
              <img
                src={logoFull}
                className="h-10 rounded-full"
                alt="Logo"
              />
            </a>
            <div className="flex flex-col items-start">
              <h1 className="text-gray-900 dark:text-white kollektif-font text-md md:text-xl font-bold leading-none">
                Easy Exam Academy
              </h1>
              <p className="text-orange-400 md:text-[9.2px] text-[7.5px] kollectif-font font-bold leading-none md:pb-1">
                Empowering Young Minds, Inspiring Futures!
              </p>
            </div>
          </div>



          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/" className="font-medium kollektif-font">Home</Link>
            <Link to="/Resources" className="font-medium kollektif-font">Resources</Link>
            <Link to="/contact" className="font-medium kollektif-font">Contact</Link>

            <div className="relative">
              <button onClick={() => setDropdownOpen(!dropdownOpen)} className="font-medium kollektif-font flex items-center space-x-1">
                <span>Download</span>
                  <svg className={`w-4 h-4 transform transition-transform ${dropdownOpen ? "rotate-180" : "rotate-0"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
              </button>

              {dropdownOpen && (
                <div className="absolute mt-6 w-48 bg-white dark:bg-gray-900 rounded-md shadow-lg border-2 border-orange-600 z-50">
                  <a
                    href="https://drive.google.com/file/d/1pJHxVdQpo-JXanOiTGfpKbFOmNSaHveG/view?usp=drive_link"
                    download
                    className="block px-4 py-2 text-sm text-gray-700 rounded-md dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Brochure
                  </a>
                  <a
                    href="https://drive.google.com/file/d/1aFQ_KDCDqC9XcB9eevEcwpD3fTgiiKtW/view?usp=sharing"
                    download
                    className="block px-4 py-2 text-sm text-gray-700 rounded-md dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Attendance Policy
                  </a>
                </div>
              )}

            </div>

          </div>

          
          <div className="hidden lg:flex items-center space-x-3">
            <a href="https://attendance.easyexamacademy.com/" className="w-32 text-center text-orange-500 text-sm font-bold border-solid border-2 border-orange-500 rounded-2xl dark:bg-grey-800 py-2 px-4 hover:bg-orange-100 dark:hover:bg-gray-800 kollektif-font">Attendance</a>
            <a href="https://study.easyexamacademy.com/" className="w-36 text-center text-sm font-semibold border-solid border-2 border-gray-800 dark:border-white rounded-2xl text-black dark:text-white px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 kollektif-font">Students Login</a>

            
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="ml-2 py-2 px-2 rounded-2xl border-solid border-2 border-gray-800 dark:border-white rounded-2xl text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
              title="Toggle dark mode"
            >
               <img
    src={darkMode ? lighticon : darkicon}
    alt={darkMode ? "Light Mode" : "Dark Mode"}
    className="w-6 h-6"
  />
            </button>
          </div>

          
          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsOpen(true)} className="text-gray-600 dark:text-gray-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>


      <div className={`fixed top-0 left-0 w-64 h-full bg-white dark:bg-gray-800 text-black dark:text-white shadow-lg transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 z-50`}>
        <div className="p-6 space-y-4">
          <button onClick={() => setIsOpen(false)} className="mb-4">
            <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          
          <Link to="/" className="block font-medium kollektif-font" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/Resources" className="block font-medium kollektif-font" onClick={() => setIsOpen(false)}>Resources</Link>
          <Link to="/contact" className="block font-medium kollektif-font" onClick={() => setIsOpen(false)}>Contact</Link>
          <hr className="border-gray-300 dark:border-gray-600" />
          <div className=" space-y-2">
            <a href="https://drive.google.com/file/d/1pJHxVdQpo-JXanOiTGfpKbFOmNSaHveG/view?usp=drive_link" className="block font-medium kollektif-font text-orange-500">Download Brochure</a>
            <a href="https://drive.google.com/file/d/1aFQ_KDCDqC9XcB9eevEcwpD3fTgiiKtW/view?usp=drive_link" className="block font-medium kollektif-font text-orange-500">Download Attendance Policy</a>
          </div>
          <hr className="border-gray-300 dark:border-gray-600" />
          <a href="https://attendance.easyexamacademy.com/" className="block text-sm text-gray-900 font-medium rounded-full bg-orange-300 py-2 px-4 text-center kollektif-font">Attendance</a>
          <a href="https://study.easyexamacademy.com/" className="block text-sm font-semibold rounded-full font-medium dark:bg-white bg-black text-white dark:text-black py-2 px-4 text-center kollektif-font">Students Login</a>

          
           <button
              onClick={() => setDarkMode(!darkMode)}
              className="ml-2 py-2 px-2 rounded-2xl border-solid border-2 border-gray-800 dark:border-white rounded-2xl text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
              title="Toggle dark mode"
            >
               <img
    src={darkMode ? lighticon : darkicon}
    alt={darkMode ? "Light Mode" : "Dark Mode"}
    className="w-6 h-6"
  />
            </button>
        </div>
      </div>

      
      <div className="h-16"></div>
    </>
  );
}
