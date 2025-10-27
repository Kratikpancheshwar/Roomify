import React, { useState } from 'react'
import image_1 from '../assets/auth_page_image_1.jpg';
import image_2 from '../assets/auth_page_image_2.jpg';
import image_3 from '../assets/auth_page_image_3.jpg';
import image_4 from '../assets/auth_page_image_4.png';
import LoginForm from '../components/AuthTemplatePage/LoginForm';
import SignupForm from '../components/AuthTemplatePage/SignupForm';

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const AuthTemplatePage = () => {
    const [pageState, setPageState] = useState('login');
    return (
        <div className="flex flex-col md:flex-row overflow-hidden min-h-[calc(100vh-4.1rem)]">
            {/* Left Section */}
            <div className="w-full md:w-1/2 bg-white flex flex-col items-center justify-center p-4 md:p-8 order-2 md:order-1">
                <div className="max-w-sm w-full space-y-4 md:space-y-6">
                    <div className="flex items-center justify-center mb-4 md:mb-6">
                        <h1 className="text-xl md:text-2xl font-bold text-[#1F2937]">
                            {pageState == 'login' ? 'Log in to your Account' : 'Create an Account'}
                        </h1>
                    </div>
                    <p className="text-center text-[#6B7280] text-sm md:text-base">
                        {pageState == 'login' ? "Welcome back!" : "Join us today!"}
                    </p>

                    {/* Forms */}
                    {pageState == 'login' 
                        ? <LoginForm setPageState={setPageState} /> 
                        : <SignupForm setPageState={setPageState} />
                    }
                </div>
            </div>

            {/* Right Section */}
            <div className="relative flex justify-center items-center w-full md:w-1/2 bg-gradient-to-r from-[#2563EB] to-[#1E40AF] p-4 md:p-8 min-h-[300px] md:min-h-full order-1 md:order-2">
                {/* Decorative Floating Circles */}
                <div className="absolute -top-10 -left-10 w-20 md:w-40 h-20 md:h-40 bg-white opacity-20 rounded-full animate-float"></div>
                <div className="absolute -bottom-16 -right-16 w-16 md:w-32 h-16 md:h-32 bg-white opacity-10 rounded-full animate-float"></div>

                {/* Heading and Slider Section */}
                <div className='mt-12 md:mt-24 w-full max-w-md'>
                    <h2 className="absolute top-4 md:top-10 text-2xl md:text-4xl font-semibold text-white opacity-90 text-center w-full left-0">
                        Explore Our Community
                    </h2>

                    {/* Card Container for Swiper */}
                    <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-xl shadow-2xl p-3 md:p-6 w-full mx-auto mt-12 md:mt-0">
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                            spaceBetween={30}
                            slidesPerView={1}
                            pagination={{ clickable: true }}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            loop={true}
                            className="w-full"
                        >
                            <SwiperSlide>
                                <div className="flex items-center justify-center aspect-square">
                                    <img src={image_1} className="w-full h-full object-cover rounded-lg shadow-lg" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="flex items-center justify-center aspect-square">
                                    <img src={image_2} className="w-full h-full object-cover rounded-lg shadow-lg" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="flex items-center justify-center aspect-square">
                                    <img src={image_3} className="w-full h-full object-cover rounded-lg shadow-lg" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="flex items-center justify-center aspect-square">
                                    <img src={image_4} className="w-full h-full object-cover rounded-lg shadow-lg" />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
          
        </div>
    );
}

export default AuthTemplatePage
