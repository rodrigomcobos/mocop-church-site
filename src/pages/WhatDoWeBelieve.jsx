import React from 'react';
import Image from 'react-image-webp';
import Subscribe from '../components/specific/Subscribe';
import AboutContent from '../components/specific/AboutContent';
import CoreValues from '../components/specific/CoreValues';
import Team from '../components/specific/Team';

// Import both JPG and WebP formats
import HeroImgJPG from '../../src/assets/images/headerimg.jpg';
import HeroImgWebP from '../../src/assets/images/headerimg.webp';


const WhatDoWeBelieve = () => {
    return (
        <div>
            <header className="relative bg-gradient-to-r from-black to-yellow-900 font-[sans-serif] h-[40dvh] sm:h-[450px]">
                {/* Set the image to cover the entire container */}
                <div className="absolute inset-0">
                    <Image
                        src={HeroImgJPG}
                        webp={HeroImgWebP}
                        alt="No que Acreditamos Header Image"
                        className="w-full h-[40dvh] sm:h-[450px] object-cover object-center opacity-45"
                        loading="lazy"

                    />
                </div>

                <section className="absolute inset-0 pt-32 mx-6 flex justify-center items-center z-10 text-center text-white">
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-3xl md:text-5xl mb-6 drop-shadow-md shadow-gray-950 uppercase font-bold">
                            No que Acreditamos
                        </h1>
                        <h2 className="text-md md:text-2xl uppercase">
                            Servindo o Reino de Deus desde 2004
                        </h2>
                    </div>
                </section>
            </header>

            <AboutContent />
            <CoreValues />
            <Team />
            <Subscribe />
        </div>
    )
}

export default WhatDoWeBelieve