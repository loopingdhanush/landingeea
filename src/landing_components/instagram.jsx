import React from 'react';
import v1 from '../assets/gif1.gif'
import v2 from '../assets/gif2.gif'
import v3 from '../assets/gif3.gif'

import instagram from '../assets/instagram.svg'
import youtube from '../assets/youtube.svg';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from "swiper/modules";
import 'swiper/css';
import "swiper/css/navigation";

export default function Instagram() {
    return(
        <section className='mt-10'> 
        <div className='max-w-5xl mx-auto px-6 py-12 text-center'>
            <h2 className='text-4xl text-orange-500  font-bold kollektif-font'>Learn with short and powerful Videos</h2>
            <p className='text-gray-900 dark:text-orange-100 mt-4 text-xl mb-12 futura-font'> Follow our founder on Instagram and Youtube for bite-sized educational content, exam tips, and learning strategies that make a real impact.</p>

            <div className="flex md:flex-row justify-center items-center mb-6 space-x-6 pb-8">
                <a
                    href="https://www.instagram.com/easyexamacademy_/"
                    
                    className="flex items-center bg-[#E4405F]  text-white rounded-2xl px-3 py-1 shadow-md "
                >
                    <img src={instagram} alt="Instagram" className="w-8 h-8 mr-2" />
                    <span className="futura-font text-md  mr-2">Follow us on Instagram</span>
                </a>

                <a
                    href="https://www.youtube.com/@EasyExamAcademy"
                    
                    className="flex items-center bg-red-600 text-white rounded-2xl px-3 py-1 shadow-md "
                >
                    <img src={youtube} alt="YouTube" className="w-8 h-8 mr-2" />
                    <span className="futura-font text-md  ">Subscribe on YouTube</span>
                </a>
            </div>

                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={20}
                    loop={true}  
                    speed={2000}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    autoplay={{
                        delay: 0,                
                        disableOnInteraction: false,
                    }}
                    
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