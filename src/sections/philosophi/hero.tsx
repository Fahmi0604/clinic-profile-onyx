// app/components/HeroVideoResponsive.jsx
'use client';
// import { SlideIn } from '@/components';
import React from 'react';

export default function HeroPhilosophy() {

    return (
        <>
            <section className="relative w-full h-screen overflow-hidden">
                {/* Desktop video */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster=""
                    className="hidden md:block absolute top-0 left-0 w-full h-full object-cover"
                >
                    <source src="/assets/videos/hero2-video-desktop.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Mobile video */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster=""
                    className="block md:hidden absolute top-0 left-0 w-full h-full object-cover"
                >
                    <source src="/assets/videos/hero2-video-mobile.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <div className="absolute inset-0 bg-black/30"></div> {/* overlay */}
                <div className="absolute w-full h-[50vh] bottom-0 bg-gradient-to-t from-custom-overlay/70 to-custom-overlay/0"></div> {/* overlay */}

                <div className='w-full h-full flex justify-center items-end'>
                    <div className="w-full md:max-w-5xl xl:max-w-6xl relative z-10 md:mb-[20vh]">
                        {/* <div className="px-7 md:px-0 md:max-w-[55%] flex flex-col items-center justify-center h-full text-white">
                            <h1 className="text-4xl text-[40px] mb-8 md:text-6xl font-bold">Crafting The <br className='md:hidden' /> Best Version of <span className=' font-eb-garamond italic font-light'>Your Smile</span></h1>
                        </div> */}
                        <div className="p-7 md:p-0 flex flex-col h-full text-white">
                            <h1 className="font-eb-garamond text-4xl text-[40px] mb-2 md:text-6xl md:leading-[76px] font-bold">The 360<sup className=''>o</sup> Smile Philosophy Session</h1>
                            <p className='md:max-w-[45%]'>Our unique approach begins with a personalized consultation session designed to understand your smile, co-diagnosed by our founders using the latest digital technology.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

