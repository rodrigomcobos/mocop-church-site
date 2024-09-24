import React from 'react'
import HeroImg from '../../assets/images/churchimg19.jpeg'

const Hero = () => {
    return (
        <>
            <div className="relative bg-gradient-to-r from-black to-yellow-900 font-[sans-serif] h-[50vh]">
                {/* Set the image to cover the entire container */}
                <div className="absolute inset-0">
                    <img src={HeroImg} alt="Background Image" className="w-full h-[50vh] object-cover object-top opacity-45" />
                </div>

                <section className="absolute bottom-14 left-14 pr-14 z-10 text-left text-white flex flex-col justify-end items-start">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-md shadow-gray-950">CHEGUE MAIS PERTO DE JESUS</h1>
                    <p className="text-lg md:text-xl mb-8">Venha conhecer nossa igreja e o que estamos fazendo. Faça parte da nossa comunidade.</p>
                    <button type="button" className="bg-yellow-600 hover:bg-yellow-800 text-white text-base tracking-wide px-6 py-3 rounded-md transition duration-300 ease-in-out shadow-lg hover:shadow-xl font-bold">
                        Saiba mais
                    </button>
                </section>
            </div>
        </>
    )
}

export default Hero