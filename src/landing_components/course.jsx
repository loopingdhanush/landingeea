import React from "react";



import sprinters from "../assets/sprinters.svg";
import movers from "../assets/movers.svg";
import flyers from "../assets/flyers.svg";
import neet from "../assets/neet.svg";
import bmp from "../assets/bmp.svg";
import crash from "../assets/crash.svg";

import bootcamp from "../assets/bootcamp.svg";
import prime from "../assets/prime.svg";

const courseinfo = [
    {
        title: "Sprinters (Classes 6, 7, 8)",
        description: "Building strong foundations, encouraging high level problem-solving, and preparing for Olympiads.",
        icon: sprinters,
    },
    {
        title: "Movers (Classes 9, 10)",
        description: "Strengthening core academic concepts and preparing for board exams with a clear understanding.",
        icon: movers,
    },
    {
        title: "Flyers (Classes 11, 12)",
        description: "Expert coaching in Physics, Chemistry, Biology, and Mathematics, designed to excel in both board exams and entrance exams like JEE/NEET.",
        icon: flyers,
    },
    {
        title: "JEE / NEET and Other Competitive Exams",
        description: "Expert coaching and preparation for competitive exams with a focus on concept clarity, problem-solving skills, and exam strategies.",
        icon: neet,
    },
    {
        title: "Express Crash Course (Class 12)",
        description: "Quick revision for 12th completed students to refresh 11th-grade topics and get entrance exam-ready.",
        icon: crash,
    },
    {
        title: "Logic Bootcamp (Classes 6, 7, 8)",
        description: "Summer program to boost logical thinking, problem solving, and mental ability.",
        icon: bootcamp,
    },
    {
        title: "BMP Course (Class 11)",
        description: "Basic Math for Physics For students transitioning from 10th to 11th, focusing on essential math skills for mastering Physics.",
        icon: bmp,
    },
    {
        title: "Prime",
        description: "One-on-one sessions for individual academic guidance.",
        icon: prime,
    },
    
];

export default function Course(){
    return (
    <section>
        <div className="mx-4 md:mt-20 md:mb-20 mt-10 mb-10">
        <h2 className=" kollektif-font text-4xl font-bold text-orange-500 text-center max-w-2xl mx-auto">Our Courses</h2>
        <p className="text-xl text-gray-900 dark:text-orange-100 text-center max-w-3xl mx-auto mt-8 mb-8 futura-font">
            Our courses are designed to help students excel in their academic pursuits. From <span className="650">board exams to competitive entrance tests,</span> our courses are tailored to meet the diverse needs of students</p>

            <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
                {courseinfo.map((course,index) =>(
                    <div key={index} className="bg-orange-100 dark:bg-gray-900 border-2 border-orange-400 p-6 rounded-3xl shadow-lg">
                        
                        <img src={course.icon} alt="Book Icon" className="w-12 h-12 mx-auto mb-6 mt-2"/>
                        <h3 className="text-2xl text-orange-400 font-bold text-center mb-4 kollektif-font">{course.title}</h3>
                        <p className="text-gray-900 dark:text-orange-100 mb-4 text-center futura-font">
                        {course.description}
                        </p>
                    </div>
                ))}
            </div>

        </div>
    </section>
    )
}