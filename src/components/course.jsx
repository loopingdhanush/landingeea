import React from "react";
import Brain from "../assets/brain-solid.svg";
import Book from "../assets/book-open-reader-solid.svg";
import graduationcap from "../assets/graduation-cap-solid.svg";

export default function Course(){
    return (
    <section>
        <div className="mx-4">
        <h2 className="text-4xl font-bold text-orange-500 text-center max-w-2xl mx-auto">
            Explore our comprehensive Course Offerings
        </h2>
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mt-4 mb-4">
            Our courses are designed to help students excel in their academic pursuits. From <strong>board exams to competitive entrance tests,</strong> our courses are tailored to meet the diverse needs of students
        </p>

        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            

                <div>
                    
                    <img src={Book} alt="Book Icon" className="w-16 h-16 mx-auto mb-4"/>
                    <h3 className="text-2xl text-orange-400 font-bold text-center mb-4">Class 10 to 12 Board Exam Preparation</h3>
                    <p className="text-gray-700 mb-4 text-center">
                    Comprehensive coaching for Class 10 to 12 board exams with a focus on Mathematics and Science.
                    </p>
                </div>

                <div>
                    <img src={Brain} alt="Brain Icon" className="w-16 h-16 mx-auto mb-4" />
                    <h3 className="text-2xl text-orange-400 font-bold text-center mb-4">JEE Mains, Advanced & NEET UG Preparation</h3>
                    <p className="text-gray-700 mb-4 text-center">
                    Intensive coaching for JEE and NEET with expert faculty, mock tests, and personalized guidance.
                    </p>
                </div>

                <div>
                    <img src={graduationcap} alt="Brain Icon" className="w-16 h-16 mx-auto mb-4" />
                    <h3 className="text-2xl text-orange-400 font-bold text-center mb-4">College Competitive Exam Support</h3>
                    <p className="text-gray-700 mb-4 text-center">
                    Focused preparation for entrance exams with structured curriculum and real-time assessments.
                    </p>
                </div>


        </div>
        </div>
    </section>
    )
}