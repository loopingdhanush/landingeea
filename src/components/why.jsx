import React from 'react';
import v from '../assets/window.png'

export default function Why() {
    return(
    <section>
        <div className="max-w-6xl mx-auto px-6 py-12 text-center">

        <h2 className="text-4xl font-bold text-orange-500 text-center max-w-2xl mx-auto">
            Explore Our Complete Learning Ecosystem
        </h2>
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mt-8 mb-16">
            At Easy Exam Academy, we offer more than just classes, we provide a complete support system to help students excel
        </p>

        

        <div className='grid grid-cols-1 md:grid-cols-2 my-16 '>
            <div className="flex flex-col justify-center md:text-left mb-6 md:mb-0 ">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Live Interactive Classes</h2>
                <p className="text-gray-600 mb-6 flex flex-start max-w-md">
                    Live Interactive online classes for Classes 10–12, NEET & JEE. All sessions are recorded for easy revision</p>
            </div>
            <img src={v} alt="Live Classes" className="w-full h-auto rounded-lg shadow-lg mb-6 md:mb-0" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 my-16">

  
        <div className="order-1 md:order-2 flex flex-col justify-center text-center md:text-right mb-6 md:mb-0 ">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
            MCQ Test & Class Platform
            </h2>
            <p className="text-gray-600 mb-6 ">
            An online platform for MCQ practice, performance tracking, and class scheduling. everything in one place.
            </p>
        </div>

     
        <img src={v} alt="Live Classes" className="w-full h-auto rounded-lg shadow-lg order-2 md:order-1"/>

        </div>


        <div className='grid grid-cols-1 md:grid-cols-2'>
            <div className="flex flex-col justify-center md:text-left mb-6 md:mb-0">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Study Materials & Resources</h2>
                <p className="text-gray-600 mb-6 flex flex-start max-w-md">
                    Access PDF notes, solved examples, revision sheets, and videos. all aligned with the latest syllabus and exams.</p>
            </div>
            <img src={v} alt="Live Classes" className="w-full h-auto rounded-lg shadow-lg mb-6 md:mb-0" />
        </div>

        </div>
    </section>)
}