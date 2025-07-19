import React from 'react';
import v1 from '../assets/gif1.gif'
import v2 from '../assets/gif2.gif'
import v3 from '../assets/gif3.gif'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from "swiper/modules";
import 'swiper/css';
import "swiper/css/navigation";

export default function Instagram() {
    return(
        <section className='mt-10'> 
        <div className='max-w-5xl mx-auto px-6 py-12 text-center'>
            <h2 className='text-4xl text-orange-500  font-bold'>Learn with short and powerful Videos</h2>
            <p className='text-gray-700 mt-4 text-lg mb-12 '> Follow our founder on Instagram and Youtube for bite-sized educational content, exam tips, and learning strategies that make a real impact.</p>
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={20}
                    loop
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    autoplay={{ delay: 3000 }}
                >
                    <SwiperSlide><div className="rounded-xl overflow-hidden shadow-lg w-70 mx-auto">
                        <img
                            src={v1}
                            alt="Educational Reel Preview"
                            className="w-full h-auto"/>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide><div className="rounded-xl overflow-hidden shadow-lg w-70 mx-auto">
                        <img
                            src={v2}
                            alt="Educational Reel Preview"
                            className="w-full h-auto"/>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide><div className="rounded-xl overflow-hidden shadow-lg w-70 mx-auto">
                        <img
                            src={v3}
                            alt="Educational Reel Preview"
                            className="w-full h-auto"/>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide><div className="rounded-xl overflow-hidden shadow-lg w-70 mx-auto">
                        <img
                            src={v1}
                            alt="Educational Reel Preview"
                            className="w-full h-auto"/>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide><div className="rounded-xl overflow-hidden shadow-lg w-70 mx-auto">
                        <img
                            src={v3}
                            alt="Educational Reel Preview"
                            className="w-full h-auto"/>
                        </div>
                    </SwiperSlide>
                    
                </Swiper>

        </div>
        </section>
    )
}