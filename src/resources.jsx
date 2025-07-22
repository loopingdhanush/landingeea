import React from "react";
import logo from "./assets/logo_full.png";

export default function Resources() {
  return (
    <section>
        
      <div className="mx-auto px-4 py-4 mt-12 max-w-6xl">

        <div className="absolute 
      top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 
      w-[80%] h-[100px] 
      bg-orange-300 opacity-40 
      rounded-b-full blur-2xl pointer-events-none z-0"></div>
        
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
                {subjects.map((sub, idx) => {
                  let colorClass = "blue";
                  if (sub.toLowerCase().includes("science")) colorClass = "teal";
                  if (sub.toLowerCase().includes("biology")) colorClass = "green";
                  if (sub.toLowerCase().includes("physics")) colorClass = "purple";

                  return (
                    <a
                      key={idx}
                      href="#"
                      className={`duration-300 
                        bg-${colorClass}-100 dark:bg-${colorClass}-900 
                        text-${colorClass}-600 dark:text-${colorClass}-300 
                        border border-${colorClass}-500 
                        hover:bg-${colorClass}-500 hover:text-white hover:border-white 
                        py-1 px-6 rounded-md font-semibold`}
                    >
                      {sub}
                    </a>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        
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
                {subjects.map((sub, idx) => {
                  let colorClass = "blue";
                  if (sub.toLowerCase().includes("science")) colorClass = "teal";
                  if (sub.toLowerCase().includes("biology")) colorClass = "green";
                  if (sub.toLowerCase().includes("physics")) colorClass = "purple";

                  return (
                    <a
                      key={idx}
                      href="#"
                      className={`duration-300 
                        bg-${colorClass}-100 dark:bg-${colorClass}-900 
                        text-${colorClass}-600 dark:text-${colorClass}-300 
                        border border-${colorClass}-500 
                        hover:bg-${colorClass}-500 hover:text-white hover:border-white 
                        py-1 px-6 rounded-md font-semibold`}
                    >
                      {sub}
                    </a>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
