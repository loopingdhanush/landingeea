import React from "react";
import logoFull from "../assets/logo_full.png";


export default function Hero() {
  return (

    <section className="py-10 px-6 text-center ">

      <div className="absolute 
      top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 
      w-[80%] h-[250px] 
      bg-orange-300 opacity-40 
      rounded-b-full blur-2xl pointer-events-none z-0"></div>


        <img className="w-20 m-auto mb-10 animate-pulse" src={logoFull}></img>
        <span className=" text-sm text-gray-900 dark:text-orange-100 mb-2 inline-block ">
  Trusted highly by <span className="font-semibold">100+</span> learners and families</span>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-orange-300 max-w-3xl mb-4 mx-auto kollektif-font">
  Enhance learning with dynamic online tutoring classes
</h1>

      <p className="text-lg md:text-xl text-gray-900 dark:text-orange-100 max-w-3xl mx-auto">
        Our expert tutors create interactive, engaging lessons that build deep understanding, strengthen core skills, and promote measurable academic success.
      </p>

        <div className="mt-8"></div>

        <div className="flex flex-wrap justify-center gap-4 mt-6">
  <a href="https://easyexamacademy.com/blog/"><button className="px-5 py-2 text-sm font-semibold text-white bg-orange-500 rounded-full hover:bg-orange-600 transition-colors duration-200 cursor-pointer">
    Learn More
  </button></a>
  <a href="https://easyexamacademy.com/contact/"><button className="px-5 py-2 text-sm font-semibold text-orange-500 border-2 border-orange-500 rounded-full hover:bg-orange-100 transition-colors duration-200 cursor-pointer">
    Contact Us
  </button></a>
</div>



      
    <div className=""></div>
    </section>
  );
}
