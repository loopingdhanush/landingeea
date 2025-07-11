

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Anuradha Nithyanandh",
    text: "Highly recommend! The tutors explain concepts at the right time and are very interactive. They help students understand strengths and prepare early for senior classes.",
  },
  {
    name: "SHREEMAN V",
    text: "Innovative teaching and dedication. The passion for education shows in their method and communication. They truly motivate and build student confidence.",
  },
  {
    name: "Suganth Gopinath Sangeetha",
    text: "Awesome teaching and guidance! Loved Vijay sir's humorous and engaging teaching style. Most recommended!",
  },
  {
    name: "Yasvini",
    text: "The classes helped me score 97 in Math and 95 in Science. Very clear teaching and supportive atmosphere. Truly thankful!",
  },
  {
    name: "Pavithra N",
    text: "Joined from 9th to NEET prep. Physics became my favorite subject thanks to real-life examples. Great revision tools and amazing support!",
  },
];

export default function TestimonialSwiper() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="text-center mb-10">
        <h2 className="text-5xl font-bold text-orange-400">Testimonials</h2>
        <p className="text-2xl text-gray-700 mt-2">Hear from our students</p>
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
        {testimonials.map((t, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-xl shadow-md p-6 mt-10 mb-4 h-40">
              <p className="text-gray-700 text-sm italic">"{t.text}"</p>

              <div className="mt-4 text-sm font-semibold text-gray-900">
                — {t.name}
              </div>

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
        {testimonials.map((t, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-xl shadow-md p-6 mb-1 h-40">
              <p className="text-gray-700 text-sm italic">"{t.text}"</p>

              <div className="mt-4 text-sm font-semibold text-gray-900">
                — {t.name}
              </div>

            </div>
          </SwiperSlide>
        ))}

        
      </Swiper>
    </div>
  );
}
