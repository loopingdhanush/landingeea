import React  from "react";
import logo from "./assets/logo_full.png";

export default function Resources(){
    return(
        <section>
            <div className="mx-auto px-4 py-4 mt-12 max-w-6xl">
                <div className="bg-white p-8 rounded-xl shadow-2xl mb-10 flex flex-row items-center border-2 border-orange-200">
                    <div className="flex items-center justify-center bg-white bg-opacity-80 rounded-full  shadow-md mr-8">
                        <img src={logo} alt="logo" className="md:w-20 w-12" />
                    </div>
                    <div>
                        <h1 className="md:text-5xl text-4xl font-bold mb-0 drop-shadow kollektif-font">Educational Resources</h1>
                        <p className="text-base text-gray-500 mt-2 font-medium">Explore quality guides, learning tools, and more below.</p>
                    </div>
                </div>

                
                <h2 className="text-3xl font-semibold mb-8">Doubth Sheets</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    <div className="bg-white p-4 rounded-lg shadow-xl">
                        <h2 className="text-2xl font-semibold mb-4">Flyers 1</h2>
                        <div className="flex flex-wrap gap-2">
                            <a href="#" className="transition-colors duration-300 bg-blue-100 text-blue-600 border-1 border-blue-500 hover:bg-blue-500 hover:text-white hover:border-white py-1 px-6 rounded-md font-semibold">Maths</a>
                            <a href="#" className="transition-colors duration-300 bg-teal-100 text-teal-600 border-1 border-teal-500 hover:bg-teal-500 hover:text-white hover:border-white py-1 px-6 rounded-md font-semibold">Science</a>
                        </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-xl">
                        <h2 className="text-2xl font-semibold mb-4">Flyers 1</h2>
                        <div className="flex flex-wrap gap-2">
                            <a href="#" className="transition-colors duration-300 bg-blue-100 text-blue-600 border-1 border-blue-500 hover:bg-blue-500 hover:text-white hover:border-white py-1 px-6 rounded-md font-semibold">Maths</a>
                            <a href="#" className="transition-colors duration-300 bg-teal-100 text-teal-600 border-1 border-teal-500 hover:bg-teal-500 hover:text-white hover:border-white py-1 px-6 rounded-md font-semibold">Science</a>
                        </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-xl">
                        <h2 className="text-2xl font-semibold mb-4">Flyers 1</h2>
                        <div className="flex flex-wrap gap-2">
                            <a href="#" className="transition-colors duration-300 bg-blue-100 text-blue-600 border-1 border-blue-500 hover:bg-blue-500 hover:text-white hover:border-white py-1 px-6 rounded-md font-semibold">Maths</a>
                            <a href="#" className="transition-colors duration-300 bg-teal-100 text-teal-600 border-1 border-teal-500 hover:bg-teal-500 hover:text-white hover:border-white py-1 px-6 rounded-md font-semibold">Science</a>
                        </div>
                    </div>
                </div>

                <h2 className="text-3xl font-semibold my-8">Document Folder</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    <div className="bg-white p-4 rounded-lg shadow-xl">
                        <h2 className="text-2xl font-semibold mb-4">Sprinters 1</h2>
                        <div className="flex flex-wrap gap-2">
                            <a href="#" className="transition-colors duration-300 bg-blue-100 text-blue-600 border-1 border-blue-500 hover:bg-blue-500 hover:text-white hover:border-white py-1 px-6 rounded-md font-semibold">Maths & Science</a>
                        </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-xl">
                        <h2 className="text-2xl font-semibold mb-4">Sprinters 2</h2>
                        <div className="flex flex-wrap gap-2">
                            <a href="#" className="transition-colors duration-300 bg-blue-100 text-blue-600 border-1 border-blue-500 hover:bg-blue-500 hover:text-white hover:border-white py-1 px-6 rounded-md font-semibold">Maths</a>
                            <a href="#" className="transition-colors duration-300 bg-teal-100 text-teal-600 border-1 border-teal-500 hover:bg-teal-500 hover:text-white hover:border-white py-1 px-6 rounded-md font-semibold">Science</a>
                        </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-xl">
                        <h2 className="text-2xl font-semibold mb-4">Movers 1</h2>
                        <div className="flex flex-wrap gap-2">
                            <a href="#" className="transition-colors duration-300 bg-blue-100 text-blue-600 border-1 border-blue-500 hover:bg-blue-500 hover:text-white hover:border-white py-1 px-6 rounded-md font-semibold">Maths</a>
                            <a href="#" className="transition-colors duration-300 bg-teal-100 text-teal-600 border-1 border-teal-500 hover:bg-teal-500 hover:text-white hover:border-white py-1 px-6 rounded-md font-semibold">Science</a>
                        </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-xl">
                        <h2 className="text-2xl font-semibold mb-4">Movers 2</h2>
                        <div className="flex flex-wrap gap-2">
                            <a href="#" className="transition-colors duration-300 bg-blue-100 text-blue-600 border-1 border-blue-500 hover:bg-blue-500 hover:text-white hover:border-white py-1 px-6 rounded-md font-semibold">Maths</a>
                            <a href="#" className="transition-colors duration-300 bg-teal-100 text-teal-600 border-1 border-teal-500 hover:bg-teal-500 hover:text-white hover:border-white py-1 px-6 rounded-md font-semibold">Science</a>
                            <a href="#" className="transition-colors duration-300 bg-green-100 text-green-600 border-1 border-green-500 hover:bg-green-500 hover:text-white hover:border-white py-1 px-6 rounded-md font-semibold">Biology</a>
                        </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-xl">
                        <h2 className="text-2xl font-semibold mb-4">Flyers 1</h2>
                        <div className="flex flex-wrap gap-2">
                            <a href="#" className="transition-colors duration-300 bg-blue-100 text-blue-600 border-1 border-blue-500 hover:bg-blue-500 hover:text-white hover:border-white py-1 px-6 rounded-md font-semibold">Maths</a>
                            <a href="#" className="transition-colors duration-300 bg-purple-100 text-purple-600 border-1 border-purple-500 hover:bg-purple-500 hover:text-white hover:border-white py-1 px-6 rounded-md font-semibold">Physics</a>
                        </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-xl">
                        <h2 className="text-2xl font-semibold mb-4">Flyers 2</h2>
                        <div className="flex flex-wrap gap-2">
                            <a href="#" className="transition-colors duration-300 bg-blue-100 text-blue-600 border-1 border-blue-500 hover:bg-blue-500 hover:text-white hover:border-white py-1 px-6 rounded-md font-semibold">Maths</a>
                            <a href="#" className="transition-colors duration-300 bg-purple-100 text-purple-600 border-1 border-purple-500 hover:bg-purple-500 hover:text-white hover:border-white py-1 px-6 rounded-md font-semibold">Physics</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}