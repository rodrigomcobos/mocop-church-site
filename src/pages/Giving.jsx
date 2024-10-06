import React from 'react'
import HeroImg from '../../src/assets/images/churchimg.jpg'


const Giving = () => {
    return (
        <div>
            <header className="relative bg-gradient-to-r from-black to-yellow-900 h-[30dvh] sm:h-[450px]">
                {/* Set the image to cover the entire container */}
                <div className="absolute inset-0">
                    <img src={HeroImg} alt="Background Image" className="w-full h-[30dvh] sm:h-[450px] object-cover object-top opacity-45" />
                </div>

                <section className="absolute inset-0 pt-32 mx-6 flex justify-center items-center z-10 text-center text-white">
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-4xl md:text-5xl mb-6 drop-shadow-md shadow-gray-950 uppercase font-bold">Doações</h1>
                        <h2 className="text-md md:text-2xl uppercase">Servindo o Reino de Deus desde 2004</h2>
                    </div>
                </section>
            </header>
        </div>
    )
}

export default Giving