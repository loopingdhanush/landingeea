import React from "react";
import logo from "./assets/logo_full.png";

// Helper function to get Tailwind-safe subject colors
const getColorClasses = (subject) => {
  const s = subject.toLowerCase();
  if (s.includes("biology")) {
    return "bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 border-green-500 hover:bg-green-500";
  }
  if (s.includes("physics")) {
    return "bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 border-purple-500 hover:bg-purple-500";
  }
  if (s.includes("science")) {
    return "bg-teal-100 dark:bg-teal-900 text-teal-600 dark:text-teal-300 border-teal-500 hover:bg-teal-500";
  }
  // Default (e.g. Maths)
  return "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 border-blue-500 hover:bg-blue-500";
};

export default function Resources() {
  return (
    <section>
      <div className="mx-auto px-4 py-4 mt-12 max-w-6xl">

        {/* Orange blurred background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[100px] bg-orange-300 opacity-40 rounded-b-full blur-2xl pointer-events-none z-0"></div>

        {/* Header */}
        <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-2xl mb-10 flex flex-row items-center border-2 border-orange-200 dark:border-orange-500">
          <div className="flex items-center justify-center bg-white dark:bg-gray-800 bg-opacity-80 rounded-full shadow-md mr-8">
            <img src={logo} alt="logo" className="md:w-20 w-12" />
          </div>
          <div>
            <h1 className="md:text-5xl text-4xl font-bold mb-0 drop-shadow kollektif-font text-gray-900 dark:text-white">
              Educational Resources
            </h1>
            <p className="text-base text-gray-500 dark:text-gray-300 mt-2 font-medium">
              Explore quality guides, learning tools, and more below.
            </p>
          </div>
        </div>

        {/* Doubt Sheets */}
        <h2 className="text-3xl font-semibold mb-8 text-gray-900 dark:text-white">Doubt Sheets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Movers 1", subjects: ["Maths & Science"] },
            { title: "Flyers 1", subjects: ["Maths", "Science"] },
            { title: "Flyers 2", subjects: ["Maths", "Science"] },
          ].map(({ title, subjects }, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-xl">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">{title}</h2>
              <div className="flex flex-wrap gap-2">
                {subjects.map((sub, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className={`duration-300 ${getColorClasses(sub)} hover:text-white hover:border-white py-1 px-6 rounded-md font-semibold`}
                  >
                    {sub}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Document Folder */}
        <h2 className="text-3xl font-semibold my-8 text-gray-900 dark:text-white">Document Folder</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Sprinters 1", subjects: ["Maths & Science"] },
            { title: "Sprinters 2", subjects: ["Maths", "Science"] },
            { title: "Movers 1", subjects: ["Maths", "Science"] },
            { title: "Movers 2", subjects: ["Maths", "Science", "Biology"] },
            { title: "Flyers 1", subjects: ["Maths", "Physics"] },
            { title: "Flyers 2", subjects: ["Maths", "Physics"] },
          ].map(({ title, subjects }, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-xl">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">{title}</h2>
              <div className="flex flex-wrap gap-2">
                {subjects.map((sub, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className={`duration-300 ${getColorClasses(sub)} hover:text-white hover:border-white py-1 px-6 rounded-md font-semibold`}
                  >
                    {sub}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
