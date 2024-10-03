import React from 'react'
import HeroImg from '../../src/assets/images/churchimg.jpg'

const About = () => {
    return (
        <div>
            <div className="relative bg-gradient-to-r from-black to-yellow-900 font-[sans-serif] h-[35dvh] sm:h-[35dvh]">
                {/* Set the image to cover the entire container */}
                <div className="absolute inset-0">
                    <img src={HeroImg} alt="Background Image" className="w-full h-[35dvh] sm:h-[35dvh] object-cover object-center opacity-45" />
                </div>

                <section className="absolute inset-0 pt-32 mx-6 flex justify-center items-center z-10 text-center text-white">
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-5xl md:text-7xl font-seaweed mb-8 drop-shadow-md shadow-gray-950">Sobre a Nossa Igreja</h1>
                        <h2 className="text-md md:text-2xl uppercase">Servindo a comunidade desde 2004</h2>
                    </div>
                </section>
            </div>

        </div>
    )
}

export default About