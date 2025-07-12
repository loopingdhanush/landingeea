import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const instagramResults = [
  "https://easyexamacademy.com/wp-content/uploads/2025/05/1.png",
  "https://easyexamacademy.com/wp-content/uploads/2025/05/2.png",
  "https://easyexamacademy.com/wp-content/uploads/2025/05/3.png",
  "https://easyexamacademy.com/wp-content/uploads/2025/05/4.png",
];

export default function ResultsShowcase() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row items-center gap-10">
      
     
      <div className="lg:w-1/2 text-center lg:text-left">
        <h2 className="text-4xl font-bold text-orange-500 mb-4">Outstanding Results</h2>
        <p className="text-lg text-gray-700">
          Our students have consistently delivered excellent academic performance in board exams and entrance tests.
        </p>
        <p className="mt-2 text-lg font-semibold text-gray-700">
          Here's a glimpse of our recent achievers. Join the journey to success!
        </p>
      </div>

    
      <div className="lg:w-1/2 w-full">
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={20}
          loop
          breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 2 },
            }}
          autoplay={{ delay: 3000 }}
        >
          {instagramResults.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`Result ${index + 1}`}
                className="w-full h-[400px] object-contain rounded-xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
