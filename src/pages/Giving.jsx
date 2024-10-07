import React from 'react'
import HeroImg from '../../src/assets/images/headerimg4.jpg'
import GivingSection from '../components/specific/GivingSection'
import Subscribe from '../components/specific/Subscribe'
import GivingFaq from '../components/specific/GivingFaq'


const Giving = () => {
    return (
        <div>
            <header className="relative bg-gradient-to-r from-black to-yellow-900 h-[30dvh] sm:h-[450px]">
                {/* Set the image to cover the entire container */}
                <div className="absolute inset-0">
                    <img src={HeroImg} alt="Background Image" className="w-full h-[30dvh] sm:h-[450px] object-cover object-center opacity-45" />
                </div>

                <section className="absolute inset-0 pt-32 mx-6 flex justify-center items-center z-10 text-center text-white">
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-4xl md:text-5xl mb-6 drop-shadow-md shadow-gray-950 uppercase font-bold font-sanfrancisco">Ofertas</h1>
                        <h2 className="text-md md:text-2xl uppercase font-sanfrancisco">Comprometa-se a doar e vamos mudar vidas juntos.</h2>
                    </div>
                </section>
            </header>

            <GivingSection />
            <GivingFaq />
            <Subscribe />
        </div>
    )
}

export default Giving