import { useState } from "react";
import logoFull from "../assets/logo_full.png";
import logoFont from "../assets/logo_font.png";
import { Link } from "react-router-dom";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    {isOpen && (
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-49"
        onClick={() => setIsOpen(false)}
      />
    )}  

      <div className="z-50 fixed top-0 left-0 w-full z-48 bg-white shadow-md px-4 py-2">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          
          <div className="flex items-center">
            <a href="/"><img src={logoFull} className="h-10 rounded-full pr-2" alt="Logo" /></a>
            <img src={logoFont} className="h-5 pr-2" alt="Font Logo" />
          </div>

          
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://easyexamacademy.com/blog/" className="font-medium">Blog</a>
            <Link to="/Resources" className="font-medium">Resources</Link>
            <a href="https://easyexamacademy.com/contact/" className="font-medium">Contact</a>
          </div>

          
          <div className="hidden md:flex items-center space-x-3">
            <a href="https://attendance.easyexamacademy.com/" className="text-sm font-semibold rounded-full bg-orange-300 py-2 px-4">Attendance</a>
            <a href="https://study.easyexamacademy.com/" className="text-sm font-semibold rounded-full bg-black text-white px-4 py-2">Students Login</a>
          </div>

          
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(true)} className="text-gray-600 focus:outline-none">

              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>

            </button>
          </div>

        </div>
      </div>

    {"Mobile Menu"}

      <div className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 z-50`}>
        <div className="p-6 space-y-4">
          <button onClick={() => setIsOpen(false)} className="mb-4">

            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M6 18L18 6M6 6l12 12" />
            </svg>

          </button>

          <a href="https://easyexamacademy.com/blog/" className="block font-medium">Blog</a>
          <Link to="/Resources" className="block font-medium"  onClick={() => setIsOpen(false)}>Resources</Link>
          <a href="https://easyexamacademy.com/contact/" className="block font-medium">Contact</a>
          <hr />
          <a href="https://attendance.easyexamacademy.com/" className="block text-sm font-semibold rounded-full bg-orange-300 py-2 px-4 text-center">Attendance</a>
          <a href="https://study.easyexamacademy.com/" className="block text-sm font-semibold rounded-full bg-black text-white py-2 px-4 text-center">Students Login</a>
        </div>
      </div>

    
      <div className="h-10"></div>
    </>
  );
}
