

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const testimonials1 = [
  {
    name: "Jyotiraditya Cheemakurthi",
    text: "Actions speak louder than words. Beginning in 12th grade, I failed physics on my first unit exam, but at the end of the year, I had achieved 95/100 in boards, and the credit goes to Easy Exam Academy.",
  },
  {
    name: "Mohan Nivash J A",
    text: "A wonderful learning platform for IIT-JEE aspirants, concepts are explained in simple ways - both practically and theoretically. Well constructed mock tests and question banks are provided, which trains each and every student for competitive exams. Definitely a worthy institution for students to learn and live successfully!",
  },
  {
    name: "Suganth Gopinath Sangeetha",
    text: "Vijay sir explains every concept clearly and never misses a single doubt—he’s extremely supportive. Thanks to his guidance and the regular practice tests at the academy, I scored 97 in Math and 95 in Science in my Class 10 board exams. I used to be an average student in Science, but this academy really helped me improve.",
  },
  {
    name: "Hemapriya D",
    text: "I am really satisfied with the coaching. Will definitely recommend for others who wish to appear for JEE. The real time examples used while explaining the concepts has really helped the students. Very approachable for any doubts.",
  },
  {
    name: "Bhanupriya Srinivasan",
    text: "Mr. Vijay Anand has good empathy with the students he teaches, motivational. The students continue their relationship with him in a long run. Within 15 days he was able to instill what my son has to learn for JEE advanced. Any student getting tutored by him will be thankful to him.",
  },
  {
    name: "Phani M V S",
    text: "Easy Exam Academy's comprehensive curriculum covers all the necessary topics for NEET, JEE, and CBSE exams. The study materials provided are well-structured and meticulously curated, ensuring that students receive a thorough understanding of each subject.",
  },
];

const testimonials2 = [...testimonials1].reverse();


export default function TestimonialSwiper() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="text-center mb-10">
        <h2 className="text-5xl font-bold text-orange-500 kollektif-font">Testimonials</h2>
        <p className="text-2xl text-gray-900 dark:text-orange-100 mt-2 kollektif-font">Hear from our students</p>
      </div>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        autoplay={{ delay: 4000, disableOnInteraction: true }}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials1.map((t, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white dark:bg-gray-950 border-solid border-2 border-orange-300 rounded-xl shadow-md p-5 mt-10 mb-4 min-h-[6remrem] md:min-h-[8rem]">
              <div className="text-sm font-semibold text-gray-900 dark:text-orange-100">
                {t.name}
              </div>
              <p className="text-gray-900 dark:text-orange-100 text-sm italic mt-1 line-clamp-5">"{t.text}"</p>
            </div>

          </SwiperSlide>
        ))}

        
      </Swiper>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        autoplay={{ delay: 4000, disableOnInteraction: true }}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials2.map((t, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white dark:bg-gray-950 border-solid border-2 border-orange-300 rounded-xl shadow-md p-5 mb-4 min-h-[6rem] md:min-h-[8rem]">
              <div className="text-sm font-semibold text-gray-900 dark:text-orange-100">
                {t.name}
              </div>
              <p className="text-gray-900 dark:text-orange-100 text-sm italic mt-1 line-clamp-5">"{t.text}"</p>

              

            </div>
          </SwiperSlide>
        ))}

        
      </Swiper>

      <div className="pb-10"></div>
    </div>
  );
}
