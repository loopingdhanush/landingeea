import { useState, useEffect } from "react";
import logoFull from "../assets/logo_full.png";
import logoFont from "../assets/logo_font.png";
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
        <div className="max-w-6xl mx-auto flex items-center justify-between">

       
          <div className="flex items-center">
            <a href="/">
              <img src={logoFull} className="h-10 rounded-full pr-2" alt="Logo" />
            </a>
            <h1 className="ml-1 text-gray-900 dark:text-white kollektif-font text-md md:text-xl font-bold">Easy Exam Academy</h1>
          </div>

          
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/" className="font-medium">Home</Link>
            <a href="https://easyexamacademy.com/blog/" className="font-medium">Blog</a>
            <Link to="/Resources" className="font-medium">Resources</Link>
            <a href="https://easyexamacademy.com/contact/" className="font-medium">Contact</a>
          </div>

          
          <div className="hidden lg:flex items-center space-x-3">
            <a href="https://attendance.easyexamacademy.com/" className="text-orange-500 text-sm font-bold border-solid border-2 border-orange-500 rounded-2xl dark:bg-grey-800 py-2 px-4 hover:bg-orange-100 dark:hover:bg-gray-800">Attendance</a>
            <a href="https://study.easyexamacademy.com/" className="text-sm font-semibold border-solid border-2 border-gray-800 dark:border-white rounded-2xl text-black dark:text-white px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800">Students Login</a>

            
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

          <a href="https://easyexamacademy.com/blog/" className="block font-medium">Blog</a>
          <Link to="/Resources" className="block font-medium" onClick={() => setIsOpen(false)}>Resources</Link>
          <a href="https://easyexamacademy.com/contact/" className="block font-medium">Contact</a>
          <hr className="border-gray-300 dark:border-gray-600" />
          <a href="https://attendance.easyexamacademy.com/" className="block text-sm text-gray-900 font-medium rounded-full bg-orange-300 py-2 px-4 text-center">Attendance</a>
          <a href="https://study.easyexamacademy.com/" className="block text-sm font-semibold rounded-full font-medium dark:bg-white bg-black text-white dark:text-black py-2 px-4 text-center">Students Login</a>

          
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
